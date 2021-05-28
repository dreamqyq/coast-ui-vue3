import { mount, VueWrapper } from '@vue/test-utils';
import { ComponentPublicInstance, nextTick, ref } from 'vue';
import { getBodyElement } from '@coast/__tests__/utils/utils';
import Dialog from '../Dialog.vue';
import { openDialog } from './../openDialog';
jest.mock('../../theme-chalk/iconfont/index.js');

const AXIOM = 'Tomorrow will be even better';
const DEFAULT_TITLE = '提示';
const TITLE = 'I am title';
type DialogEventNameType = 'cancel' | 'confirm';

const _mount = (
  props: {
    fnName?: DialogEventNameType;
    fn?: () => unknown;
    title?: string;
    overlayClosable?: boolean;
    onChange?: boolean;
  } = {},
) => {
  const { fnName, fn, title, overlayClosable, onChange } = props;
  const bindEvent = fnName ? `:${fnName}="handle"` : '';
  const bindTitle = title ? `title="${title}"` : '';
  const bindOnChange = onChange !== undefined ? `@update:visible="handleChange"` : '';
  const bindOverlayClosable =
    overlayClosable !== undefined ? `:overlayClosable="${overlayClosable}"` : '';
  return mount({
    components: { 'co-dialog': Dialog },
    template: `
        <co-dialog 
          v-model:visible="visible"
          ${bindTitle}
          ${bindEvent}
          ${bindOnChange}
          ${bindOverlayClosable}
        >${AXIOM}</co-dialog>
      `,
    setup() {
      const visible = ref(true);
      const handle = fn;
      const handleChange = jest.fn();
      return { visible, handle, handleChange };
    },
  });
};

const handleClickElementAndWait = async (element: HTMLElement) => {
  element.click();
  await nextTick();
};

const handleGetDialogButtonByIndex = (index: number): HTMLElement => {
  const { lastElementChild } = getBodyElement();
  return lastElementChild.querySelectorAll('.coast-button')[index] as HTMLElement;
};

const handleClickOverlay = async () => {
  const { lastButOneElementChild } = getBodyElement();
  await handleClickElementAndWait(lastButOneElementChild as HTMLElement);
};

const handleTriggerEventAndExpect = async (
  fnName: DialogEventNameType,
  fn: () => unknown = jest.fn(),
) => {
  const wrapper = _mount({ fnName, fn });
  const vm = wrapper.vm;
  await expectEventTriggerCorrectly({
    fn,
    fnName,
    wrapper,
    expectFn: () => {
      expect(vm.handle).toHaveBeenCalled();
    },
  });
};

const expectDialogExist = (title = DEFAULT_TITLE, bodyChildrenLength = 2) => {
  const { bodyChildren, lastButOneElementChild, lastElementChild } = getBodyElement();
  expect(bodyChildren.length).toBe(bodyChildrenLength);
  expect(lastButOneElementChild.className).toContain('coast-dialog-overlay');
  expect(lastElementChild.className).toContain('coast-dialog-wrapper');
  expect(lastElementChild.firstElementChild.className).toContain('coast-dialog');
  expect(lastElementChild.querySelector('header').textContent.trim()).toBe(title);
  expect(lastElementChild.querySelector('main').textContent).toBe(AXIOM);
};

const expectDialogExistThenUnmount = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  expectDialogExist();
  wrapper.unmount();
};

const expectDialogHasRemoved = () => {
  const { bodyChildren } = getBodyElement();
  expect(bodyChildren.length).toEqual(0);
};

const expectEventTriggerCorrectly = async ({
  fn,
  fnName,
  wrapper,
  expectFn,
}: {
  fnName: DialogEventNameType;
  fn: () => unknown;
  wrapper?: VueWrapper<ComponentPublicInstance>;
  expectFn?: () => void;
}) => {
  const buttonIndex = fnName === 'confirm' ? 0 : 1;
  await handleClickElementAndWait(handleGetDialogButtonByIndex(buttonIndex));
  expect(fn).toHaveBeenCalled();
  expectFn?.();
  fn() === false ? wrapper && expectDialogExistThenUnmount(wrapper) : expectDialogHasRemoved();
};

describe('Dialog', () => {
  it('create', () => {
    const wrapper = _mount();
    expectDialogExistThenUnmount(wrapper);
  });

  it('render title', () => {
    const wrapper = _mount({ title: TITLE });
    expectDialogExist(TITLE);
    wrapper.unmount();
  });

  it('click header close button can close dialog', async () => {
    _mount();
    const { lastElementChild } = getBodyElement();
    const closeButton = lastElementChild.querySelector('.coast-dialog-close') as HTMLElement;
    await handleClickElementAndWait(closeButton);
    expectDialogHasRemoved();
  });

  it('click overlay can close dialog', async () => {
    _mount();
    await handleClickOverlay();
    expectDialogHasRemoved();
  });

  it('overlayClosable is false, click overlay cannot close dialog', async () => {
    const wrapper = _mount({ overlayClosable: false });
    await handleClickOverlay();
    expectDialogExistThenUnmount(wrapper);
  });

  it('watch dialog visible change', async () => {
    const wrapper = _mount({ onChange: true });
    const vm = wrapper.vm;
    await handleClickOverlay();
    expect(vm.handleChange).toHaveBeenCalled();
  });

  it('confirm event, not return, close dialog', async () => {
    await handleTriggerEventAndExpect('confirm');
  });

  it('confirm event, return true, close dialog', async () => {
    await handleTriggerEventAndExpect(
      'confirm',
      jest.fn(() => true),
    );
  });

  it('confirm event, return false, cannot close dialog', async () => {
    await handleTriggerEventAndExpect(
      'confirm',
      jest.fn(() => false),
    );
  });

  it('cancel event, not return, close dialog', async () => {
    await handleTriggerEventAndExpect('cancel');
  });

  it('cancel event, return true, close dialog', async () => {
    await handleTriggerEventAndExpect(
      'cancel',
      jest.fn(() => true),
    );
  });

  it('cancel event, return false, cannot close dialog', async () => {
    await handleTriggerEventAndExpect(
      'cancel',
      jest.fn(() => false),
    );
  });
});

describe('openDialog', () => {
  it('create dialog', () => {
    const wrapper = openDialog({ content: AXIOM, title: TITLE });
    expectDialogExist(TITLE, 3);
    wrapper.close();
    expectDialogHasRemoved();
  });

  it('click overlay can close dialog', async () => {
    openDialog({ content: AXIOM });
    await handleClickOverlay();
    expectDialogHasRemoved();
  });
  it('overlayClosable is false, click overlay cannot close dialog', async () => {
    const wrapper = openDialog({ content: AXIOM, overlayClosable: false });
    await handleClickOverlay();
    expectDialogExist(DEFAULT_TITLE, 3);
    wrapper.close();
  });

  it('confirm event', async () => {
    const confirm = jest.fn();
    openDialog({ content: AXIOM, confirm });
    await expectEventTriggerCorrectly({
      fn: confirm,
      fnName: 'confirm',
    });
  });
  it('cancel event', async () => {
    const cancel = jest.fn();
    openDialog({ content: AXIOM, cancel });
    await expectEventTriggerCorrectly({
      fn: cancel,
      fnName: 'cancel',
    });
  });
});

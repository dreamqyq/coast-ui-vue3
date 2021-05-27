import { mount, VueWrapper } from '@vue/test-utils';
import { ComponentPublicInstance, nextTick, ref } from 'vue';
import { getBodyElement } from '@coast/__tests__/utils';
import Dialog from '../Dialog.vue';
import { openDialog } from './../openDialog';
jest.mock('../../theme-chalk/iconfont/index.js');

const AXIOM = 'Tomorrow will be even better';
const TITLE = 'I am title';
type DialogEventNameType = 'cancel' | 'confirm';

const _mount = (fnName: DialogEventNameType, handleReturn?: boolean) => {
  return mount({
    components: { 'co-dialog': Dialog },
    template: `
        <co-dialog 
          v-model:visible="visible"
          :${fnName}="handle"
        ></co-dialog>
      `,
    setup() {
      const visible = ref(true);
      const handle = jest.fn(() => handleReturn);
      return { visible, handle };
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

const handleClickCloseButton = async () => {
  const { lastElementChild } = getBodyElement();
  const closeButton = lastElementChild.querySelector('.coast-dialog-close') as HTMLElement;
  await handleClickElementAndWait(closeButton);
};

const expectDialogExist = () => {
  const { bodyChildren, lastButOneElementChild, lastElementChild } = getBodyElement();
  expect(bodyChildren.length).toBe(2);
  expect(lastButOneElementChild.className).toContain('coast-dialog-overlay');
  expect(lastElementChild.className).toContain('coast-dialog-wrapper');
  expect(lastElementChild.firstElementChild.className).toContain('coast-dialog');
  expect(lastElementChild.querySelector('header').textContent.trim()).toBe('提示');
};

const expectDialogExistThenUnmount = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  expectDialogExist();
  wrapper.unmount();
};

const expectDialogHasRemoved = () => {
  const { bodyChildren } = getBodyElement();
  expect(bodyChildren.length).toEqual(0);
};

const expectConfirmOrCancelCorrectly = async (
  fnName: DialogEventNameType,
  handleReturn?: boolean,
) => {
  const wrapper = _mount(fnName, handleReturn);
  const vm = wrapper.vm;
  const buttonIndex = fnName === 'confirm' ? 0 : 1;
  await handleClickElementAndWait(handleGetDialogButtonByIndex(buttonIndex));
  expect(vm.handle).toHaveBeenCalled();
  // return undefined or return true, close dialog
  handleReturn === false ? expectDialogExistThenUnmount(wrapper) : expectDialogHasRemoved();
};

const expectContentEqualAXIOM = () => {
  const { lastElementChild } = getBodyElement();
  expect(lastElementChild.querySelector('main').textContent).toBe(AXIOM);
};

const expectTitleEqualTITLE = () => {
  const { lastElementChild } = getBodyElement();
  expect(lastElementChild.querySelector('header').textContent.trim()).toBe(TITLE);
};

describe('Dialog', () => {
  it('create', () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
      },
      slots: {
        default: AXIOM,
      },
    });
    expectContentEqualAXIOM();
    expectDialogExistThenUnmount(wrapper);
  });

  it('render title', () => {
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        title: TITLE,
      },
      slots: {
        default: AXIOM,
      },
    });
    expectTitleEqualTITLE();
    wrapper.unmount();
  });

  it('click header close button can close dialog', async () => {
    mount({
      components: { 'co-dialog': Dialog },
      template: `<co-dialog v-model:visible="visible"></co-dialog>`,
      setup() {
        const visible = ref(true);
        return { visible };
      },
    });
    await handleClickCloseButton();
    expectDialogHasRemoved();
  });

  it('click overlay can close dialog', async () => {
    mount({
      components: { 'co-dialog': Dialog },
      template: `<co-dialog v-model:visible="visible"></co-dialog>`,
      setup() {
        const visible = ref(true);
        return { visible };
      },
    });
    await handleClickOverlay();
    expectDialogHasRemoved();
  });

  it('overlayClosable is false, click overlay cannot close dialog', async () => {
    const wrapper = mount({
      components: { 'co-dialog': Dialog },
      template: `<co-dialog 
        v-model:visible="visible"
        :overlayClosable="false"
      ></co-dialog>`,
      setup() {
        const visible = ref(true);
        return { visible };
      },
    });
    await handleClickOverlay();
    expectDialogExistThenUnmount(wrapper);
  });

  it('watch dialog visible change', async () => {
    const wrapper = mount({
      components: { 'co-dialog': Dialog },
      template: `
        <co-dialog 
          v-model:visible="visible"
          @update:visible="handleChange"
        ></co-dialog>
      `,
      setup() {
        const visible = ref(true);
        const handleChange = jest.fn();
        return { visible, handleChange };
      },
    });
    const vm = wrapper.vm;
    await handleClickOverlay();
    expect(vm.handleChange).toHaveBeenCalled();
  });

  it('confirm event, not return, close dialog', async () => {
    await expectConfirmOrCancelCorrectly('confirm');
  });

  it('confirm event, return true, close dialog', async () => {
    await expectConfirmOrCancelCorrectly('confirm', true);
  });

  it('confirm event, return false, cannot close dialog', async () => {
    await expectConfirmOrCancelCorrectly('confirm', false);
  });

  it('cancel event, not return, close dialog', async () => {
    await expectConfirmOrCancelCorrectly('cancel');
  });

  it('cancel event, return true, close dialog', async () => {
    await expectConfirmOrCancelCorrectly('cancel', true);
  });

  it('cancel event, return false, cannot close dialog', async () => {
    await expectConfirmOrCancelCorrectly('cancel', false);
  });
});

describe('openDialog', () => {
  it('create dialog', () => {
    const wrapper = openDialog({ content: AXIOM, title: TITLE });
    expectContentEqualAXIOM();
    expectTitleEqualTITLE();
    const { bodyChildren, lastButOneElementChild, lastElementChild } = getBodyElement();
    expect(bodyChildren.length).toBe(3);
    expect(lastButOneElementChild.className).toContain('coast-dialog-overlay');
    expect(lastElementChild.className).toContain('coast-dialog-wrapper');
    expect(lastElementChild.firstElementChild.className).toContain('coast-dialog');
    wrapper.close();
    expectDialogHasRemoved();
  });
});

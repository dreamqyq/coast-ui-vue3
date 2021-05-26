import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
import { getDialogElement } from '@coast/__tests__/utils';
import Dialog from '../Dialog.vue';

jest.mock('../../theme-chalk/iconfont/index.js');
const AXIOM = 'Tomorrow will be even better';

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
    const { lastButOneElementChild, lastElementChild } = getDialogElement();
    expect(lastButOneElementChild.className).toContain('coast-dialog-overlay');
    expect(lastElementChild.className).toContain('coast-dialog-wrapper');
    expect(lastElementChild.firstElementChild.className).toContain('coast-dialog');
    expect(lastElementChild.querySelector('header').textContent.trim()).toBe('提示');
    expect(lastElementChild.querySelector('main').textContent).toBe(AXIOM);
    wrapper.unmount();
  });

  it('render title', () => {
    const title = 'I am title';
    const wrapper = mount(Dialog, {
      props: {
        visible: true,
        title,
      },
      slots: {
        default: AXIOM,
      },
    });
    const { lastElementChild } = getDialogElement();
    expect(lastElementChild.querySelector('header').textContent.trim()).toBe(title);
    wrapper.unmount();
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
    const { lastButOneElementChild } = getDialogElement();
    (<HTMLElement>lastButOneElementChild).click();
    await nextTick();
    expect(document.body.children.length).toEqual(0);
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
    const { lastButOneElementChild } = getDialogElement();
    (<HTMLElement>lastButOneElementChild).click();
    await nextTick();
    const { bodyChildren, lastElementChild } = getDialogElement();
    expect(bodyChildren.length).toEqual(2);
    expect(lastElementChild.className).toContain('coast-dialog-wrapper');
    wrapper.unmount();
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
        const flag = ref(false);
        const handleChange = (visible: boolean) => {
          flag.value = !visible;
        };
        return { visible, flag, handleChange };
      },
    });
    const vm = wrapper.vm;
    const { lastButOneElementChild } = getDialogElement();
    (<HTMLElement>lastButOneElementChild).click();
    await nextTick();
    expect(vm.flag).toEqual(true);
  });
});

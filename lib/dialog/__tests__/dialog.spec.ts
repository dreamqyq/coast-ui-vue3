import { mount } from '@vue/test-utils';
import { nextTick, ref } from 'vue';
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
    const bodyChildren = document.body.children;
    const dialogOverlay = bodyChildren[bodyChildren.length - 2];
    const dialogWrapper = bodyChildren[bodyChildren.length - 1];
    expect(dialogOverlay.className).toContain('coast-dialog-overlay');
    expect(dialogWrapper.className).toContain('coast-dialog-wrapper');
    expect(dialogWrapper.firstElementChild.className).toContain('coast-dialog');
    expect(dialogWrapper.querySelector('header').textContent.trim()).toBe('提示');
    expect(dialogWrapper.querySelector('main').textContent).toBe(AXIOM);
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
    const bodyChildren = document.body.children;
    const dialogWrapper = bodyChildren[bodyChildren.length - 1];
    expect(dialogWrapper.querySelector('header').textContent.trim()).toBe(title);
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
    const bodyChildren = document.body.children;
    const dialogOverlay = bodyChildren[bodyChildren.length - 2];
    (<HTMLElement>dialogOverlay).click();
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
    const bodyChildren = document.body.children;
    const dialogOverlay = bodyChildren[bodyChildren.length - 2];
    (<HTMLElement>dialogOverlay).click();
    await nextTick();
    expect(document.body.children.length).toEqual(2);
    expect(document.body.lastElementChild.className).toContain('coast-dialog-wrapper');
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
    const bodyChildren = document.body.children;
    const dialogOverlay = bodyChildren[bodyChildren.length - 2];
    (<HTMLElement>dialogOverlay).click();
    await nextTick();
    expect(vm.flag).toEqual(true);
  });
});

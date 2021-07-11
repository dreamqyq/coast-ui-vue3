import { mount } from '@vue/test-utils';
import ToastConstructor from '../ToastConstructor.vue';
jest.mock('../../theme-chalk/iconfont/index.js');

const AXIOM = 'Tomorrow will be even better';

describe('Toast', () => {
  it('render', () => {
    const wrapper = mount(ToastConstructor, {
      props: {
        text: AXIOM,
      },
    });
    const { vm } = wrapper;
    expect(wrapper.text()).toBe(AXIOM);
    expect(vm.visible).toBe(true);
    expect(wrapper.classes()).toContain('coast-toast');
    expect(wrapper.classes()).toContain('coast-toast-normal');
    expect(vm.$el.style.top).toBe('10px');
  });

  it('type', () => {
    const types = ['normal', 'secondary', 'success', 'warning', 'error'] as const;
    for (const type of types) {
      const wrapper = mount(ToastConstructor, {
        props: { type },
      });
      expect(wrapper.classes()).toContain(`coast-toast-${type}`);
    }
  });

  it('center', () => {
    const wrapper = mount(ToastConstructor, {
      props: { center: true },
    });
    expect(wrapper.classes()).toContain('coast-toast-center');
  });

  it('top', () => {
    const wrapper = mount(ToastConstructor, {
      props: { top: 20 },
    });
    const { vm } = wrapper;
    expect(vm.$el.style.top).toBe('20px');
  });

  it('id', () => {
    const id = 'coast-toast-1';
    const wrapper = mount(ToastConstructor, {
      props: { id },
    });
    const { vm } = wrapper;
    expect(vm.id).toBe(id);
  });

  // TODO delay, showClose
});

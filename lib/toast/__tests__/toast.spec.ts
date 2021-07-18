import { mount } from '@vue/test-utils';
import ToastConstructor from '../ToastConstructor.vue';
import { Toast as CoToast } from '../toast';

jest.mock('../../style/iconfont/index.js');
jest.useFakeTimers();
const AXIOM = 'Tomorrow will be even better';
const selector = '.coast-toast';

describe('ToastConstructor', () => {
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

  it('delay', async () => {
    const wrapper = mount(ToastConstructor, {
      props: { delay: 1 },
    });
    const { vm } = wrapper;
    expect(vm.visible).toBe(true);
    jest.runAllTimers();
    expect(vm.visible).toBe(false);
  });

  it('prevent close when hovered', async () => {
    const wrapper = mount(ToastConstructor, {
      props: { delay: 1 },
    });
    const { vm } = wrapper;
    expect(vm.visible).toBe(true);
    await wrapper.find(selector).trigger('mouseenter');
    jest.runAllTimers();
    expect(vm.visible).toBe(true);
    await wrapper.find(selector).trigger('mouseleave');
    expect(vm.visible).toBe(true);
    jest.runAllTimers();
    expect(vm.visible).toBe(false);
  });

  it('cannot auto close when delay is 0', async () => {
    const wrapper = mount(ToastConstructor, {
      props: { delay: 0 },
    });
    const { vm } = wrapper;
    expect(vm.visible).toBe(true);
    jest.runAllTimers();
    expect(vm.visible).toBe(true);
  });

  it('showClose', async () => {
    const onDestroy = jest.fn();
    const wrapper = mount(ToastConstructor, {
      props: { onDestroy, showClose: true },
    });
    const closeButton = wrapper.find('.coast-toast-close');
    expect(closeButton.exists()).toBe(true);
    await closeButton.trigger('click');
    expect(wrapper.vm.visible).toBe(false);
    expect(onDestroy).toHaveBeenCalled();
  });
});

describe('Toast on command', () => {
  it('create toast', () => {
    expect(document.querySelector(selector)).toBeFalsy();
    CoToast({ text: AXIOM });
    expect(document.querySelector(selector)).toBeTruthy();
    jest.runAllTimers();
    expect(document.querySelector(selector)).toBeFalsy();
  });

  it('show 3 toasts at the same time', () => {
    expect(document.querySelector(selector)).toBeFalsy();
    for (let i = 0; i < 3; i++) {
      CoToast({ text: AXIOM, delay: 0, showClose: true });
    }
    const elements = document.querySelectorAll(selector);
    expect(elements.length).toBe(3);
    elements.forEach((element, index) => {
      const top = (element as HTMLElement).style.top;
      expect(top).toBe(`${index * 60 + 10}px`);
    });
  });
});

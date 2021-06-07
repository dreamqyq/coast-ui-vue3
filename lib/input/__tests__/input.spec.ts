import { mount } from '@vue/test-utils';
import Input from '../Input.vue';
import Icon from '../../icon/Icon.vue';
jest.mock('../../theme-chalk/iconfont/index.js');

const AXIOM = 'Tomorrow will be even better';

describe('Input', () => {
  it('create', () => {
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        placeholder: AXIOM,
      },
    });
    expect(wrapper.classes()).toContain('coast-input-wrapper');
    expect(wrapper.classes()).toContain('coast-input-wrapper-size-medium');
    const input = wrapper.find('input');
    expect(input.classes()).toContain('coast-input');
    expect(input.classes()).toContain('coast-input-status-normal');
    expect(input.attributes('type')).toBe('text');
    expect(input.attributes('placeholder')).toBe(AXIOM);
    expect(input.element.value).toBe(AXIOM);
  });

  it('password input', async () => {
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        type: 'password',
      },
    });
    const input = wrapper.find('input');
    const showPasswordIcon = wrapper.findComponent(Icon);
    expect(input.attributes('type')).toBe('password');
    expect(showPasswordIcon.vm.name).toBe('show');
    expect(input.element.value).toBe(AXIOM);
    await showPasswordIcon.trigger('click');
    expect(input.attributes('type')).toBe('text');
    expect(showPasswordIcon.vm.name).toBe('hide');
    expect(input.element.value).toBe(AXIOM);
  });

  it('size', () => {
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        size: 'mini',
      },
    });
    expect(wrapper.classes()).toContain('coast-input-wrapper-size-mini');
  });

  it('set width', () => {
    const width = '100%';
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        width,
      },
    });
    expect(wrapper.attributes('style')).toBe(`width: ${width};`);
  });

  it('disabled', () => {
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        disabled: true,
      },
    });
    const input = wrapper.find('input');
    expect(input.attributes()).toHaveProperty('disabled');
  });

  it('readonly', () => {
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        readonly: true,
      },
    });
    const input = wrapper.find('input');
    expect(input.attributes()).toHaveProperty('readonly');
  });

  it('maxlength', () => {
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        maxlength: 5,
      },
    });
    const input = wrapper.find('input');
    expect(input.attributes('maxlength')).toBe('5');
  });
});

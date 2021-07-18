import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import Input from '../Input.vue';
import Icon from '../../icon/Icon.vue';

jest.mock('../../style/iconfont/index.js');

const AXIOM = 'Tomorrow will be even better';

const _mount = (props: object) =>
  mount(Input, {
    props: {
      value: AXIOM,
      ...props,
    },
  });

type EventNameType = 'clear' | 'change' | 'keydown' | 'updateAndInput' | 'focusAndBlur';
const _mountEvent = (bindEventName: EventNameType, initialValue = '') => {
  const BindEventMap = {
    clear: `clearable @clear="handle1"`,
    change: `@change="handle1"`,
    keydown: `@keydown="handle1"`,
    updateAndInput: `@update:value="handle1" @input="handle2"`,
    focusAndBlur: `@focus="handle1" @blur="handle2"`,
  };
  return mount({
    components: { 'co-input': Input },
    template: `<co-input 
        v-model:value="value"
        ${BindEventMap[bindEventName]}
      />
    `,
    setup() {
      const value = ref(initialValue);
      const handle1 = jest.fn();
      const handle2 = jest.fn();
      return { value, handle1, handle2 };
    },
  });
};

describe('Input', () => {
  it('create', () => {
    const wrapper = _mount({ placeholder: AXIOM });
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
    const wrapper = _mount({ type: 'password' });
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
    const wrapper = _mount({ size: 'mini' });
    expect(wrapper.classes()).toContain('coast-input-wrapper-size-mini');
  });

  it('set width', () => {
    const width = '100%';
    const wrapper = _mount({ width });
    expect(wrapper.attributes('style')).toBe(`width: ${width};`);
  });

  it('disabled', () => {
    const wrapper = _mount({ disabled: true });
    const input = wrapper.find('input');
    expect(input.attributes()).toHaveProperty('disabled');
  });

  it('readonly', () => {
    const wrapper = _mount({ readonly: true });
    const input = wrapper.find('input');
    expect(input.attributes()).toHaveProperty('readonly');
  });

  it('maxlength', () => {
    const wrapper = _mount({ maxlength: 5 });
    const input = wrapper.find('input');
    expect(input.attributes('maxlength')).toBe('5');
  });

  it('label', () => {
    const label = 'https://';
    const labelRight = '.com';
    const wrapper = _mount({
      label,
      labelRight,
    });
    const labelElementList = wrapper.findAll('span.coast-label');
    expect(labelElementList.length).toBe(2);
    const labelLeftElement = labelElementList[0];
    const labelRightElement = labelElementList[1];
    expect(labelLeftElement.classes()).toContain('left');
    expect(labelRightElement.classes()).toContain('right');
    expect(labelLeftElement.element.textContent).toBe(label);
    expect(labelRightElement.element.textContent).toBe(labelRight);
  });

  it('status', () => {
    const wrapper = _mount({ status: 'secondary' });
    const input = wrapper.find('input');
    expect(input.classes()).toContain('coast-input-status-secondary');
  });

  describe('Input Events', () => {
    it('event:clear', async () => {
      const wrapper = _mountEvent('clear', 'initial value');
      const input = wrapper.find('input');
      const vm = wrapper.vm;
      const clearIcon = wrapper.findComponent(Icon);
      expect(clearIcon.vm.name).toBe('clear');
      await clearIcon.trigger('click');
      expect(vm.value).toBe('');
      expect(input.element.value).toBe('');
      expect(vm.handle1).toHaveBeenCalled();
    });

    it('event:update & input', async () => {
      const wrapper = _mountEvent('updateAndInput');
      const input = wrapper.find('input');
      const vm = wrapper.vm;
      const nativeInput = input.element;
      nativeInput.value = AXIOM;
      await input.trigger('input');
      expect(vm.value).toBe(AXIOM);
      expect(nativeInput.value).toBe(AXIOM);
      expect(vm.handle1).toHaveBeenCalled();
      expect(vm.handle1.mock.calls[0][0]).toBe(AXIOM);
      expect(vm.handle2).toHaveBeenCalled();
      expect(vm.handle2.mock.calls[0][0]).toBe(AXIOM);
    });

    it('event:change', async () => {
      const wrapper = _mountEvent('change');
      const input = wrapper.find('input').element;
      const vm = wrapper.vm;
      const simulateEvent = (value: string, eventName: string) => {
        const event = new Event(eventName);
        Object.defineProperty(event, 'target', {
          value: { value },
          enumerable: true,
        });
        input.dispatchEvent(event);
      };
      simulateEvent('2', 'change');
      expect(vm.handle1).toHaveBeenCalled();
      expect(vm.handle1.mock.calls[0][0]).toBe('2');

      simulateEvent('1', 'input');
      expect(vm.handle1.mock.instances.length).toBe(1);
    });

    it('event:focus & blur', async () => {
      const wrapper = _mountEvent('focusAndBlur');
      const input = wrapper.find('input');
      const vm = wrapper.vm;
      await input.trigger('focus');
      expect(vm.handle1).toHaveBeenCalled();
      expect(vm.handle1.mock.calls[0][0].type).toBe('focus');

      await input.trigger('blur');
      expect(vm.handle2).toHaveBeenCalled();
      expect(vm.handle2.mock.calls[0][0].type).toBe('blur');
    });

    it('event:keydown', async () => {
      const wrapper = _mountEvent('keydown');
      const input = wrapper.find('input');
      const vm = wrapper.vm;
      await input.trigger('keydown');
      expect(vm.handle1).toHaveBeenCalled();
      expect(vm.handle1.mock.calls[0][0].type).toBe('keydown');
    });
  });
});

import { ref } from 'vue';
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

  it('label', () => {
    const label = 'https://';
    const labelRight = '.com';
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        label,
        labelRight,
      },
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
    const wrapper = mount(Input, {
      props: {
        value: AXIOM,
        status: 'secondary',
      },
    });
    const input = wrapper.find('input');
    expect(input.classes()).toContain('coast-input-status-secondary');
  });

  describe('Input Events', () => {
    it('event:clear', async () => {
      const wrapper = mount({
        components: { 'co-input': Input },
        template: `<co-input 
          v-model:value="value"
          clearable
          @clear="handleClear"
        />
      `,
        setup() {
          const value = ref('initial value');
          const handleClear = jest.fn();
          return { value, handleClear };
        },
      });
      const input = wrapper.find('input');
      const vm = wrapper.vm;
      const clearIcon = wrapper.findComponent(Icon);
      expect(clearIcon.vm.name).toBe('clear');
      await clearIcon.trigger('click');
      expect(vm.value).toBe('');
      expect(input.element.value).toBe('');
      expect(vm.handleClear).toHaveBeenCalled();
    });

    it('event:update & input', async () => {
      const wrapper = mount({
        components: { 'co-input': Input },
        template: `<co-input 
          v-model:value="value"
          @update:value="handleUpdate"
          @input="handleInput"
        />
      `,
        setup() {
          const value = ref('');
          const handleUpdate = jest.fn();
          const handleInput = jest.fn();
          return { value, handleUpdate, handleInput };
        },
      });
      const input = wrapper.find('input');
      const vm = wrapper.vm;
      const nativeInput = input.element;
      nativeInput.value = AXIOM;
      await input.trigger('input');
      expect(vm.value).toBe(AXIOM);
      expect(nativeInput.value).toBe(AXIOM);
      expect(vm.handleUpdate).toHaveBeenCalled();
      expect(vm.handleUpdate.mock.calls[0][0]).toBe(AXIOM);
      expect(vm.handleInput).toHaveBeenCalled();
      expect(vm.handleInput.mock.calls[0][0]).toBe(AXIOM);
    });

    it('event:change', async () => {
      const wrapper = mount({
        components: { 'co-input': Input },
        template: `<co-input 
          v-model:value="value"
          @change="handleChange"
        />
      `,
        setup() {
          const value = ref('');
          const handleChange = jest.fn();
          return { value, handleChange };
        },
      });
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
      expect(vm.handleChange).toHaveBeenCalled();
      expect(vm.handleChange.mock.calls[0][0]).toBe('2');

      simulateEvent('1', 'input');
      expect(vm.handleChange.mock.instances.length).toBe(1);
    });

    it('event:focus & blur', async () => {
      const wrapper = mount({
        components: { 'co-input': Input },
        template: `<co-input 
          v-model:value="value"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      `,
        setup() {
          const value = ref('');
          const handleBlur = jest.fn();
          const handleFocus = jest.fn();
          return { value, handleBlur, handleFocus };
        },
      });
      const input = wrapper.find('input');
      const vm = wrapper.vm;
      await input.trigger('focus');
      expect(vm.handleFocus).toHaveBeenCalled();
      expect(vm.handleFocus.mock.calls[0][0].type).toBe('focus');

      await input.trigger('blur');
      expect(vm.handleBlur).toHaveBeenCalled();
      expect(vm.handleBlur.mock.calls[0][0].type).toBe('blur');
    });

    it('event:keydown', async () => {
      const wrapper = mount({
        components: { 'co-input': Input },
        template: `<co-input 
          v-model:value="value"
          @keydown="handleKeydown"
        />
      `,
        setup() {
          const value = ref('');
          const handleKeydown = jest.fn();
          return { value, handleKeydown };
        },
      });
      const input = wrapper.find('input');
      const vm = wrapper.vm;
      await input.trigger('keydown');
      expect(vm.handleKeydown).toHaveBeenCalled();
      expect(vm.handleKeydown.mock.calls[0][0].type).toBe('keydown');
    });
  });
});

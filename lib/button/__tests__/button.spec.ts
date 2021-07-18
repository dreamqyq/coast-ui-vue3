import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import Button from '../Button.vue';
import ButtonGroup from '../ButtonGroup.vue';

jest.mock('../../style/iconfont/index.js');

const AXIOM = 'Tomorrow will be even better';

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(Button);
    const wrapperClasses = expect(wrapper.classes());
    expect(wrapperClasses.toContain('coast-button'));
    expect(wrapperClasses.toContain('coast-button-theme-button'));
    expect(wrapperClasses.toContain('coast-button-size-normal'));
    expect(wrapperClasses.toContain('coast-button-level-normal'));
  });

  it('theme', () => {
    const wrapper = mount(Button, { props: { theme: 'link' } });
    expect(wrapper.classes()).toContain('coast-button-theme-link');
  });

  it('size', () => {
    const wrapper = mount(Button, { props: { size: 'small' } });
    expect(wrapper.classes()).toContain('coast-button-size-small');
  });

  it('level', () => {
    const wrapper = mount(Button, { props: { level: 'main' } });
    expect(wrapper.classes()).toContain('coast-button-level-main');
  });

  it('disabled', async () => {
    const wrapper = mount(Button, { props: { disabled: true } });
    expect(wrapper.attributes()).toHaveProperty('disabled');
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('loading implies disabled', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
      props: { loading: true },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeUndefined();
  });

  it('render text', () => {
    const wrapper = mount(Button, {
      slots: { default: AXIOM },
    });
    expect(wrapper.text()).toEqual(AXIOM);
  });

  it('handle click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
    });
    await wrapper.trigger('click');
    expect(wrapper.emitted()).toBeDefined();
  });

  it('handle click inside', async () => {
    const wrapper = mount({
      template: `<co-button @click="c">
        <span class="inner-slot" @click="c"></span>
      </co-button>`,
      components: {
        'co-button': Button,
      },
      setup() {
        const v = ref(1);
        const c = () => {
          v.value++;
        };
        return { c, v };
      },
    });
    const vm = wrapper.vm;
    (<HTMLElement>wrapper.element.querySelector('.inner-slot')).click();
    expect(vm.v).toEqual(3);
    expect(wrapper.emitted()).toBeDefined();
  });
});

describe('Button Group', () => {
  const TestComponent = {
    template: `<co-button-group>
      <co-button>Prev</co-button>
      <co-button>Next</co-button>
    </co-button-group>`,
    components: {
      'co-button-group': ButtonGroup,
      'co-button': Button,
    },
  };

  it('create', () => {
    const wrapper = mount(TestComponent);
    expect(wrapper.classes()).toContain('coast-button-group');
    expect(wrapper.findAll('button').length).toBe(2);
  });
});

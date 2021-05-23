import { mount } from '@vue/test-utils';
import { ref } from 'vue';
import Switch from '../Switch.vue';

describe('Switch', () => {
  it('create', () => {
    const wrapper = mount(Switch, {
      props: {
        value: false,
      },
    });
    expect(wrapper.classes()).toContain('coast-switch');
    expect(wrapper.classes()).not.toContain('coast-checked');
  });

  it('value correctly update', async () => {
    const wrapper = mount({
      components: { 'co-switch': Switch },
      template: `
        <co-switch v-model:value="value"/>
      `,
      setup() {
        const value = ref(false);
        return { value };
      },
    });
    const vm = wrapper.vm;
    await wrapper.trigger('click');
    expect(vm.value).toEqual(true);
    expect(wrapper.classes()).toContain('coast-checked');
    await wrapper.trigger('click');
    expect(vm.value).toEqual(false);
    expect(wrapper.classes()).not.toContain('coast-checked');
  });

  it('change event', async () => {
    const wrapper = mount({
      components: { 'co-switch': Switch },
      template: `
        <co-switch v-model:value="value" @update:value="handleChange"/>
      `,
      setup() {
        const value = ref(false);
        const target = ref(false);
        const handleChange = (value: boolean) => {
          target.value = value;
        };
        return { value, target, handleChange };
      },
    });
    const vm = wrapper.vm;
    await wrapper.trigger('click');
    expect(vm.value).toEqual(true);
    expect(vm.target).toEqual(true);
    expect(wrapper.classes()).toContain('coast-checked');
    await wrapper.trigger('click');
    expect(vm.value).toEqual(false);
    expect(vm.target).toEqual(false);
    expect(wrapper.classes()).not.toContain('coast-checked');
  });

  it('disabled click cannot change value', async () => {
    const wrapper = mount({
      components: { 'co-switch': Switch },
      template: `
        <co-switch v-model:value="value" disabled/>
      `,
      setup() {
        const value = ref(false);
        return { value };
      },
    });
    const vm = wrapper.vm;
    await wrapper.trigger('click');
    expect(vm.value).toEqual(false);
    expect(wrapper.classes()).not.toContain('coast-checked');
  });
});

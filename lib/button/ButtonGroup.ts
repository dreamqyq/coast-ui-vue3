import { defineComponent, h } from 'vue';

const CoastButtonGroup = defineComponent({
  name: 'CoastButtonGroup',
  setup(props, { slots }) {
    return () => h('div', { class: 'coast-button-group' }, slots.default?.());
  },
});

export default CoastButtonGroup;

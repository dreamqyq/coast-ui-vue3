import { defineComponent, h } from 'vue';

const CoastContent = defineComponent({
  name: 'CoastContent',
  setup(props, { slots }) {
    return () => h('main', { class: 'coast-content' }, slots.default?.());
  },
});

export default CoastContent;

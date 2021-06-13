import { defineComponent, h } from 'vue';

const CoastFooter = defineComponent({
  name: 'CoastFooter',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'footer',
        {
          class: 'coast-footer',
          style: { height: props.height },
        },
        slots.default?.(),
      );
  },
});

export default CoastFooter;

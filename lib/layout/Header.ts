import { defineComponent, h } from 'vue';

const CoastHeader = defineComponent({
  name: 'CoastHeader',
  props: {
    height: {
      type: String,
      default: '60px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'header',
        {
          class: 'coast-header',
          style: { height: props.height },
        },
        slots.default?.(),
      );
  },
});

export default CoastHeader;

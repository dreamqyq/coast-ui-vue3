import { defineComponent, h } from 'vue';

const CoastAside = defineComponent({
  name: 'CoastAside',
  props: {
    width: {
      type: String,
      default: '300px',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'aside',
        {
          class: 'coast-aside',
          style: { width: props.width },
        },
        slots.default?.(),
      );
  },
});

export default CoastAside;

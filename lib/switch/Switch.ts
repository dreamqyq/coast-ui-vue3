import { defineComponent, h } from 'vue';

const CoastSwitch = defineComponent({
  name: 'CoastSwitch',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const toggle = () => {
      emit('update:value', !props.value);
    };
    return () =>
      h(
        'button',
        {
          class: ['coast-switch', { 'coast-checked': props.value }],
          onClick: toggle,
        },
        h('span'),
      );
  },
});

export default CoastSwitch;

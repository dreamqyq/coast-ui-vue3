import { computed, defineComponent, h, provide } from 'vue';
import type { PropType } from 'vue';
import type { RowJustifyType, RowProps } from './Row.d';

const CoastRow = defineComponent({
  name: 'CoastRow',
  props: {
    gutter: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    justify: {
      type: String as PropType<RowJustifyType>,
      required: false,
      validator: (val: string) => {
        return ['end', 'start', 'center', 'space-between', 'space-around'].includes(val);
      },
    },
  },
  setup(props: RowProps, { slots }) {
    const gutter = computed(() => props.gutter);
    provide('CoRow', { gutter });

    const style = computed(() => {
      const marginValue = props.gutter ? `${-props.gutter / 2}px` : '';
      return {
        marginLeft: marginValue,
        marginRight: marginValue,
      };
    });

    const classes = computed(() => [
      'coast-row',
      { [`coast-justify-${props.justify}`]: props.justify },
    ]);

    return () =>
      h(
        'div',
        {
          class: classes.value,
          style: style.value,
        },
        slots.default?.(),
      );
  },
});

export default CoastRow;

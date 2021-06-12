import { computed, defineComponent, provide } from 'vue';

import type { PropType } from 'vue';

type RowAlignType = PropType<'end' | 'start' | 'center' | 'space-around' | 'space-between'>;

const CoastRow = defineComponent({
  name: 'CoastRow',
  props: {
    gutter: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    align: {
      type: String as RowAlignType,
      required: false,
      validator: (val: string) => {
        return ['end', 'start', 'center', 'space-between', 'space-around'].includes(val);
      },
    },
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter);
    provide('CoRow', { gutter });

    const style = computed(() => {
      const marginValue = props.gutter ? `${-props.gutter / 2}px` : '';
      return {
        marginLeft: marginValue,
        marginRight: marginValue,
      };
    });

    const classes = computed(() => ['coast-row', { [`coast-align-${props.align}`]: props.align }]);

    return () => (
      <div class={classes.value} style={style.value}>
        {slots.default?.()}
      </div>
    );
  },
});

export default CoastRow;

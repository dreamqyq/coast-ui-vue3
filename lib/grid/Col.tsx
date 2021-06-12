import { computed, defineComponent, inject } from 'vue';

const CoastCol = defineComponent({
  name: 'CoastCol',
  props: {
    span: {
      type: [Number, String],
      required: false,
      default: 24,
    },
    offset: {
      type: [Number, String],
      required: false,
    },
  },
  inject: ['CoRow'],
  setup(props, { slots }) {
    const { gutter } = inject('CoRow', { gutter: { value: 0 } });
    const classes = computed(() => [
      'coast-col',
      {
        [`coast-col-span-${props.span}`]: props.span,
        [`coast-col-offset-${props.offset}`]: props.offset,
      },
    ]);
    const style = computed(() => {
      const paddingValue = gutter.value ? `${gutter.value / 2}px` : '';
      return {
        paddingLeft: paddingValue,
        paddingRight: paddingValue,
      };
    });
    return () => (
      <div class={classes.value} style={style.value}>
        {slots.default?.()}
      </div>
    );
  },
});

export default CoastCol;

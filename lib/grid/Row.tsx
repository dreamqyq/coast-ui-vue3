import { computed, defineComponent, provide } from 'vue';

const CoastRow = defineComponent({
  name: 'CoastRow',
  props: {
    gutter: {
      type: [Number, String],
      required: false,
      default: 0,
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
    return () => (
      <div class="coast-row" style={style.value}>
        {slots.default?.()}
      </div>
    );
  },
});

export default CoastRow;

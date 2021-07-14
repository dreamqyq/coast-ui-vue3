import { computed, defineComponent, h, inject } from 'vue';
import type { PropType } from 'vue';

type SizeObjectType = {
  span: number | string;
  offset: number | string;
};

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
    xs: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    sm: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    md: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    lg: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    xl: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
    xxl: {
      type: [Number, String, Object] as PropType<number | string | SizeObjectType>,
      required: false,
      default: () => ({} as SizeObjectType),
    },
  },
  setup(props, { slots }) {
    const { gutter } = inject('CoRow', { gutter: { value: 0 } });

    const classes = computed(() => {
      const ret = [
        'coast-col',
        {
          [`coast-col-span-${props.span}`]: props.span,
          [`coast-col-offset-${props.offset}`]: props.offset,
        },
      ];

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;
      sizes.forEach(size => {
        const propsSizeValue = props[size];
        const propsSizeType = typeof propsSizeValue;
        if (propsSizeType === 'number' || propsSizeType === 'string') {
          ret.push(`coast-col-${size}-span-${propsSizeValue}`);
        } else if (propsSizeType === 'object') {
          Object.keys(propsSizeValue).forEach(prop => {
            ret.push(`coast-col-${size}-${prop}-${propsSizeValue[prop]}`);
          });
        }
      });

      return ret;
    });

    const style = computed(() => {
      const paddingValue = gutter.value ? `${gutter.value / 2}px` : '';
      return {
        paddingLeft: paddingValue,
        paddingRight: paddingValue,
      };
    });
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

export default CoastCol;

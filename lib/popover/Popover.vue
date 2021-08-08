<template>
  <Teleport to="body" v-if="visible">
    <div :class="classes" :style="popoverStyle" v-if="$slots.content" ref="popoverElement">
      <slot name="content" />
    </div>
  </Teleport>
  <span @click="handleClick" ref="popoverSlot" class="coast-popover-slot">
    <slot />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, PropType, ref } from 'vue';

type TriggerType = 'click' | 'hover' | 'focus';
type PositionType = 'top' | 'left' | 'right' | 'bottom';

interface PopoverProps {
  trigger: TriggerType;
  position: PositionType;
}

export default defineComponent({
  name: 'CoastPopover',
  props: {
    trigger: {
      type: String as PropType<TriggerType>,
      required: false,
      default: 'click',
      validator: (val: string) => ['click', 'hover', 'focus'].includes(val),
    },
    position: {
      type: String as PropType<PositionType>,
      required: false,
      default: 'top',
      validator: (val: string) => ['top', 'left', 'right', 'bottom'].includes(val),
    },
  },
  setup(props: PopoverProps) {
    const visible = ref(false);
    const popoverElement = ref<HTMLDivElement>(null);
    const popoverSlot = ref<HTMLSpanElement>(null);
    const popoverStyle = ref({} as CSSStyleDeclaration);

    const classes = computed(() => ({
      'coast-popover': true,
      [`coast-popover-${props.position}`]: props.position,
    }));

    const setPopoverStyle = () => {
      const { left, top, height, width } = popoverSlot.value.getBoundingClientRect();
      const { height: h2 } = popoverElement.value.getBoundingClientRect();
      const positionMap = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY,
        },
        left: {
          left: left + window.scrollX,
          top: top + (height - h2) / 2 + window.scrollY,
        },
        right: {
          left: left + width + window.scrollX,
          top: top + (height - h2) / 2 + window.scrollY,
        },
      };
      popoverStyle.value.left = `${positionMap[props.position].left}px`;
      popoverStyle.value.top = `${positionMap[props.position].top}px`;
    };

    const handleDocumentClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target !== popoverElement.value && !popoverSlot.value?.contains(target)) {
        handleClose();
      }
    };

    const handleOpen = () => {
      visible.value = true;
      nextTick(() => {
        setPopoverStyle();
        document.addEventListener('click', handleDocumentClick);
      });
    };

    const handleClose = () => {
      visible.value = false;
      document.removeEventListener('click', handleDocumentClick);
    };

    const handleClick = () => {
      visible.value ? handleClose() : handleOpen();
    };

    return {
      classes,
      visible,
      popoverStyle,
      popoverSlot,
      popoverElement,
      handleClick,
    };
  },
});
</script>

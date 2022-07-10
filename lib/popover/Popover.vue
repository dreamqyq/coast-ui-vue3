<template>
  <Teleport to="body" v-if="visible">
    <div :class="classes" :style="popoverStyle" v-if="$slots.content" ref="popoverElement">
      <slot name="content" :close="handleClose" />
    </div>
  </Teleport>
  <span ref="popoverTrigger" class="coast-popover-slot">
    <slot />
  </span>
</template>

<script lang="ts">
export default { name: 'CoastCard' };
</script>

<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, onMounted, PropType, ref, useSlots } from 'vue';
import type { TriggerType, PositionType } from './popover.d';

const props = defineProps({
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
  width: {
    type: [String, Number],
    required: false,
    default: '',
  },
});
const visible = ref(false);
const popoverElement = ref<HTMLDivElement>(null);
const popoverTrigger = ref<HTMLSpanElement>(null);
const popoverStyle = ref({} as CSSStyleDeclaration);
const timer = ref(0);
const slots = useSlots();

const classes = computed(() => ({
  'coast-popover': true,
  [`coast-popover-${props.position}`]: props.position,
}));

const setPopoverWidth = () => {
  const { width } = props;
  popoverStyle.value.width = typeof width === 'number' ? `${width}px` : width;
};

const setPopoverPosition = () => {
  const { left, top, height, width } = popoverTrigger.value.getBoundingClientRect();
  const { height: popoverHeight } = popoverElement.value.getBoundingClientRect();
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
      top: top + (height - popoverHeight) / 2 + window.scrollY,
    },
    right: {
      left: left + width + window.scrollX,
      top: top + (height - popoverHeight) / 2 + window.scrollY,
    },
  };
  popoverStyle.value.left = `${positionMap[props.position].left}px`;
  popoverStyle.value.top = `${positionMap[props.position].top}px`;
};

const setPopoverStyle = () => {
  props.width && setPopoverWidth();
  nextTick(() => {
    setPopoverPosition();
  });
};

const handleDocumentClick = (event: Event) => {
  const target = event.target as HTMLElement;
  /**
   * The click is not the popover itself or the element in the popover,
   * and the click is not the element in the trigger
   * (which will cause the popover to be closed immediately after opening),
   * to execute the handleClose event
   */
  if (
    target !== popoverElement.value &&
    !popoverElement.value?.contains(target) &&
    !popoverTrigger.value?.contains(target)
  ) {
    handleClose();
  }
};

const handleOpen = () => {
  visible.value = true;
  if (props.trigger === 'hover') {
    clearTimeout(timer.value);
  }
  nextTick(() => {
    if (props.trigger === 'hover') {
      popoverElement.value.addEventListener('mouseenter', () => {
        clearTimeout(timer.value);
      });
      popoverElement.value.addEventListener('mouseleave', () => {
        handleClose();
      });
    }
    setPopoverStyle();
    document.addEventListener('click', handleDocumentClick);
  });
};

const closePopoverAndRemoveEvent = () => {
  visible.value = false;
  document.removeEventListener('click', handleDocumentClick);
};

const handleClose = () => {
  if (props.trigger === 'hover') {
    timer.value = window.setTimeout(() => {
      closePopoverAndRemoveEvent();
    }, 200);
  } else {
    closePopoverAndRemoveEvent();
  }
};

const handleClick = () => {
  if (slots.content) {
    visible.value ? handleClose() : handleOpen();
  }
};

const eventMap = {
  click: [{ name: 'click', handle: handleClick }],
  hover: [
    { name: 'mouseenter', handle: handleOpen },
    { name: 'mouseleave', handle: handleClose },
  ],
  focus: [
    { name: 'focusin', handle: handleOpen },
    { name: 'focusout', handle: handleClose },
  ],
};

const currentEventList = eventMap[props.trigger];

onMounted(() => {
  currentEventList.forEach(event => {
    popoverTrigger.value.addEventListener(event.name, event.handle);
  });
});

onBeforeUnmount(() => {
  currentEventList.forEach(event => {
    popoverTrigger.value.removeEventListener(event.name, event.handle);
  });
});
</script>

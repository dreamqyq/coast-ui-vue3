<template>
  <Teleport to="body" v-if="visible">
    <div class="coast-popover" :style="popoverStyle" v-if="$slots.content" ref="popoverElement">
      <slot name="content" />
    </div>
  </Teleport>
  <span @click="handleClick" ref="popoverSlot">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

type TriggerType = 'click' | 'hover' | 'focus';

export default defineComponent({
  name: 'CoastPopover',
  props: {
    trigger: {
      type: String as PropType<TriggerType>,
      required: false,
      default: 'click',
    },
  },
  setup() {
    const visible = ref(false);
    const popoverElement = ref<HTMLDivElement>(null);
    const popoverSlot = ref<HTMLSpanElement>(null);
    const popoverStyle = ref({} as CSSStyleDeclaration);

    const setPopoverStyle = () => {
      const { left, top } = popoverSlot.value.getBoundingClientRect();
      popoverStyle.value.left = `${left + window.scrollX}px`;
      popoverStyle.value.top = `${top + window.scrollY}px`;
      popoverStyle.value.transform = `translate(-30%,-140%)`;
    };

    const handleDocumentClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (target !== popoverElement.value && !popoverSlot.value.contains(target)) {
        handleClose();
      }
    };

    const handleOpen = () => {
      setPopoverStyle();
      visible.value = true;
      document.addEventListener('click', handleDocumentClick);
    };

    const handleClose = () => {
      visible.value = false;
      document.removeEventListener('click', handleDocumentClick);
    };

    const handleClick = () => {
      visible.value ? handleClose() : handleOpen();
    };

    return {
      visible,
      popoverStyle,
      popoverSlot,
      popoverElement,
      handleClick,
    };
  },
});
</script>

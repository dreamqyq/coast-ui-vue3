<template>
  <Teleport to="body" v-if="visible">
    <div class="coast-popover" :style="popoverStyle" v-if="$slots.content">
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
    const popoverSlot = ref<HTMLSpanElement>(null);
    const popoverStyle = ref({} as CSSStyleDeclaration);

    const setPopoverStyle = (left: number, top: number) => {
      popoverStyle.value.left = `${left + window.scrollX}px`;
      popoverStyle.value.top = `${top + window.scrollY}px`;
      popoverStyle.value.transform = `translate(-30%,-140%)`;
    };

    const handleClick = () => {
      const { left, top } = popoverSlot.value.getBoundingClientRect();
      setPopoverStyle(left, top);
      visible.value = !visible.value;
    };

    return { visible, popoverStyle, popoverSlot, handleClick };
  },
});
</script>

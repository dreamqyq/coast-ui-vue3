<template>
  <div
    ref="navItem"
    :class="{ selected: title === currentSelected, disabled }"
    class="coast-tabs-nav-item"
    @click="handleClick"
  >
    {{ title }}
  </div>
</template>

<script lang="ts">
import type { Ref } from 'vue';
import { defineComponent, inject, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'CoastTabNavItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  emits: ['change', 'getSelectedElement'],
  setup(props, { emit }) {
    const currentSelected = inject<Ref<string>>('currentSelected');
    const navItem = ref<HTMLElement>(null);
    onMounted(() => {
      if (currentSelected.value === props.title) {
        emit('getSelectedElement', navItem.value);
      }
    });

    const handleClick = () => {
      const { disabled, title } = props;
      if (disabled || title === currentSelected.value) return;
      emit('change', props.title, navItem.value);
    };

    return {
      navItem,
      handleClick,
      currentSelected,
    };
  },
});
</script>

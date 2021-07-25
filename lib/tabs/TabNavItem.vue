<template>
  <div
    ref="navItem"
    :class="{ selected: title === selected, disabled }"
    class="coast-tabs-nav-item"
    @click="handleClick"
  >
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'CoastTabNavItem',
  props: {
    selected: {
      type: String,
      required: true,
    },
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
    const navItem = ref<HTMLElement>(null);
    onMounted(() => {
      if (props.selected === props.title) {
        emit('getSelectedElement', navItem.value);
      }
    });

    const handleClick = () => {
      const { disabled, title, selected } = props;
      if (disabled === undefined || disabled === true || title === selected) return;
      emit('change', props.title, navItem.value);
    };

    return {
      navItem,
      handleClick,
    };
  },
});
</script>

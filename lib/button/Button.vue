<template>
  <button :class="classes" :disabled="disabled || loading" class="coast-button">
    <Icon v-if="loading" class="coast-button-loadingIndicator" name="loading" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
export default { name: 'CoastButton' };
</script>


<script lang="ts" setup>
import { computed } from 'vue';
import Icon from '../icon/Icon.vue';
import type { PropType } from 'vue';
import type { ButtonThemeType, ButtonSizeType, ButtonLevelType } from './Button';

const props = defineProps({
  theme: {
    type: String as PropType<ButtonThemeType>,
    default: 'button',
    validator: (val: string) => {
      return ['button', 'link', 'text'].includes(val);
    },
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'normal',
    validator: (val: string) => {
      return ['normal', 'big', 'small'].includes(val);
    },
  },
  level: {
    type: String as PropType<ButtonLevelType>,
    default: 'normal',
    validator: (val: string) => {
      return ['normal', 'main', 'danger', 'warning'].includes(val);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const { theme, size, level } = props;
const classes = computed(() => {
  return {
    [`coast-button-theme-${theme}`]: theme,
    [`coast-button-size-${size}`]: size,
    [`coast-button-level-${level}`]: level,
    'coast-button-loading': props.loading,
  };
});
</script>

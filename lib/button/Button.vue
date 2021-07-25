<template>
  <button :class="classes" :disabled="disabled || loading" class="coast-button">
    <Icon v-if="loading" class="coast-button-loadingIndicator" name="loading" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent } from 'vue';
import Icon from '../icon/Icon.vue';

type ButtonThemeType = 'button' | 'link' | 'text';
type ButtonSizeType = 'normal' | 'big' | 'small';
type ButtonLevelType = 'normal' | 'main' | 'danger' | 'warning';

interface ButtonProps {
  theme: ButtonThemeType;
  size: ButtonSizeType;
  level: ButtonLevelType;
  disabled: boolean;
  loading: boolean;
}

export default defineComponent({
  name: 'CoastButton',
  components: { Icon },
  props: {
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
  },
  setup(props: ButtonProps) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`coast-button-theme-${theme}`]: theme,
        [`coast-button-size-${size}`]: size,
        [`coast-button-level-${level}`]: level,
        'coast-button-loading': props.loading,
      };
    });
    return { classes };
  },
});
</script>

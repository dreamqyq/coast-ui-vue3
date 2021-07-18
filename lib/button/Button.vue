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

type ButtonThemeType = PropType<'button' | 'link' | 'text'>;
type ButtonSizeType = PropType<'normal' | 'big' | 'small'>;
type ButtonLevelType = PropType<'normal' | 'main' | 'danger' | 'warning'>;

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
      type: String as ButtonThemeType,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'link', 'text'].includes(val);
      },
    },
    size: {
      type: String as ButtonSizeType,
      default: 'normal',
      validator: (val: string) => {
        return ['normal', 'big', 'small'].includes(val);
      },
    },
    level: {
      type: String as ButtonLevelType,
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
  setup(props) {
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

<style lang="scss">
@import '../style/common.scss';

$h: 32px;
.coast-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $colorGray;
  border: 1px solid $borderColorGray;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 0.25s;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $theme;
    border-color: $theme;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.coast-button-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $theme;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: #40a9ff;
    }
  }

  &.coast-button-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.coast-button-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.coast-button-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.coast-button-theme-button {
    &.coast-button-level-main {
      background: $theme;
      color: white;
      border-color: $theme;

      &:hover,
      &:focus {
        background: darken($theme, 10%);
        border-color: darken($theme, 10%);
      }
    }

    &.coast-button-level-danger {
      background: $error;
      border-color: $error;
      color: white;

      &:hover,
      &:focus {
        background: darken($error, 10%);
        border-color: darken($error, 10%);
      }
    }

    &.coast-button-level-warning {
      background: $warning;
      border-color: $warning;
      color: white;

      &:hover,
      &:focus {
        background: darken($warning, 10%);
        border-color: darken($warning, 10%);
      }
    }
  }

  &.coast-button-theme-link {
    &.coast-button-level-danger {
      color: $error;

      &:hover,
      &:focus {
        color: darken($error, 10%);
      }
    }

    &.coast-button-level-warning {
      color: $warning;

      &:hover,
      &:focus {
        color: darken($warning, 10%);
      }
    }
  }

  &.coast-button-theme-text {
    &.coast-button-level-main {
      color: $theme;

      &:hover,
      &:focus {
        color: darken($theme, 10%);
      }
    }

    &.coast-button-level-danger {
      color: $error;

      &:hover,
      &:focus {
        color: darken($error, 10%);
      }
    }

    &.coast-button-level-warning {
      color: $warning;

      &:hover,
      &:focus {
        color: darken($warning, 10%);
      }
    }
  }

  &.coast-button-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $disabledColor;

      &:hover {
        color: $colorGray;
        border: 1px solid $borderColorGray;
      }
    }
  }

  &.coast-button-theme-link,
  &.coast-button-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $disabledColor;

      &:hover {
        background: transparent;
      }
    }
  }

  &.coast-button-loading {
    cursor: default;
    position: relative;

    &[disabled] {
      cursor: default;
      color: $colorGray;

      &:hover {
        color: $colorGray;
        border: 1px solid $borderColorGray;
      }
    }

    &::before {
      position: absolute;
      content: '';
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      z-index: 1;
      border-radius: inherit;
      background: #fff;
      opacity: 0.35;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    &:hover,
    &:focus {
      color: inherit;
      border-color: $borderColorGray;
    }

    > .coast-button-loadingIndicator {
      margin-right: 4px;
      animation: coast-spin 1s infinite linear;
    }

    &.coast-button-level-warning,
    &.coast-button-level-danger,
    &.coast-button-level-main {
      &[disabled] {
        color: #fff;
      }

      &:hover,
      &:focus {
        color: white;
        border-color: $borderColorGray;
        background-color: $theme;
      }

      > .coast-loadingIndicator {
        border-color: white white white transparent;
      }
    }

    &.coast-button-level-warning {
      &:hover,
      &:focus {
        background-color: $warning;
      }
    }

    &.coast-button-level-danger {
      &:hover,
      &:focus {
        background-color: $error;
      }
    }
  }
}

@keyframes coast-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

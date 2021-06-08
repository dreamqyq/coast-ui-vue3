<template>
  <button :class="classes" :disabled="disabled || loading" class="coast-button1">
    <Icon v-if="loading" class="coast-button-loadingIndicator" name="loading" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Icon from '../icon/Icon.vue';

import type { PropType } from 'vue';

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

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #666;
$theme: #000;
$radius: 4px;
$red: red;
$gray: gray;
$orange: #f5a623;
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
  color: $color;
  border: 1px solid $border-color;
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
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }

    &.coast-button-level-warning {
      background: $orange;
      border-color: $orange;
      color: white;

      &:hover,
      &:focus {
        background: darken($orange, 10%);
        border-color: darken($orange, 10%);
      }
    }
  }

  &.coast-button-theme-link {
    &.coast-button-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
    &.coast-button-level-warning {
      color: $orange;

      &:hover,
      &:focus {
        color: darken($orange, 10%);
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
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }

    &.coast-button-level-warning {
      color: $orange;

      &:hover,
      &:focus {
        color: darken($orange, 10%);
      }
    }
  }

  &.coast-button-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $gray;

      &:hover {
        color: $color;
        border: 1px solid $border-color;
      }
    }
  }

  &.coast-button-theme-link,
  &.coast-button-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $gray;

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
      color: $color;

      &:hover {
        color: $color;
        border: 1px solid $border-color;
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
      border-color: $border-color;
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
        border-color: $border-color;
        background-color: $theme;
      }

      > .coast-loadingIndicator {
        border-color: white white white transparent;
      }
    }

    &.coast-button-level-warning {
      &:hover,
      &:focus {
        background-color: $orange;
      }
    }
    &.coast-button-level-danger {
      &:hover,
      &:focus {
        background-color: $red;
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

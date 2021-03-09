<template>
  <button class="v3wheel-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="v3wheel-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
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
        [`v3wheel-theme-${theme}`]: theme,
        [`v3wheel-size-${size}`]: size,
        [`v3wheel-level-${level}`]: level,
      };
    });
    return { classes };
  },
};
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$gray: gray;
.v3wheel-button {
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
  transition: background 0.25s;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.v3wheel-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.v3wheel-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.v3wheel-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.v3wheel-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.v3wheel-theme-button {
    &.v3wheel-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.v3wheel-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.v3wheel-theme-link {
    &.v3wheel-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.v3wheel-theme-text {
    &.v3wheel-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.v3wheel-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.v3wheel-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $gray;
      &:hover {
        border-color: $gray;
      }
    }
  }
  &.v3wheel-theme-link,
  &.v3wheel-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $gray;
    }
  }
  > .v3wheel-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: v3wheel-spin 1s infinite linear;
  }
}
@keyframes v3wheel-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
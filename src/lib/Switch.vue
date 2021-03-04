<template>
  <button
    @click="toggle"
    class="v3wheel-switch"
    :class="{ 'v3wheel-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.v3wheel-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  position: relative;
  border-radius: $h/2;

  > span {
    position: absolute;
    height: $h2;
    width: $h2;
    border-radius: 50%;
    background: #fff;
    top: 2px;
    left: 2px;
    transition: all 0.25s;
  }
  &.v3wheel-checked {
    background: #409eff;
  }
  &.v3wheel-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.v3wheel-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>


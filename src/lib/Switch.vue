<template>
  <button @click="toggle" :class="{ checked: value }"><span></span></button>
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

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
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
  &.checked {
    background: #409eff;
  }
  &.checked > span {
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
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>


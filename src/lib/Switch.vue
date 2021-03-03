<template>
  <button @click="toggle" :class="{ checked }"><span></span></button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { checked, toggle };
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
    transition: left 0.25s;
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
}
</style>


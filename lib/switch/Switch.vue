<template>
  <button :class="{ 'coast-checked': value }" class="coast-switch" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CoastSwitch',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const toggle = () => {
      emit('update:value', !props.value);
    };
    return { toggle };
  },
});
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.coast-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  position: relative;
  border-radius: 0.5 * $h;

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

  &.coast-checked {
    background: #409eff;
  }

  &.coast-checked > span {
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

  &.coast-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>

<template>
  <div class="coast-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from './Button.vue';

export default defineComponent({
  name: 'CoastButtonGroup',
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== Button) {
        throw new Error('CoButtonGroup 的子标签必须为 CoButton');
      }
    });
  },
});
</script>

<style lang="scss">
@import '../style/common.scss';

.coast-button-group {
  display: inline-flex;
  vertical-align: middle;

  .coast-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: $radius;
      border-bottom-left-radius: $radius;
    }

    &:last-child {
      border-top-right-radius: $radius;
      border-bottom-right-radius: $radius;
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>

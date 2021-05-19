<template>
  <div class="coast-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoastButtonGroup',
  setup() {},
});
</script>

<style lang="scss">
$radius: 4px;
.coast-button-group {
  display: inline-flex;
  vertical-align: middle;

  .coast-button {
    margin-left: -1px;
    border-radius: 0;

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

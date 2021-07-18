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

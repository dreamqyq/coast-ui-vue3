<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CoastTabPanel',
  props: {
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
    },
  },
});
</script>

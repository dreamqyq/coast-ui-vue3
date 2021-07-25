<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface TabPanelProps {
  title: string;
  disabled: boolean;
}

export default defineComponent({
  name: 'CoastTabPanel',
  props: {
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
});
</script>

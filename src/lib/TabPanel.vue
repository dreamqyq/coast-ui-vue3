<template>
  <slot />
</template>

<script lang="ts">
export default {
  name: 'CoastTabPanel',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
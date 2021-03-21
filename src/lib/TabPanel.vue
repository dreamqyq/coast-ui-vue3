<template>
  <slot />
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
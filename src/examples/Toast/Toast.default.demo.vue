<demo>
  <title>常规使用</title>
  <desc></desc>
</demo>

<template>
  <co-button @click="onClick">打开 toast</co-button>
</template>

<script lang="ts">
import { CoToast, CoButton } from 'coast-ui-vue3';

export default {
  components: { CoToast, CoButton },
  setup() {
    const onClick = () => {
      CoToast({ text: 'Hello World' });
    };

    return { onClick };
  },
};
</script>

<style lang="scss" scoped>
</style>

<demo>
  <title>常规使用</title>
  <desc>从顶部出现，3秒后消失</desc>
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
      CoToast({ text: '这是一条消息提示~' });
    };

    return { onClick };
  },
};
</script>

<style lang="scss" scoped>
</style>

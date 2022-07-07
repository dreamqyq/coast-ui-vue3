<demo>
  <title>常规使用</title>
  <desc>从顶部出现，3秒后消失</desc>
</demo>

<template>
  <co-button @click="onClick">打开 toast</co-button>
</template>

<script lang="ts" setup>
import { CoToast, CoButton } from 'coast-ui-vue3';
let index = 1;
const onClick = () => {
  CoToast({ text: `这是第 ${index++} 条消息提示~` });
};
</script>

<style lang="scss" scoped></style>

<demo>
  <title>文字居中</title>
  <desc>使用 center 属性让文字水平居中</desc>
</demo>

<template>
  <co-button @click="onClick">打开 toast</co-button>
</template>

<script lang="ts" setup>
import { CoToast, CoButton } from 'coast-ui-vue3';
const onClick = () => {
  CoToast({
    text: '这是一条居中的消息提示~',
    center: true,
  });
};
</script>

<style lang="scss" scoped></style>

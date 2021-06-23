<demo>
  <title>不同状态</title>
  <desc>包含的状态有 [ normal, secondary, success, warning, error ]</desc>
</demo>

<template>
  <co-button @click="onClick1">普通 normal</co-button>
  <co-button @click="onClick2">次级 secondary</co-button>
  <co-button @click="onClick3">成功 success</co-button>
  <co-button @click="onClick4">警告 warning</co-button>
  <co-button @click="onClick5">错误 error</co-button>
</template>

<script lang="ts">
import { CoToast, CoButton } from 'coast-ui-vue3';

export default {
  components: { CoButton },
  setup() {
    const onClick1 = () => {
      CoToast({ text: '这是一条普通的消息提示~', type: 'normal' });
    };
    const onClick2 = () => {
      CoToast({ text: '这是一条次要的消息提示~', type: 'secondary' });
    };
    const onClick3 = () => {
      CoToast({ text: '这是一条成功的消息提示~', type: 'success' });
    };
    const onClick4 = () => {
      CoToast({ text: '这是一条警告提示~', type: 'warning' });
    };
    const onClick5 = () => {
      CoToast({ text: '这是一条错误提示~', type: 'error' });
    };

    return { onClick1, onClick2, onClick3, onClick4, onClick5 };
  },
};
</script>

<style lang="scss" scoped>
</style>

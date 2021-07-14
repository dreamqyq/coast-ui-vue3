<demo>
  <title>可关闭</title>
  <desc>可以使用 showClose 属性添加关闭按钮，默认3秒后消失。手动传入 delay 属性控制延时关闭的时间，单位：秒。delay 设置 0 不会被自动关闭。</desc>
</demo>

<template>
  <co-button @click="onClick1">可关闭，delay: 5</co-button>
  <co-button @click="onClick2">可关闭，delay: 0</co-button>
</template>

<script lang="ts">
import { CoToast, CoButton } from 'coast-ui-vue3';

export default {
  components: { CoButton },
  setup() {
    const onClick1 = () => {
      CoToast({
        text: '这是一条可以关闭的消息提示~',
        showClose: true,
        delay: 5,
      });
    };
    const onClick2 = () => {
      CoToast({
        text: '这是一条可以关闭的消息提示~',
        showClose: true,
        delay: 0,
      });
    };

    return { onClick1, onClick2 };
  },
};
</script>

<style lang="scss" scoped>
</style>

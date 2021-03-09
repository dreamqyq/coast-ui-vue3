<template>
  <div>
    <h1>Button 文档</h1>
    <div>
      <Button>普通按钮</Button>
      <Button theme="button">button 样式</Button>
      <Button theme="link">link 样式</Button>
      <Button theme="text">text 样式</Button>
    </div>
    <div>
      <Button size="big">大按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">小按钮</Button>
    </div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用文字按钮</Button>
    </div>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 20px 0;
}
</style>

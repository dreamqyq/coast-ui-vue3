<demo>
  <title>浮层内关闭</title>
  <desc>通过调用 content 插槽中的 close 方法，关闭 popover</desc>
</demo>

<template>
  <co-popover position="top" trigger="click">
    <template #content="{ close }">
      <p>这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。</p>
      <co-button theme="link" @click="close">关闭</co-button>
    </template>
    <co-button>浮层内关闭</co-button>
  </co-popover>
</template>

<script lang="ts" setup>
import { CoButton, CoPopover } from 'coast-ui-vue3';
</script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
  &-theme-link {
    float: right;
    margin-right: 0;
  }
}
</style>

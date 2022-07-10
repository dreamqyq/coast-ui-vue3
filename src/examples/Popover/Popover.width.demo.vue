<demo>
  <title>支持 width</title>
  <desc>width 类型可为 number 或 string。传入数字，宽度单位为 px</desc>
</demo>

<template>
  <co-popover position="top" trigger="hover" width="30%">
    <template #content> 这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。 </template>
    <co-button>width: 30%</co-button>
  </co-popover>
  <co-popover position="right" trigger="hover" :width="150">
    <template #content> 这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。 </template>
    <co-button>width: 150px</co-button>
  </co-popover>
</template>

<script lang="ts" setup>
import { CoButton, CoPopover } from 'coast-ui-vue3';
</script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
}
</style>

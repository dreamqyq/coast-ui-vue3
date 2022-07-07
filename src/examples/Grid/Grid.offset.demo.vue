<demo>
  <title>分栏偏移</title>
  <desc>支持偏移指定的栏数，通过制定 CoCol 组件的 offset 属性可以指定分栏偏移的栏数。</desc>
</demo>

<template>
  <co-row :gutter="20">
    <co-col :span="6"><div class="card"></div></co-col>
    <co-col :span="6" :offset="6"><div class="card bg-light"></div></co-col>
  </co-row>
  <co-row :gutter="20">
    <co-col :span="6" :offset="6"><div class="card"></div></co-col>
    <co-col :span="6" :offset="6"><div class="card bg-light"></div></co-col>
  </co-row>
  <co-row :gutter="20">
    <co-col :span="12" :offset="6"><div class="card bg-light"></div></co-col>
  </co-row>
</template>

<script lang="ts" setup>
import { CoRow, CoCol } from 'coast-ui-vue3';
</script>

<style lang="scss" scoped>
.coast-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.card {
  min-height: 36px;
  background: #d3dce6;
  border-radius: 4px;

  &.bg-light {
    background: #e5e9f2;
  }
}
</style>
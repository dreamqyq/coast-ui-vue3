<demo>
  <title>混合布局</title>
  <desc>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</desc>
</demo>

<template>
  <co-row :gutter="20">
    <co-col :span="16"><div class="card"></div></co-col>
    <co-col :span="8"><div class="card bg-light"></div></co-col>
  </co-row>
  <co-row :gutter="20">
    <co-col :span="8"><div class="card"></div></co-col>
    <co-col :span="8"><div class="card bg-light"></div></co-col>
    <co-col :span="4"><div class="card"></div></co-col>
    <co-col :span="4"><div class="card bg-light"></div></co-col>
  </co-row>
  <co-row :gutter="20">
    <co-col :span="4"><div class="card"></div></co-col>
    <co-col :span="16"><div class="card bg-light"></div></co-col>
    <co-col :span="4"><div class="card"></div></co-col>
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
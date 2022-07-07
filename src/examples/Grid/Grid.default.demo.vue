<demo>
  <title>基础布局</title>
  <desc>通过基础的 24 分栏，迅速简便地创建布局。</desc>
</demo>

<template>
  <co-row>
    <co-col><div class="card" /></co-col>
  </co-row>
  <co-row>
    <co-col span="12"><div class="card" /></co-col>
    <co-col span="12"><div class="card bg-light" /></co-col>
  </co-row>
  <co-row>
    <co-col span="8"><div class="card" /></co-col>
    <co-col span="8"><div class="card bg-light" /></co-col>
    <co-col span="8"><div class="card" /></co-col>
  </co-row>
  <co-row>
    <co-col span="6"><div class="card" /></co-col>
    <co-col span="6"><div class="card bg-light" /></co-col>
    <co-col span="6"><div class="card" /></co-col>
    <co-col span="6"><div class="card bg-light" /></co-col>
  </co-row>
  <co-row>
    <co-col span="4"><div class="card" /></co-col>
    <co-col span="4"><div class="card bg-light" /></co-col>
    <co-col span="4"><div class="card" /></co-col>
    <co-col span="4"><div class="card bg-light" /></co-col>
    <co-col span="4"><div class="card" /></co-col>
    <co-col span="4"><div class="card bg-light" /></co-col>
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
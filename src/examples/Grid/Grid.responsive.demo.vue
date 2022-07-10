<demo>
  <title>响应式布局</title>
  <desc>参照 Bootstrap 的 响应式设计，预设六个响应尺寸：xs sm md lg xl xxl。</desc>
</demo>

<template>
  <co-row gutter="10">
    <co-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card" />
    </co-col>
    <co-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card bg-light" />
    </co-col>
    <co-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card" />
    </co-col>
    <co-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card bg-light" />
    </co-col>
    <co-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card" />
    </co-col>
    <co-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card bg-light" />
    </co-col>
    <co-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card" />
    </co-col>
    <co-col span="24" sm="12" :md="{ span: 6, offset: 2 }" :lg="{ offset: 0 }" xl="4" xxl="2">
      <div class="card bg-light" />
    </co-col>
  </co-row>
</template>

<script lang="ts" setup>
import { CoRow, CoCol } from 'coast-ui-vue3';
</script>

<style lang="scss" scoped>
.coast-col {
  margin-bottom: 20px;
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
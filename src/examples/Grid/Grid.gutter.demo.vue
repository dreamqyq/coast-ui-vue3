<demo>
  <title>分栏间隔</title>
  <desc>Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</desc>
</demo>

<template>
  <co-row gutter="20">
    <co-col span="6"><div class="card" /></co-col>
    <co-col span="6"><div class="card bg-light" /></co-col>
    <co-col span="6"><div class="card" /></co-col>
    <co-col span="6"><div class="card bg-light" /></co-col>
  </co-row>
</template>

<script lang="ts">
import { CoRow, CoCol } from 'coast-ui-vue3';

export default {
  components: { CoRow, CoCol },
};
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
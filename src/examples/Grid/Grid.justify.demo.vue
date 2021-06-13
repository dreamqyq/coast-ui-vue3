<demo>
  <title>对齐方式</title>
  <desc>通过 flex 布局的 justify-content 来对分栏进行灵活的对齐，并可通过CoRow 的 justify 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。</desc>
</demo>

<template>
  <co-row justify="start">
    <co-col :span="6"><div class="card"></div></co-col>
    <co-col :span="6"><div class="card bg-light"></div></co-col>
    <co-col :span="6"><div class="card"></div></co-col>
  </co-row>
  <co-row justify="center">
    <co-col :span="6"><div class="card"></div></co-col>
    <co-col :span="6"><div class="card bg-light"></div></co-col>
    <co-col :span="6"><div class="card"></div></co-col>
  </co-row>
  <co-row justify="end">
    <co-col :span="6"><div class="card"></div></co-col>
    <co-col :span="6"><div class="card bg-light"></div></co-col>
    <co-col :span="6"><div class="card"></div></co-col>
  </co-row>
  <co-row justify="space-between">
    <co-col :span="6"><div class="card"></div></co-col>
    <co-col :span="6"><div class="card bg-light"></div></co-col>
    <co-col :span="6"><div class="card"></div></co-col>
  </co-row>
  <co-row justify="space-around">
    <co-col :span="6"><div class="card"></div></co-col>
    <co-col :span="6"><div class="card bg-light"></div></co-col>
    <co-col :span="6"><div class="card"></div></co-col>
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
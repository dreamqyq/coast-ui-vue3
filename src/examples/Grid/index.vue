<template>
  <DemoList :components="components" title="Grid 文档" />
</template>

<script lang="ts" setup>
import DemoList from '../../components/Demo/DemoList.vue';
import GridDefaultDemo from './Grid.default.demo.vue';
import GridGutterDemo from './Grid.gutter.demo.vue';
import GridHybridDemo from './Grid.hybrid.demo.vue';
import GridOffsetDemo from './Grid.offset.demo.vue';
import GridJustifyDemo from './Grid.justify.demo.vue';
import GridResponsiveDemo from './Grid.responsive.demo.vue';
const components = [
  GridDefaultDemo,
  GridGutterDemo,
  GridHybridDemo,
  GridOffsetDemo,
  GridJustifyDemo,
  GridResponsiveDemo,
];
</script>

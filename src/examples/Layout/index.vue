<template>
  <DemoList :components="components" title="Layout 文档" />
</template>

<script lang="ts" setup>
import DemoList from '../../components/Demo/DemoList.vue';
import LayoutDefaultDemo from './Layout.default.demo.vue';
const components = [LayoutDefaultDemo];
</script>

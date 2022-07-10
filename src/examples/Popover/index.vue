<template>
  <DemoList :components="components" title="Popover 文档" />
</template>

<script lang="ts" setup>
import DemoList from '../../components/Demo/DemoList.vue';
import PopoverDefaultDemo from './Popover.default.demo.vue';
import PopoverPositionDemo from './Popover.position.demo.vue';
import PopoverWidthDemo from './Popover.width.demo.vue';
import PopoverCloseDemo from './Popover.close.demo.vue';
const components = [PopoverDefaultDemo, PopoverPositionDemo, PopoverWidthDemo, PopoverCloseDemo];
</script>

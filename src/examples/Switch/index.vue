<template>
  <DemoList :components="components" title="Switch 文档" />
</template>

<script lang="ts" setup>
import DemoList from '../../components/Demo/DemoList.vue';
import SwitchDefaultDemo from './Switch.default.demo.vue';
import SwitchDisabledDemo from './Switch.disabled.demo.vue';
const components = [SwitchDefaultDemo, SwitchDisabledDemo];
</script>

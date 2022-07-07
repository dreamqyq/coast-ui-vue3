<template>
  <DemoList :components="components" title="Button 文档" />
</template>

<script lang="ts" setup>
import DemoList from '../../components/Demo/DemoList.vue';
import ButtonDefaultDemo from './Button.default.demo.vue';
import ButtonSizeDemo from './Button.size.demo.vue';
import ButtonLevelDemo from './Button.level.demo.vue';
import ButtonDisabledDemo from './Button.disabled.demo.vue';
import ButtonLoadingDemo from './Button.loading.demo.vue';
import ButtonGroupDemo from './ButtonGroup.demo.vue';

const components = [
  ButtonDefaultDemo,
  ButtonSizeDemo,
  ButtonLevelDemo,
  ButtonDisabledDemo,
  ButtonLoadingDemo,
  ButtonGroupDemo,
];
</script>

<style lang="scss" scoped>
div {
  margin: 20px 0;
}
</style>

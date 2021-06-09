<template>
  <div>
    <h1>Button 文档</h1>
    <Demo :component="ButtonDefaultDemo" />
    <Demo :component="ButtonSizeDemo" />
    <Demo :component="ButtonLevelDemo" />
    <Demo :component="ButtonDisabledDemo" />
    <Demo :component="ButtonLoadingDemo" />
    <Demo :component="ButtonGroupDemo" />
  </div>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import ButtonDefaultDemo from './Button.default.demo.vue';
import ButtonSizeDemo from './Button.size.demo.vue';
import ButtonLevelDemo from './Button.level.demo.vue';
import ButtonDisabledDemo from './Button.disabled.demo.vue';
import ButtonLoadingDemo from './Button.loading.demo.vue';
import ButtonGroupDemo from './ButtonGroup.demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      ButtonDefaultDemo,
      ButtonSizeDemo,
      ButtonLevelDemo,
      ButtonDisabledDemo,
      ButtonLoadingDemo,
      ButtonGroupDemo,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 20px 0;
}
</style>

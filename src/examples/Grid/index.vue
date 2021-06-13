<template>
  <div>
    <h1>Grid 文档</h1>
    <Demo :component="GridDefaultDemo" />
    <Demo :component="GridGutterDemo" />
    <Demo :component="GridHybridDemo" />
    <Demo :component="GridOffsetDemo" />
    <Demo :component="GridJustifyDemo" />
    <Demo :component="GridResponsiveDemo" />
  </div>
</template>

<script lang="ts">
import GridDefaultDemo from './Grid.default.demo.vue';
import GridGutterDemo from './Grid.gutter.demo.vue';
import GridHybridDemo from './Grid.hybrid.demo.vue';
import GridOffsetDemo from './Grid.offset.demo.vue';
import GridJustifyDemo from './Grid.justify.demo.vue';
import GridResponsiveDemo from './Grid.responsive.demo.vue';
import Demo from '../../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      GridDefaultDemo,
      GridGutterDemo,
      GridHybridDemo,
      GridOffsetDemo,
      GridJustifyDemo,
      GridResponsiveDemo,
    };
  },
};
</script>
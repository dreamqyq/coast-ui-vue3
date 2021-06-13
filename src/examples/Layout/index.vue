<template>
  <div>
    <h1>Layout 文档</h1>
    <Demo :component="LayoutDefaultDemo" />
  </div>
</template>

<script lang="ts">
import LayoutDefaultDemo from './Layout.default.demo.vue';
import Demo from '../../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      LayoutDefaultDemo,
    };
  },
};
</script>

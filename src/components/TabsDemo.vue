<template>
  <div>
    <h1>Tabs 文档</h1>
    <Demo :component="TabsDemo1" />
  </div>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import TabsDemo1 from '../components/Tabs1.demo.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return { TabsDemo1 };
  },
};
</script>

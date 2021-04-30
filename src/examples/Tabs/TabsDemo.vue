<template>
  <div>
    <h1>Tabs 文档</h1>
    <Demo :component="TabsDemo1" />
    <Demo :component="TabsDemo2" />
  </div>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import TabsDemo1 from './Tabs1.demo.vue';
import TabsDemo2 from './Tabs2.demo.vue';

export default {
  components: {
    Demo,
  },
  setup() {
    return { TabsDemo1, TabsDemo2 };
  },
};
</script>

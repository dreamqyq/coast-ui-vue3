<template>
  <div>
    <h1>Tabs 文档</h1>
    <Demo :component="TabsDefaultDemo" />
    <Demo :component="TabsDisabledDemo" />
  </div>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import TabsDefaultDemo from './Tabs.default.demo.vue';
import TabsDisabledDemo from './Tabs.disabled.demo.vue';

export default {
  components: {
    Demo,
  },
  setup() {
    return { TabsDefaultDemo, TabsDisabledDemo };
  },
};
</script>

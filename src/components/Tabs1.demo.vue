<demo>常规使用</demo>

<template>
  <Tabs v-model:selected="selected">
    <TabPanel title="导航1">内容1</TabPanel>
    <TabPanel title="导航2">内容2</TabPanel>
  </Tabs>
</template>

<script lang="ts">
import { TabPanel, Tabs } from '../lib/index';
import { ref } from 'vue';

export default {
  components: {
    Tabs,
    TabPanel,
  },
  setup() {
    const selected = ref('导航2');
    return { selected };
  },
};
</script>

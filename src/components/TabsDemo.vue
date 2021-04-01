<template>
  <div>
    <h1>Tabs 文档</h1>
    <Tabs v-model:selected="selected">
      <TabPanel title="导航1">内容1</TabPanel>
      <TabPanel title="导航222222">内容2</TabPanel>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Tabs from '../lib/Tabs.vue';
import TabPanel from '../lib/TabPanel.vue';

export default {
  components: {
    Tabs,
    TabPanel,
  },
  setup() {
    const selected = ref('导航222222');
    return { selected };
  },
};
</script>

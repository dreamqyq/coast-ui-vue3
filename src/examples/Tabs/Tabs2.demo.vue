<demo>TabPanel 支持 disabled</demo>

<template>
  <Tabs v-model:selected="selected">
    <TabPanel title="导航1">内容1</TabPanel>
    <TabPanel title="导航2 disabled" :disabled="true">内容2</TabPanel>
  </Tabs>
</template>

<script lang="ts">
import { TabPanel, Tabs } from 'coast-ui-vue3';
import { ref } from 'vue';

export default {
  components: {
    Tabs,
    TabPanel,
  },
  setup() {
    const selected = ref('导航1');
    return { selected };
  },
};
</script>

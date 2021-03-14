<template>
  <div>
    <h1>Tabs 文档</h1>

    <Tabs>
      <TabsPanel title="导航1">内容1</TabsPanel>
      <TabsPanel title="导航2">内容2</TabsPanel>
    </Tabs>
  </div>
</template>

<script lang="ts">
import Tabs from "../lib/Tabs.vue";
import TabsPanel from "../lib/TabsPanel.vue";
export default {
  components: {
    Tabs,
    TabsPanel,
  },
};
</script>
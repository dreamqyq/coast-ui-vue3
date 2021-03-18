<template>
  <div>
    <h1>Tabs 文档</h1>
    <Tabs v-model:selected="selected">
      <TabsPanel title="导航1">内容1</TabsPanel>
      <TabsPanel title="导航222222">内容2</TabsPanel>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Tabs from "../lib/Tabs.vue";
import TabsPanel from "../lib/TabsPanel.vue";
export default {
  components: {
    Tabs,
    TabsPanel,
  },
  setup() {
    const selected = ref("导航222222");
    return { selected };
  },
};
</script>
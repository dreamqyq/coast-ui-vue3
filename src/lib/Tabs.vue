<template>
  <component v-for="(tab, index) in defaults" :is="tab" :key="index" />
</template>

<script lang="ts">
import TabsPanel from "./TabsPanel.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TabsPanel) {
        throw new Error("Tabs 的子标签必须为 TabsPanel");
      }
    });
    return { defaults };
  },
};
</script>
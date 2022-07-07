<demo>TabPanel 支持 disabled</demo>

<template>
  <co-tabs v-model:selected="selected">
    <co-tab-panel title="导航1">内容1</co-tab-panel>
    <co-tab-panel title="导航2 disabled" disabled>内容2</co-tab-panel>
  </co-tabs>
</template>

<script lang="ts" setup>
import { CoTabPanel, CoTabs } from 'coast-ui-vue3';
import { ref } from 'vue';
const selected = ref('导航1');
</script>

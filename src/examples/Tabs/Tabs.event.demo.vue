<demo>事件监听</demo>

<template>
  <co-tabs v-model:selected="selected" @update:selected="handleChange">
    <co-tab-panel title="导航1">内容1</co-tab-panel>
    <co-tab-panel title="导航2">内容2</co-tab-panel>
  </co-tabs>
</template>

<script lang="ts">
import { CoTabPanel, CoTabs } from 'coast-ui-vue3';
import { ref } from 'vue';

export default {
  components: {
    CoTabs,
    CoTabPanel,
  },
  setup() {
    const selected = ref('导航2');
    const handleChange = (currentValue: string) => {
      console.log('tabs value change', currentValue);
    };
    return { selected,handleChange };
  },
};
</script>

<template>
  <DemoList :components="components" title="Tabs 文档" />
</template>

<script lang="ts">
import DemoList from '../../components/Demo/DemoList.vue';
import TabsDefaultDemo from './Tabs.default.demo.vue';
import TabsDisabledDemo from './Tabs.disabled.demo.vue';
import TabsEventDemo from './Tabs.event.demo.vue';

export default {
  components: { DemoList },
  setup() {
    return {
      components: [TabsDefaultDemo, TabsDisabledDemo, TabsEventDemo],
    };
  },
};
</script>

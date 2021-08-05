<template>
  <DemoList :components="components" title="Layout 文档" />
</template>

<script lang="ts">
import DemoList from '../../components/Demo/DemoList.vue';
import LayoutDefaultDemo from './Layout.default.demo.vue';

export default {
  components: { DemoList },
  setup() {
    return {
      components: [LayoutDefaultDemo],
    };
  },
};
</script>

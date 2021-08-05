<template>
  <DemoList :components="components" title="Popover 文档" />
</template>

<script lang="ts">
import DemoList from '../../components/Demo/DemoList.vue';
import PopoverDefaultDemo from './Popover.default.demo.vue';

export default {
  components: { DemoList },
  setup() {
    return {
      components: [PopoverDefaultDemo],
    };
  },
};
</script>
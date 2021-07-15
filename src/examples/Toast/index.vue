<template>
  <DemoList :components="components" title="Toast 文档" />
</template>

<script lang="ts">
import DemoList from '../../components/Demo/DemoList.vue';
import ToastDefaultDemo from './Toast.default.demo.vue';
import ToastTypeDemo from './Toast.type.demo.vue';
import ToastCenterDemo from './Toast.center.demo.vue';
import ToastCloseDemo from './Toast.close.demo.vue';

export default {
  components: { DemoList },
  setup() {
    return {
      components: [
        ToastDefaultDemo,
        ToastTypeDemo,
        ToastCenterDemo,
        ToastCloseDemo,
      ],
    };
  },
};
</script>

<template>
  <div>
    <h1>Toast 文档</h1>
    <Demo :component="ToastDefaultDemo" />
    <Demo :component="ToastTypeDemo" />
    <Demo :component="ToastCenterDemo" />
  </div>
</template>

<script lang="ts">
import ToastDefaultDemo from './Toast.default.demo.vue';
import ToastTypeDemo from './Toast.type.demo.vue';
import ToastCenterDemo from './Toast.center.demo.vue';
import Demo from '../../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      ToastDefaultDemo,
      ToastTypeDemo,
      ToastCenterDemo
    };
  },
};
</script>

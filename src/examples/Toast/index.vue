<template>
  <div>
    <h1>Toast 文档</h1>
    <Demo :component="ToastDefaultDemo" />
    <Demo :component="ToastTypeDemo" />
  </div>
</template>

<script lang="ts">
import ToastDefaultDemo from './Toast.default.demo.vue';
import ToastTypeDemo from './Toast.type.demo.vue';
import Demo from '../../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      ToastDefaultDemo,
      ToastTypeDemo,
    };
  },
};
</script>

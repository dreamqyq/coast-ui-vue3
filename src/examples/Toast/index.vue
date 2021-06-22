<template>
  <div>
    <h1>Layout 文档</h1>
    <Demo :component="ToastDefaultDemo" />
  </div>
</template>

<script lang="ts">
import ToastDefaultDemo from './Toast.default.demo.vue';
import Demo from '../../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      ToastDefaultDemo,
    };
  },
};
</script>

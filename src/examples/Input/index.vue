<template>
  <div>
    <h1>Input 文档</h1>
    <Demo :component="InputDemo1" />
  </div>
</template>

<script lang="ts">
import InputDemo1 from './Input1.demo.vue';
import Demo from '../../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      InputDemo1,
    };
  },
};
</script>


<template>
  <h1>Button 文档</h1>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import DialogDemo1 from './Dialog1.demo.vue';
import DialogDemo2 from './Dialog2.demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
    };
  },
};
</script>

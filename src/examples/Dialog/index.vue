<template>
  <h1>Dialog 文档</h1>
  <Demo :component="DialogDemo1" />
  <Demo :component="DialogDemo2" />
  <Demo :component="DialogDemo3" />
  <Demo :component="DialogDemo4" />
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import DialogDemo1 from './Dialog1.demo.vue';
import DialogDemo2 from './Dialog2.demo.vue';
import DialogDemo3 from './Dialog3.demo.vue';
import DialogDemo4 from './Dialog4.demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      DialogDemo1,
      DialogDemo2,
      DialogDemo3,
      DialogDemo4,
    };
  },
};
</script>

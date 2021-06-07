<template>
  <div>
    <h1>Input 文档</h1>
    <Demo :component="InputDemo1" />
    <Demo :component="InputDemo2" />
    <Demo :component="InputDemo3" />
    <Demo :component="InputDemo4" />
    <Demo :component="InputDemo5" />
    <Demo :component="InputDemo6" />
  </div>
</template>

<script lang="ts">
import InputDemo1 from './Input1.demo.vue';
import InputDemo2 from './Input2.demo.vue';
import InputDemo3 from './Input3.demo.vue';
import InputDemo4 from './Input4.demo.vue';
import InputDemo5 from './Input5.demo.vue';
import InputDemo6 from './Input6.demo.vue';
import Demo from '../../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      InputDemo1,
      InputDemo2,
      InputDemo3,
      InputDemo4,
      InputDemo5,
      InputDemo6,
    };
  },
};
</script>


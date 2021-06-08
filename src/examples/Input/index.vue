<template>
  <div>
    <h1>Input 文档</h1>
    <Demo :component="InputDemo1" />
    <Demo :component="InputDemo2" />
    <Demo :component="InputDemo3" />
    <Demo :component="InputDemo4" />
    <Demo :component="InputDemo5" />
    <Demo :component="InputDemo6" />
    <Demo :component="InputDemo7" />
    <Demo :component="InputDemo8" />
    <Demo :component="InputDemo9" />
    <Demo :component="InputDemo10" />
    <Demo :component="InputDemo11" />
  </div>
</template>

<script lang="ts">
import InputDemo1 from './Input1.demo.vue';
import InputDemo2 from './Input2.demo.vue';
import InputDemo3 from './Input3.demo.vue';
import InputDemo4 from './Input4.demo.vue';
import InputDemo5 from './Input5.demo.vue';
import InputDemo6 from './Input6.demo.vue';
import InputDemo7 from './Input7.demo.vue';
import InputDemo8 from './Input8.demo.vue';
import InputDemo9 from './Input9.demo.vue';
import InputDemo10 from './Input10.demo.vue';
import InputDemo11 from './Input11.demo.vue';
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
      InputDemo7,
      InputDemo8,
      InputDemo9,
      InputDemo10,
      InputDemo11,
    };
  },
};
</script>


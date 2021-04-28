<template>
  <div>
    <h1>Switch 文档</h1>
    <Demo :component="SwitchDemo1" />
    <Demo :component="SwitchDemo2" />
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from './Switch1.demo.vue';
import SwitchDemo2 from './Switch2.demo.vue';
import Demo from '../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
    };
  },
};
</script>


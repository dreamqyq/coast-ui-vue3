<template>
  <div>
    <h1>Switch 文档</h1>
    <Demo :component="SwitchDefaultDemo" />
    <Demo :component="SwitchDisabledDemo" />
  </div>
</template>

<script lang="ts">
import SwitchDefaultDemo from './Switch.default.demo.vue';
import SwitchDisabledDemo from './Switch.disabled.demo.vue';
import Demo from '../../components/Demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      SwitchDefaultDemo,
      SwitchDisabledDemo,
    };
  },
};
</script>


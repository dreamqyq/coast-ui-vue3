<template>
  <div>
    <h1>Switch 文档</h1>
    <Switch :value="defaultValue" @input="defaultValue = $event" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const defaultValue = ref(false);

    return { defaultValue };
  },
};
</script>
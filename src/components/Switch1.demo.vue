<demo>常规用法</demo>

<template>
  <Switch v-model:value="defaultValue" />
</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../lib/Switch.vue';

export default {
  components: { Switch },
  setup() {
    const defaultValue = ref(false);
    return { defaultValue };
  },
};
</script>

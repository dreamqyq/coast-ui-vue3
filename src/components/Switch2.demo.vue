<demo>支持 disabled</demo>

<template>
  <Switch v-model:value="defaultValue" disabled />
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

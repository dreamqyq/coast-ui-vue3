<demo>常规用法</demo>

<template>
  <co-switch v-model:value="defaultValue" />
</template>

<script lang="ts">
import { ref } from 'vue';
import { CoSwitch } from 'coast-ui-vue3';

export default {
  components: { CoSwitch },
  setup() {
    const defaultValue = ref(false);
    return { defaultValue };
  },
};
</script>

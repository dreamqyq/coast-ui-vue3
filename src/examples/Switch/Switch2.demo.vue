<demo>支持 disabled</demo>

<template>
  <co-switch v-model:value="defaultValue" disabled />
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

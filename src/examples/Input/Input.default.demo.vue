<demo>常规用法</demo>

<template>
  <co-input v-model:value="value" placeholder="please input username" />
</template>

<script lang="ts">
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';

export default {
  components: { CoInput },
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>

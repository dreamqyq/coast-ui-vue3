<demo>
  <title>支持 width</title>
</demo>

<template>
  <co-input v-model:value="value" width="100%" placeholder="width: 100%" />
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

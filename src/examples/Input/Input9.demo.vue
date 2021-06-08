<demo>
  <title>支持 clearable</title>
</demo>

<template>
  <co-input v-model:value="value" placeholder="clearable" clearable @clear="handleClear" />
</template>

<script lang="ts">
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';

export default {
  components: { CoInput },
  setup() {
    const value = ref('');
    const handleClear = () => {
      console.log('clear input value');
    };
    return { value, handleClear };
  },
};
</script>

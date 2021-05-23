<demo>常规用法</demo>

<template>
  <co-switch v-model:value="defaultValue" @update:value="handleChange" />
</template>

<script lang="ts">
import { ref } from 'vue';
import { CoSwitch } from 'coast-ui-vue3';

export default {
  components: { CoSwitch },
  setup() {
    const defaultValue = ref(false);
    const handleChange = (value: boolean) => {
      console.log('value change', value);
    };
    return { defaultValue, handleChange };
  },
};
</script>

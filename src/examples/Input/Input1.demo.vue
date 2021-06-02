<demo>常规用法</demo>

<template>
  <co-input placeholder="The Evil Rabbit" />
  <co-input placeholder="The Evil Rabbit" disabled />
</template>

<script lang="ts">
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';

export default {
  components: { CoInput },
  setup() {
    const defaultValue = ref(false);
    const handleChange = (value: boolean) => {
      console.log('value change', value);
    };
    return { defaultValue, handleChange };
  },
};
</script>

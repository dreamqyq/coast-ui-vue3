<demo>常规用法</demo>

<template>
  <co-switch v-model:value="defaultValue" @update:value="handleChange" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoSwitch } from 'coast-ui-vue3';
const defaultValue = ref(false);
const handleChange = (value: boolean) => {
  console.log('value change', value);
};
</script>

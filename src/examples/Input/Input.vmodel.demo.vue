<demo>
  <title>Input v-model</title>
</demo>

<template>
  <co-input v-model:value="value" placeholder="please input content" @update:value="handleUpdate" />
  input value: {{ value }}
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
const handleUpdate = (newValue: string) => {
  console.log('input get new value', newValue);
};
</script>

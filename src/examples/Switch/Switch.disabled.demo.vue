<demo>支持 disabled</demo>

<template>
  <co-switch v-model:value="defaultValue" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoSwitch } from 'coast-ui-vue3';
const defaultValue = ref(false);
</script>

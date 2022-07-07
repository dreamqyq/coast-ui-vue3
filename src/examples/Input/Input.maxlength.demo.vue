<demo>
  <title>支持 maxlength</title>
</demo>

<template>
  <co-input v-model:value="value" :maxlength="5" placeholder="limit 5 characters" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
</script>

<demo>
  <title>支持 label</title>
</demo>

<template>
  <co-input v-model:value="userName" placeholder="EnochQin" label="userName" />
  <br />
  <co-input v-model:value="url1" placeholder="https://github" labelRight=".com" />
  <br />
  <co-input v-model:value="url2" placeholder="github" label="https://" labelRight=".com" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const userName = ref('');
const url1 = ref('');
const url2 = ref('');
</script>

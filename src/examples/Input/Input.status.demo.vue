<demo>
  <title>支持 status</title>
  <desc>共支持 normal，secondary，success，warning，error 五种 status，默认的 status 是 normal</desc>
</demo>

<template>
  <co-input v-model:value="value1" placeholder="normal" status="normal" />
  <br />
  <co-input v-model:value="value2" placeholder="secondary" status="secondary" />
  <br />
  <co-input v-model:value="value3" placeholder="success" status="success" />
  <br />
  <co-input v-model:value="value4" placeholder="warning" status="warning" />
  <br />
  <co-input v-model:value="value5" placeholder="error" status="error" />
  <br />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
const value5 = ref('');
</script>

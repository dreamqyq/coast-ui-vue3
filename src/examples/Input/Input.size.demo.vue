<demo>
  <title>支持 size</title>
  <desc>共支持 mini，small，medium，large 四种 size，默认的 size 是 medium</desc>
</demo>

<template>
  <div><co-input v-model:value="value" placeholder="mini input" size="mini" /></div>
  <div><co-input v-model:value="value" placeholder="small input" size="small" /></div>
  <div><co-input v-model:value="value" placeholder="medium input" size="medium" /></div>
  <div><co-input v-model:value="value" placeholder="large input" size="large" /></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
</script>

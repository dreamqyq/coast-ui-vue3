<demo>
  <title>禁止输入</title>
  <desc>支持 disabled, readonly</desc>
</demo>

<template>
  <div><co-input value="disabled" disabled /></div>
  <div><co-input value="readonly" readonly /></div>
</template>

<script lang="ts" setup>
import { CoInput } from 'coast-ui-vue3';
</script>

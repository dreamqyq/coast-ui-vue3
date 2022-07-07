<demo>password 密码框</demo>

<template>
  <co-input v-model:value="value" placeholder="please input password" type="password" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
const value = ref('');
</script>

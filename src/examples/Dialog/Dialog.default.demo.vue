<demo>常规使用</demo>

<template>
  <div>
    <co-button @click="toggle">打开对话框</co-button>
    <co-dialog v-model:visible="visible" @update:visible="handleChange">
      <strong>文本框第一行</strong>
      <div>文本框第二行</div>
    </co-dialog>
  </div>
</template>

<script lang="ts" setup>
import { CoButton, CoDialog } from 'coast-ui-vue3';
import { ref } from 'vue';
const visible = ref(false);
const toggle = () => {
  visible.value = !visible.value;
};
const handleChange = (visible: boolean) => {
  console.log('dialog visible change', visible);
};
</script>

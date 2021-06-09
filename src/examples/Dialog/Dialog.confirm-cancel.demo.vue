<demo>confirm，cancel 事件</demo>

<template>
  <div>
    <co-button @click="toggle">打开对话框</co-button>
    <co-dialog v-model:visible="visible" :confirm="onConfirm" :cancel="onCancel">
      confirm, cancel 事件如果 return false, 点击按钮不会自动关闭对话框。点击确认，不会关闭
    </co-dialog>
  </div>
</template>

<script lang="ts">
import { CoButton, CoDialog } from 'coast-ui-vue3';
import { ref } from 'vue';

export default {
  components: {
    CoDialog,
    CoButton,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const onConfirm = () => {
      console.log('confirm event');
      return false;
    };
    const onCancel = () => {
      console.log('cancel event');
    };
    return {
      toggle,
      visible,
      onConfirm,
      onCancel,
    };
  },
};
</script>

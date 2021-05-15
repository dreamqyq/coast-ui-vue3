<demo>常规使用</demo>

<template>
  <div>
    <co-button @click="toggle">打开对话框</co-button>
    <co-dialog v-model:visible="visible" :cancel="cancel" :confirm="confirm">
      <strong>文本框第一行</strong>
      <div>文本框第二行</div>
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
    const confirm = () => {
      console.log('confirm click');
      return true;
    };
    const cancel = () => {
      console.log('cancel click');
    };
    return {
      toggle,
      visible,
      confirm,
      cancel,
    };
  },
};
</script>

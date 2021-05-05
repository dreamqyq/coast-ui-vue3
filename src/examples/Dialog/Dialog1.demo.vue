<demo>常规使用</demo>

<template>
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog v-model:visible="visible" :cancel="cancel" :confirm="confirm" :overlayClosable="false">
      <strong>文本框第一行</strong>
      <div>文本框第二行</div>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from '../../lib/Dialog.vue';
import { Button } from '../../lib/index';
import { ref } from 'vue';

export default {
  components: {
    Dialog,
    Button,
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

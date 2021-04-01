<template>
  <h1>Button 文档</h1>
  <h2>示例1：基本用法</h2>
  <Button @click="toggle">打开 Dialog</Button>
  <Dialog v-model:visible="visible" :cancel="cancel" :confirm="confirm" :overlayClosable="false">
    <template v-slot:content>
      <p>第一行内容</p>
      <p>第二行内容</p>
    </template>
  </Dialog>

  <h2>示例2：openDialog 方法</h2>
  <Button @click="showDialog">openDialog 打开 Dialog</Button>
</template>

<script lang="ts">
import { ref } from 'vue';
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import { openDialog } from '../lib/openDialog';

export default {
  components: { Button, Dialog },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const confirm = () => {
      console.log('confirm click');
      return false;
    };
    const cancel = () => {
      console.log('cancel click');
    };

    const showDialog = () => {
      openDialog({
        content: 'Dialog content',
        title: 'Dialog title',
        confirm() {
          console.log('confirm');
          return false;
        },
        cancel() {
          console.log('cancel');
        },
      });
    };
    return { visible, toggle, confirm, cancel, showDialog };
  },
};
</script>

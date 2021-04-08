<demo>一键打开 Dialog</demo>

<template>
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import { Button, openDialog } from '../lib/index';

export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        content: '文档内容',
        title: '标题',
        overlayClosable: false,
        confirm() {
          console.log('confirm');
          return false;
        },
        cancel() {
          console.log('cancel');
        },
      });
    };
    return {
      showDialog
    };
  }
};
</script>

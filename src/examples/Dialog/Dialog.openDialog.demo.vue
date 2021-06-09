<demo>一键打开 Dialog</demo>

<template>
  <div>
    <co-button @click="showDialog">打开对话框</co-button>
  </div>
</template>

<script lang="ts">
import { CoButton, openDialog } from 'coast-ui-vue3';

export default {
  components: {
    CoButton,
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
      showDialog,
    };
  },
};
</script>

<template>
  <h1>Button 文档</h1>
  <Button @click="toggle">打开 Dialog</Button>
  <Dialog
    v-model:visible="visible"
    :overlayClosable="false"
    :onCancel="onCancel"
    :onConfirm="onConfirm"
  >
    <template v-slot:content>
      <p>第一行内容</p>
      <p>第二行内容</p>
    </template>
  </Dialog>
</template>

<script lang="ts">
import { ref } from "vue";
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
export default {
  components: { Button, Dialog },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const onConfirm = () => {
      console.log("confirm click");
      return false;
    };
    const onCancel = () => {
      console.log("cancel click");
    };
    return { visible, toggle, onConfirm, onCancel };
  },
};
</script>
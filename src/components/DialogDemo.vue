<template>
  <h1>Button 文档</h1>
  <Button @click="toggle">打开 Dialog</Button>
  <Dialog :visible="visible" />
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
    return { visible, toggle };
  },
};
</script>
<demo>支持 overlayClosable</demo>

<template>
  <div>
    <co-button @click="toggle">打开对话框</co-button>
    <co-dialog v-model:visible="visible" :overlayClosable="false">
      <div>默认 overlayClosable 是开启的，可以手动关闭，点击遮罩层不会关闭对话框。</div>
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
    return {
      toggle,
      visible,
    };
  },
};
</script>

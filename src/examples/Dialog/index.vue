<template>
  <h1>Dialog 文档</h1>
  <Demo :component="DialogDefaultDemo" />
  <Demo :component="DialogOverlayClosableDemo" />
  <Demo :component="DialogConfirmCancelDemo" />
  <Demo :component="DialogOpenDialogDemo" />
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import DialogDefaultDemo from './Dialog.default.demo.vue';
import DialogOverlayClosableDemo from './Dialog.overlayClosable.demo.vue';
import DialogConfirmCancelDemo from './Dialog.confirm-cancel.demo.vue';
import DialogOpenDialogDemo from './Dialog.openDialog.demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      DialogDefaultDemo,
      DialogOverlayClosableDemo,
      DialogConfirmCancelDemo,
      DialogOpenDialogDemo,
    };
  },
};
</script>

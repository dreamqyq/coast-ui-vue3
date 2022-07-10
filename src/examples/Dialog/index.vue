<template>
  <DemoList :components="components" title="Dialog 文档" />
</template>

<script lang="ts" setup>
import DemoList from '../../components/Demo/DemoList.vue';
import DialogDefaultDemo from './Dialog.default.demo.vue';
import DialogOverlayClosableDemo from './Dialog.overlayClosable.demo.vue';
import DialogConfirmCancelDemo from './Dialog.confirm-cancel.demo.vue';
import DialogOpenDialogDemo from './Dialog.openDialog.demo.vue';

const components = [
  DialogDefaultDemo,
  DialogOverlayClosableDemo,
  DialogConfirmCancelDemo,
  DialogOpenDialogDemo,
];
</script>

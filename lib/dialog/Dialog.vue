<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="coast-dialog-overlay" @click="overlayClick"></div>
      <div class="coast-dialog-wrapper">
        <div class="coast-dialog">
          <header>
            {{ title }}
            <span class="coast-dialog-close" @click="onClose"></span>
          </header>
          <main>
            <slot />
          </main>
          <footer>
            <Button level="main" @click="onConfirm">确定</Button>
            <Button @click="onCancel">取消</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
export default { name: 'CoastDialog' };
</script>

<script lang="ts" setup>
import { PropType } from 'vue';
import Button from '../button/Button.vue';

const props = defineProps({
  title: {
    type: String,
    default: '提示',
  },
  visible: {
    required: true,
    type: Boolean,
  },
  overlayClosable: {
    type: Boolean,
    default: true,
    required: false,
  },
  confirm: {
    type: Function as PropType<() => unknown>,
    required: false,
  },
  cancel: {
    type: Function as PropType<() => unknown>,
    required: false,
  },
});
const emits = defineEmits(['update:visible']);
const onClose = () => {
  emits('update:visible', false);
};
const overlayClick = () => {
  if (props.overlayClosable) {
    onClose();
  }
};
const onConfirm = () => {
  if (props.confirm?.() !== false) {
    onClose();
  }
};
const onCancel = () => {
  if (props.cancel?.() !== false) {
    onClose();
  }
};
</script>

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
import { defineComponent } from 'vue';
import Button from '../button/Button.vue';

interface DialogProps {
  title?: string;
  visible: boolean;
  overlayClosable?: boolean;
  confirm?: () => unknown;
  cancel?: () => unknown;
}

export default defineComponent({
  name: 'CoastDialog',
  components: { Button },
  props: {
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
      type: Function,
      required: false,
    },
    cancel: {
      type: Function,
      required: false,
    },
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const onClose = () => {
      emit('update:visible', false);
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
    return {
      onClose,
      overlayClick,
      onConfirm,
      onCancel,
    };
  },
});
</script>

<style lang="scss">
@import '../style/common.scss';

.coast-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: $popoverIndex;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: $popoverIndex;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $borderColorGray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $borderColorGray;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>

<template>
  <div v-show="visible" :class="classes" @mouseenter="clearTimer" @mouseleave="startTimer">
    <span>{{ text }}</span>
    <Icon name="clear" v-if="showClose" class="coast-toast-close" @click="handleClose" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import type { ToastType } from './toast.d';
import type { PropType } from 'vue';
import Icon from '../icon/Icon.vue';

export default defineComponent({
  name: 'CoastToast',
  components: { Icon },
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String as PropType<ToastType>,
      required: false,
      default: 'normal',
      validator: (val: string) =>
        ['normal', 'secondary', 'success', 'warning', 'error'].includes(val),
    },
    delay: {
      type: Number,
      required: false,
      default: 3,
    },
    center: {
      type: Boolean,
      required: false,
      default: false,
    },
    showClose: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['destroy'],
  setup(props, { emit }) {
    const visible = ref(false);
    const timer = ref(null);

    const classes = computed(() => [
      'coast-toast',
      {
        'coast-toast-center': props.center,
        [`coast-toast-${props.type}`]: props.type,
      },
    ]);

    onMounted(() => {
      visible.value = true;
      startTimer();
    });

    const handleClose = () => {
      visible.value = false;
      emit('destroy');
    };
    const startTimer = () => {
      if (props.delay > 0) {
        timer.value = setTimeout(() => {
          handleClose();
        }, props.delay * 1000);
      }
    };

    const clearTimer = () => {
      clearTimeout(timer.value);
      timer.value = null;
    };

    return { visible, classes, handleClose, startTimer, clearTimer };
  },
});
</script>

<style lang="scss" scoped>
$toast-index: 100;
$success: #0070f3;
$error: #f01217;
$warning: #f5a623;
$secondary: #5b5b5b;

.coast-toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  min-width: 380px;
  border-radius: 5px;
  background: #fff;
  color: #000;
  z-index: $toast-index;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  padding: 15px;

  > .coast-toast-close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    color: #c0c4cc;
    font-size: 20px;
    &:hover {
      color: #909399;
    }
  }

  &-center {
    text-align: center;
  }

  &-secondary {
    background-color: $secondary;
    color: #fff;
  }
  &-success {
    background-color: $success;
    color: #fff;
  }
  &-warning {
    background-color: $warning;
    color: #fff;
  }
  &-error {
    background-color: $error;
    color: #fff;
  }
}
</style>

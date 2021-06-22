<template>
  <div v-show="visible" :class="classes">{{ text }}</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import type { ToastType } from './toast.d';

export default defineComponent({
  name: 'CoastToast',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String as ToastType,
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

    const classes = computed(() => ['coast-toast', { 'coast-toast-center': props.center }]);

    onMounted(() => {
      visible.value = true;
      startTimer();
    });

    const handleClose = () => {
      visible.value = false;
      emit('destroy');
    };
    const startTimer = () => {
      setTimeout(() => {
        handleClose();
      }, props.delay * 1000);
    };

    return { visible, classes };
  },
});
</script>

<style lang="scss" scoped>
$toast-index: 100;
.coast-toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  min-width: 380px;

  background: #fff;
  color: #000;
  z-index: $toast-index;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  padding: 10px;

  &-center {
    text-align: center;
  }
}
</style>

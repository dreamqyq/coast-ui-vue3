<template>
  <div
    v-show="visible"
    :class="classes"
    :style="{ top: `${top}px` }"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <span>{{ text }}</span>
    <Icon v-if="showClose" class="coast-toast-close" name="clear" @click="handleClose" />
  </div>
</template>

<script lang="ts">
export default { name: 'CoastToast' };
</script>

<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, onMounted, ref } from 'vue';
import type { ToastType } from './toast.d';
import Icon from '../icon/Icon.vue';

const props = defineProps({
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
  id: {
    type: String,
    required: false,
    default: '',
  },
  top: {
    type: Number,
    default: 10,
    required: false,
  },
});
const emits = defineEmits(['destroy']);
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
  emits('destroy');
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
</script>

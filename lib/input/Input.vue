<template>
  <div
    :class="{ [`coast-input-wrapper-size-${size}`]: size }"
    :style="`width:${width}`"
    class="coast-input-wrapper"
  >
    <span v-if="label" class="coast-label left">{{ label }}</span>
    <input
      ref="inputRef"
      v-bind="$attrs"
      :class="classes"
      :disabled="disabled"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :readonly="readonly"
      :type="type === 'password' ? (passwordVisible ? 'text' : 'password') : type"
      :value="value"
      class="coast-input"
      @blur="onBlur"
      @change="onChange"
      @focus="onFocus"
      @input="onInput"
      @keydown="onKeydown"
    />
    <Icon
      v-if="clearable"
      :style="`transform: translateX(${actionIconTransform}px)`"
      class="coast-input-action"
      name="clear"
      @click="onClear"
    />
    <Icon
      v-if="type === 'password'"
      :name="passwordVisible ? 'hide' : 'show'"
      :style="`transform: translateX(${actionIconTransform + 24}px)`"
      class="coast-input-action"
      @click="onTogglePasswordVisible"
    />
    <span v-if="labelRight" ref="labelRightRef" class="coast-label right">{{ labelRight }}</span>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent, nextTick, ref } from 'vue';
import Icon from '../icon/Icon.vue';

type InputStatusType = PropType<'normal' | 'secondary' | 'error' | 'warning' | 'success'>;
type InputSizeType = PropType<'mini' | 'small' | 'medium' | 'large'>;
type InputElementEvent = Event & { target: HTMLInputElement };

export default defineComponent({
  name: 'CoastInput',
  components: { Icon },
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    clearable: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxlength: {
      type: Number,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    readonly: {
      type: Boolean,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    labelRight: {
      type: String,
      required: false,
    },
    status: {
      type: String as InputStatusType,
      required: false,
      default: 'normal',
      validator: (val: string) => {
        return ['normal', 'secondary', 'success', 'warning', 'error'].includes(val);
      },
    },
    size: {
      type: String as InputSizeType,
      required: false,
      default: 'medium',
      validator: (val: string) => {
        return ['mini', 'small', 'medium', 'large'].includes(val);
      },
    },
  },
  emits: ['update:value', 'input', 'change', 'blur', 'focus', 'keydown', 'clear'],
  setup(props, { emit }) {
    const labelRightRef = ref<HTMLSpanElement>(null);
    const inputRef = ref<HTMLInputElement>(null);
    const passwordVisible = ref(false);

    const classes = computed(() => ({
      'coast-input-label-left': props.label,
      'coast-input-label-right': props.labelRight,
      'coast-input-suffix-clear': props.clearable,
      'coast-input-suffix-password': props.type === 'password',
      [`coast-input-status-${props.status}`]: props.status,
    }));

    const actionIconTransform = computed(() => {
      const labelRightOffsetWidth = labelRightRef.value ? labelRightRef.value.offsetWidth : 0;
      const passwordIconOffsetWidth = props.type === 'password' ? 24 : 0;
      return -labelRightOffsetWidth - passwordIconOffsetWidth;
    });

    const focus = () => {
      nextTick(() => {
        inputRef.value.focus();
      });
    };

    const onClear = () => {
      emit('update:value', '');
      emit('change', '');
      emit('clear');
      focus();
    };

    const onTogglePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };

    const onInput = (event: InputElementEvent) => {
      emit('update:value', event.target.value);
      emit('input', event.target.value);
    };
    const onChange = (event: InputElementEvent) => {
      emit('change', event.target.value);
    };
    const onBlur = (event: InputElementEvent) => {
      emit('blur', event);
    };
    const onFocus = (event: InputElementEvent) => {
      emit('focus', event);
    };
    const onKeydown = (event: KeyboardEvent) => {
      emit('keydown', event);
    };

    return {
      classes,
      onClear,
      onInput,
      onChange,
      onBlur,
      onFocus,
      onKeydown,
      onTogglePasswordVisible,
      inputRef,
      labelRightRef,
      actionIconTransform,
      passwordVisible,
    };
  },
});
</script>

<style lang="scss">
@import '../theme-chalk/common.scss';

$fontSize: 14px;
$height: 36px;

.coast-input-wrapper {
  font-size: $fontSize;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  flex: 1 1 0%;
  user-select: none;
  margin: 4px;
  height: $height;
  position: relative;

  .coast-input-action {
    position: absolute;
    right: 10px;
    color: #999;
    font-size: 20px;
    cursor: pointer;
    height: 100%;

    &:hover {
      color: $colorBlack;
    }
  }

  .coast-label {
    width: auto;
    height: $height;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    padding: 0 8px;
    font-size: inherit;
    background-color: #fafafa;
    color: #888;
    border-top: 1px solid $borderColorGray;
    border-bottom: 1px solid $borderColorGray;

    &.left {
      border-left: 1px solid $borderColorGray;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &.right {
      border-right: 1px solid $borderColorGray;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  &.coast-input-wrapper-size-mini {
    font-size: 12px;
    height: 28px;
  }

  &.coast-input-wrapper-size-small {
    font-size: 12px;
    height: 32px;
  }

  &.coast-input-wrapper-size-large {
    font-size: 16px;
    height: 40px;
  }

  .coast-input {
    font-family: inherit;
    font-weight: 400;
    border-radius: 5px;
    font-size: inherit;
    padding: 4px 10px;
    background-color: transparent;
    outline: none;
    height: inherit;
    width: 100%;
    min-width: 0;
    color: $colorBlack;
    border: 1px solid $borderColorGray;
    transition: border 0.2s ease 0s, color 0.2s ease 0s;

    &.coast-input-suffix-clear,
    &.coast-input-suffix-password {
      padding-right: 35px;
    }

    &.coast-input-suffix-clear.coast-input-suffix-password {
      padding-right: 55px;
    }

    &.coast-input-status-secondary {
      border-color: $theme;

      &:focus {
        border-color: $colorGray;
      }
    }

    &.coast-input-status-warning {
      border-color: $warning;

      &:focus {
        border-color: darken($warning, 15%);
      }
    }

    &.coast-input-status-error {
      color: $error;
      border-color: $error;

      &:focus {
        border-color: darken($error, 15%);
      }
    }

    &.coast-input-status-success {
      border-color: $success;

      &:focus {
        border-color: darken($success, 15%);
      }
    }

    &.coast-input-label-left {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    &.coast-input-label-right {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &::selection {
      background-color: $selectionBGColor;
      color: $colorBlack;
    }

    &::-moz-selection {
      background: $selectionBGColor;
      color: $colorBlack;
    }

    &::placeholder {
      color: $placeholderColor;
    }

    &:focus {
      border-color: $borderColorFocus;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: $disabledBGColor;
      color: $disabledColor;
    }
  }
}
</style>

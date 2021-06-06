<template>
  <div
    class="coast-input-wrapper"
    :class="{ [`coast-input-wrapper-size-${size}`]: size }"
    :style="`width:${width}`"
  >
    <span class="coast-label left" v-if="label">{{ label }}</span>
    <input
      class="coast-input"
      v-bind="$attrs"
      :type="type"
      :maxlength="maxlength"
      :class="classes"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @keydown="onKeydown"
    />
    <span class="coast-label right" v-if="labelRight">{{ labelRight }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import type { PropType } from 'vue';

type InputStatusType = PropType<'normal' | 'secondary' | 'error' | 'warning' | 'success'>;
type InputSizeType = PropType<'mini' | 'small' | 'medium' | 'large'>;
type InputElementEvent = Event & { target: HTMLInputElement };

export default defineComponent({
  name: 'CoastInput',
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    type: {
      type: String,
      default: 'text',
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
    },
    size: {
      type: String as InputSizeType,
      required: false,
      default: 'medium',
    },
  },
  emits: ['update:value', 'input', 'change', 'blur', 'focus', 'keydown'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      'coast-input-label-left': props.label,
      'coast-input-label-right': props.labelRight,
      [`coast-input-status-${props.status}`]: props.status,
    }));

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
    const onKeydown = (event: InputElementEvent) => {
      emit('keydown', event);
    };
    return { classes, onInput, onChange, onBlur, onFocus, onKeydown };
  },
});
</script>

<style lang="scss">
$height: 36px;
$color: #000;
$borderColor: #eaeaea;
$borderFocusColor: #666667;
$selectionBGColor: #6affe0;
$fontSize: 14px;
$disabledBGColor: #fafafa;
$disabledColor: #eaeaea;

.coast-input-wrapper {
  font-size: $fontSize;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  flex: 1 1 0%;
  user-select: none;
  margin: 4px;
  height: $height;

  .coast-label {
    height: $height;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    padding: 0 8px;
    font-size: inherit;
    background-color: #fafafa;
    color: #888;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;

    &.left {
      border-left: 1px solid #eaeaea;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &.right {
      border-right: 1px solid #eaeaea;
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
    border: 1px solid;
    transition: border 0.2s ease 0s, color 0.2s ease 0s;
    font-size: inherit;
    padding: 4px 10px;
    background-color: transparent;
    outline: none;
    height: inherit;
    width: 100%;
    min-width: 0;
    color: $color;
    border-color: $borderColor;

    &.coast-input-status-secondary {
      border-color: #000;
      &:focus {
        border-color: #666;
      }
    }
    &.coast-input-status-warning {
      border-color: #f7b955;
      &:focus {
        border-color: #f5a623;
      }
    }
    &.coast-input-status-error {
      color: #e00;
      border-color: #e00;
      &:focus {
        border-color: #c50000;
      }
    }
    &.coast-input-status-success {
      border-color: #3291ff;
      &:focus {
        border-color: #0070f3;
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
      color: $color;
    }

    &::-moz-selection {
      background: $selectionBGColor;
      color: $color;
    }

    &::placeholder {
      color: #757575;
    }

    &:focus {
      border-color: $borderFocusColor;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: $disabledBGColor;
      color: $disabledColor;
    }
  }
}
</style>

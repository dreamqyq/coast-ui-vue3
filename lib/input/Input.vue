<template>
  <div class="coast-input-wrapper" :style="`width:${width}`">
    <span class="coast-label left" v-if="label">{{ label }}</span>
    <input
      type="text"
      class="coast-input"
      :class="{ 'coast-input-label-left': label, 'coast-input-label-right': labelRight }"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    />
    <span class="coast-label right" v-if="labelRight">{{ labelRight }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoastInput',
  props: {
    value: {
      type: [String, Number],
      required: true,
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
  },
  setup() {},
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

  .coast-input {
    font-family: inherit;
    height: $height;
    font-weight: 400;
    border-radius: 5px;
    border: 1px solid $borderColor;
    transition: border 0.2s ease 0s, color 0.2s ease 0s;
    font-size: inherit;
    padding: 4px 10px;
    background-color: transparent;
    color: $color;
    outline: none;
    width: 100%;
    min-width: 0;

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

<template>
  <div class="coast-input-wrapper">
    <input type="text" class="coast-input" :placeholder="placeholder" :disabled="disabled" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoastInput',
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
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
$boderHoverColor: #666;
$fontSize: 14px;

.coast-input-wrapper {
  font-size: $fontSize;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  flex: 1 1 0%;
  user-select: none;
  margin: 4px;

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

    &::placeholder {
      color: #757575;
    }

    &:focus {
      border-color: $borderFocusColor;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: rgb(250, 250, 250);
      color: rgb(234, 234, 234);
    }
  }
}
</style>
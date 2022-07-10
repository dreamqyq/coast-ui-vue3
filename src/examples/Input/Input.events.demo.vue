<demo>
  <title>Input events</title>
  <desc>事件包含: input, change, focus, blur, keydown</desc>
</demo>

<template>
  <co-input
    v-model:value="value"
    placeholder="please input content"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeydown"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';
type InputElementEvent = Event & { target: HTMLInputElement };
const value = ref('');
const handleInput = (value: string) => {
  console.log('input event', value);
};
const handleChange = (value: string) => {
  console.log('change event', value);
};
const handleBlur = (event: InputElementEvent) => {
  console.log('blur event', event);
};
const handleFocus = (event: InputElementEvent) => {
  console.log('focus event', event);
};
const handleKeydown = (event: KeyboardEvent) => {
  console.log('keydown event', event);
};
</script>

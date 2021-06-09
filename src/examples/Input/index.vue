<template>
  <div>
    <h1>Input 文档</h1>
    <Demo :component="InputDefaultDemo" />
    <Demo :component="InputUnwriteableDemo" />
    <Demo :component="InputClearableDemo" />
    <Demo :component="InputPasswordDemo" />
    <Demo :component="InputMaxlengthDemo" />
    <Demo :component="InputSizeDemo" />
    <Demo :component="InputStatusDemo" />
    <Demo :component="InputWidthDemo" />
    <Demo :component="InputLabelDemo" />
    <Demo :component="InputVmodelDemo" />
    <Demo :component="InputEventsDemo" />
  </div>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import InputClearableDemo from './Input.clearable.demo.vue';
import InputDefaultDemo from './Input.default.demo.vue';
import InputEventsDemo from './Input.events.demo.vue';
import InputLabelDemo from './Input.label.demo.vue';
import InputMaxlengthDemo from './Input.maxlength.demo.vue';
import InputPasswordDemo from './Input.password.demo.vue';
import InputSizeDemo from './Input.size.demo.vue';
import InputStatusDemo from './Input.status.demo.vue';
import InputUnwriteableDemo from './Input.unwriteable.demo.vue';
import InputVmodelDemo from './Input.vmodel.demo.vue';
import InputWidthDemo from './Input.width.demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      InputClearableDemo,
      InputDefaultDemo,
      InputEventsDemo,
      InputLabelDemo,
      InputMaxlengthDemo,
      InputPasswordDemo,
      InputSizeDemo,
      InputStatusDemo,
      InputUnwriteableDemo,
      InputVmodelDemo,
      InputWidthDemo,
    };
  },
};
</script>

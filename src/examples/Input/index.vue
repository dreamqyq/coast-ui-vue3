<template>
  <DemoList :components="components" title="Input 文档" />
</template>

<script lang="ts">
import DemoList from '../../components/Demo/DemoList.vue';
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
  components: { DemoList },
  setup() {
    return {
      components: [
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
      ],
    };
  },
};
</script>

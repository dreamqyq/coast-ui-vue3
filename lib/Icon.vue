<template>
  <svg class="coast-icon" aria-hidden="true">
    <use :xlink:href="`#coast-icon-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import './iconfont';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoastIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

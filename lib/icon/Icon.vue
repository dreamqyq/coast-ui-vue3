<template>
  <svg class="coast-icon" aria-hidden="true">
    <use :xlink:href="`#${prefix}${name}`"></use>
  </svg>
</template>

<script lang="ts">
import '../theme-chalk/iconfont';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoastIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: false,
      default: 'coast-icon-',
    },
  },
  setup() {},
});
</script>

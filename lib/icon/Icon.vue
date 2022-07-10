<template>
  <svg aria-hidden="true" class="coast-icon">
    <use :xlink:href="`#${prefix}${name}`"></use>
  </svg>
</template>

<script lang="ts">
export default { name: 'CoastIcon' };
</script>

<script lang="ts" setup>
import '../style/iconfont';

defineProps({
  name: {
    type: String,
    required: true,
  },
  prefix: {
    type: String,
    required: false,
    default: 'coast-icon-',
  },
});
</script>

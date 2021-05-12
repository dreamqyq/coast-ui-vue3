<demo>Footer slot</demo>

<template>
  <div class="wrap">
    <co-card title="支持 footer" hoverable shadow>
      card content
      <template #footer>card footer</template>
    </co-card>
    <co-card title="支持 footer" type="dark">
      card content
      <template #footer>card footer</template>
    </co-card>
  </div>
</template>

<script lang="ts">
import { CoCard } from 'coast-ui-vue3';

export default {
  components: {
    CoCard,
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;

  .coast-card {
    width: 40%;
    margin-left: 5%;
  }
}
</style>

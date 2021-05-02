<template>
  <div class="coast-card">
    <h2 class="coast-card-title">{{ title }}</h2>
    <main class="coast-card-content">
      <slot name="content" />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoastCard',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss">
$border-color: #eaeaea;
.coast-card {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  width: 100%;
  transition: all 0.25s;
  border-radius: 5px;

  &-title {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
}
</style>

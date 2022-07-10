<demo>支持不同的 Type</demo>

<template>
  <div class="wrap">
    <template v-for="cardType in types" :key="cardType">
      <co-card :title="cardType" :type="cardType">{{ cardType }} card</co-card>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { CoCard } from 'coast-ui-vue3';
const types = [
  'secondary',
  'alert',
  'success',
  'purple',
  'warning',
  'violet',
  'error',
  'cyan',
  'dark',
  'lite',
];
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  .coast-card {
    width: 40%;
    margin-left: 5%;
    margin-top: 16px;
  }
}
</style>

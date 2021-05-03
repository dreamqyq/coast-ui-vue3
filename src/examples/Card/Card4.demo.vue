<demo>支持不同的 Type</demo>

<template>
  <div class="wrap">
    <template v-for="type in types">
      <Card :title="type" :type="type">
        <template v-slot:content> {{ type }} card </template>
      </Card>
    </template>
  </div>
</template>

<script lang="ts">
import { Card } from '../../lib/index';

export default {
  components: {
    Card,
  },
  setup() {
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

    return {
      types,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  .coast-card {
    width: 40%;
    margin-left: 5%;
  }
}
</style>

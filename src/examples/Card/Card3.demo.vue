<demo>Shadow 效果</demo>

<template>
  <div>
    <Card title="Card 支持 shadow 效果" hoverable shadow>
      <template v-slot:content> shadow card </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { Card } from '../../lib/index';

export default {
  components: {
    Card,
  },
};
</script>

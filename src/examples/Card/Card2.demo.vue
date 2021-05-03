<demo>Hover 效果</demo>

<template>
  <div>
    <Card title="Card 支持 hover 效果" hoverable>
      <template v-slot:content> hoverable card </template>
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

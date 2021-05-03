<demo>常规使用</demo>

<template>
  <div>
    <Card title="Card 基本用法">
      <template v-slot:content> Card 内容 </template>
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

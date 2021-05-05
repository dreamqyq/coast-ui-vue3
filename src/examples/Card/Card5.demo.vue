<demo>Footer slot</demo>

<template>
  <div class="wrap">
    <Card title="Card 支持 footer" hoverable shadow>
      card content
      <template v-slot:footer>card footer</template>
    </Card>
    <Card title="Card 支持 footer" type="dark">
      card content
      <template v-slot:footer>card footer</template>
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

<style lang="scss" scoped>
.wrap {
  display: flex;

  .coast-card {
    width: 40%;
    margin-left: 5%;
  }
}
</style>

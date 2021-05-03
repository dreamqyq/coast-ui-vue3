<template>
  <div>
    <h1>Card 文档</h1>
    <Demo :component="CardDemo1" />
    <Demo :component="CardDemo2" />
  </div>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import CardDemo1 from './Card1.demo.vue';
import CardDemo2 from './Card2.demo.vue';
export default {
  components: { Demo },
  setup() {
    return {
      CardDemo1,
      CardDemo2,
    };
  },
};
</script>

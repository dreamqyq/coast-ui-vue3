<template>
  <div>
    <h1>co-card 文档</h1>
    <Demo :component="CardDemo1" />
    <Demo :component="CardDemo2" />
    <Demo :component="CardDemo3" />
    <Demo :component="CardDemo4" />
    <Demo :component="CardDemo5" />
  </div>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import CardDemo1 from './Card1.demo.vue';
import CardDemo2 from './Card2.demo.vue';
import CardDemo3 from './Card3.demo.vue';
import CardDemo4 from './Card4.demo.vue';
import CardDemo5 from './Card5.demo.vue';
export default {
  components: { Demo },
  setup() {
    return {
      CardDemo1,
      CardDemo2,
      CardDemo3,
      CardDemo4,
      CardDemo5,
    };
  },
};
</script>

<template>
  <div>
    <h1>Card 文档</h1>
    <Demo :component="CardDefaultDemo" />
    <Demo :component="CardHoverableDemo" />
    <Demo :component="CardShadowDemo" />
    <Demo :component="CardTypeDemo" />
    <Demo :component="CardSlotDemo" />
  </div>
</template>

<script lang="ts">
import Demo from '../../components/Demo.vue';
import CardDefaultDemo from './Card.default.demo.vue';
import CardHoverableDemo from './Card.hoverable.demo.vue';
import CardShadowDemo from './Card.shadow.demo.vue';
import CardTypeDemo from './Card.type.demo.vue';
import CardSlotDemo from './Card.slot.demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      CardDefaultDemo,
      CardHoverableDemo,
      CardShadowDemo,
      CardTypeDemo,
      CardSlotDemo,
    };
  },
};
</script>

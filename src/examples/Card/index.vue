<template>
  <DemoList :components="components" title="Card 文档" />
</template>

<script lang="ts" setup>
import DemoList from '../../components/Demo/DemoList.vue';
import CardDefaultDemo from './Card.default.demo.vue';
import CardHoverableDemo from './Card.hoverable.demo.vue';
import CardShadowDemo from './Card.shadow.demo.vue';
import CardTypeDemo from './Card.type.demo.vue';
import CardSlotDemo from './Card.slot.demo.vue';

const components = [CardDefaultDemo, CardHoverableDemo, CardShadowDemo, CardTypeDemo, CardSlotDemo];
</script>

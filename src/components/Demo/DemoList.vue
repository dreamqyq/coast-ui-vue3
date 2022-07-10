<template>
  <div>
    <h1>{{ title }}</h1>
    <DemoItem v-for="(component, index) in components" :key="index" :component="component" />
  </div>
</template>

<script lang="ts">
import DemoItem from './DemoItem.vue';

export default {
  name: 'DemoList',
  components: { DemoItem },
  props: {
    components: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true
    }
  },
};
</script>

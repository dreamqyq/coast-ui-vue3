<template>
  <div>
    <h1>Button 文档</h1>
    <Demo :component="ButtonDemo1" />
    <Demo :component="ButtonDemo2" />
    <Demo :component="ButtonDemo3" />
    <Demo :component="ButtonDemo4" />
    <Demo :component="ButtonDemo5" />
  </div>
</template>

<script lang="ts">
import Demo from '../components/Demo.vue';
import ButtonDemo1 from './Button1.demo.vue';
import ButtonDemo2 from './Button2.demo.vue';
import ButtonDemo3 from './Button3.demo.vue';
import ButtonDemo4 from './Button4.demo.vue';
import ButtonDemo5 from './Button5.demo.vue';

export default {
  components: { Demo },
  setup() {
    return {
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5,
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  margin: 20px 0;
}
</style>

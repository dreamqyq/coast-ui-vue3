<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>V3-Wheel</h1>
      <h2>一个基于 Vue3 和 TypeScript 的组件库</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnov.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
</style>
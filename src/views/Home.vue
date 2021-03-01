<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>V3-Wheel</h1>
      <h2>一个基于 Vue3 和 TypeScript 的组件库</h2>
      <p class="actions">
        <a href="https://github.com/dreamqyq" target="_blank">Github</a>
        <router-link to="/doc">开始</router-link>
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
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
<template>
  <div class="topnav-wrapper">
    <Topnav />
    <div class="banner">
      <h1>coast-ui for Vue3</h1>
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
$baseColor: #786ff8;
.topnav-wrapper {
  background: rgb(142, 134, 249);
  background: linear-gradient(
    90deg,
    rgba(142, 134, 249, 1) 0%,
    rgba(120, 111, 248, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}
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
      background: #aca8b6;
      color: #fff;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 12px;
    }
  }
}
</style>
<template>
  <div class="topnav-wrapper">
    <Topnav />
    <div class="banner">
      <h1>Coast UI for Vue3</h1>
      <h2>一个面向源码的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/dreamqyq" target="_blank">Github</a>
        <router-link to="/doc/introduce">开始</router-link>
      </p>
    </div>
  </div>
  <div class="content">
    <ul>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了最新的 Vue3 Composition API</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用了 TypeScript 编写</p>
      </li>
      <li>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
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
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(106, 83, 251, 1) 31%,
    rgba(109, 82, 251, 1) 63%,
    rgba(158, 70, 252, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  color: #fff;
}
.banner {
  padding: 100px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  > .actions {
    margin-top: 40px;
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
.content {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>
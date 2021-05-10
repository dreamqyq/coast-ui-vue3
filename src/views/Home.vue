<template>
  <div class="topNav-wrapper">
    <TopNav />
    <div class="banner">
      <h1>Coast UI for Vue3</h1>
      <h2>一个基于最新技术的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/dreamqyq" target="_blank">Github</a>
        <router-link to="/doc/introduce">开始</router-link>
      </p>
    </div>
  </div>
  <div class="content">
    <ul>
      <li>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用了最新的 Vue3 Composition API</p>
      </li>
      <li>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用了 TypeScript 编写</p>
      </li>
      <li>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
      <li>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-new"></use>
        </svg>
        <h3>技术新</h3>
        <p>使用当前最新的技术栈</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: { TopNav },
};
</script>
<style lang="scss" scoped>
$baseColor: #786ff8;
.topNav-wrapper {
  background: rgb(0, 156, 240);
  background: linear-gradient(
    90deg,
    rgba(0, 156, 240, 1) 0%,
    rgba(82, 199, 231, 1) 48%,
    rgba(0, 212, 255, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
  color: #fff;

  .topNav {
    background: transparent;
    border-bottom: none;
    box-shadow: none;
  }
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
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        'icon title'
        'icon text';
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

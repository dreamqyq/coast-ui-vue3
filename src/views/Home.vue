<template>
  <div class="topNav-wrapper">
    <TopNav isHome />
    <div class="banner">
      <h1>Coast UI for Vue3</h1>
      <h2>一款面向未来的 UI 框架</h2>
      <p class="actions">
        <router-link to="/doc/introduce">
          <co-button>
            开始
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-start"></use>
            </svg>
          </co-button>
        </router-link>
        <a href="https://github.com/dreamqyq/coast-ui-vue3" target="_blank">
          <co-button>
            Github
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-github"></use>
            </svg>
          </co-button>
        </a>
      </p>
    </div>
  </div>
  <div class="content">
    <ul>
      <li>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>Vue 3</h3>
        <p>使用了最新的 Vue3 Composition API</p>
      </li>
      <li>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>TypeScript</h3>
        <p>源代码采用了 TypeScript 编写</p>
      </li>
      <li>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-lightning"></use>
        </svg>
        <h3>Vite</h3>
        <p>官网基于 Vite2.x 构建</p>
      </li>
      <li>
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>文档完整</h3>
        <p>所有组件拥有完整的使用文档及示例</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { CoButton } from 'coast-ui-vue3';
import TopNav from '../components/TopNav.vue';

export default {
  components: { TopNav, CoButton },
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
    display: flex;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      margin-right: 16px;
    }
    .icon {
      font-size: 24px;
      margin-left: 4px;
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

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
            <co-icon name="start" prefix="icon-" class="icon" />
          </co-button>
        </router-link>
        <a href="https://github.com/dreamqyq/coast-ui-vue3" target="_blank">
          <co-button>
            Github
            <co-icon name="github" prefix="icon-" class="icon" />
          </co-button>
        </a>
      </p>
    </div>
  </div>
  <div class="content">
    <ul>
      <li v-for="item in contentList" :key="item.title">
        <co-icon :name="item.iconName" prefix="icon-" class="icon" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default { name: 'Home' };
</script>

<script lang="ts" setup>
import { CoButton, CoIcon } from 'coast-ui-vue3';
import TopNav from '../components/TopNav.vue';

const contentList = [
  {
    iconName: 'vue',
    title: 'Vue 3',
    description: '使用了最新的 Vue3 Composition API',
  },
  {
    iconName: 'ts',
    title: 'TypeScript',
    description: '源代码采用了 TypeScript 编写',
  },
  {
    iconName: 'lightning',
    title: 'Vite',
    description: '官网基于 Vite2.x 构建',
  },
  {
    iconName: 'light',
    title: '文档完整',
    description: '所有组件拥有完整的使用文档及示例',
  },
];
</script>
<style lang="scss" scoped>
$baseColor: #786ff8;
.topNav-wrapper {
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 1) 40%,
    rgba(255, 250, 250, 1) 60%,
    rgba(0, 0, 0, 1) 100%
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
      margin-left: 4px;
    }
  }
}

.content {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 500px) {
    width: 500px;
    > ul {
      > li {
        width: 100%;
      }
    }
  }
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
        width: 25%;
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

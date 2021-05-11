<template>
  <aside :class="{ visible }" @click="clickAsideNav">
    <h2>文档</h2>
    <ol>
      <li>
        <router-link to="/doc/introduce">介绍</router-link>
      </li>
      <li>
        <router-link to="/doc/install">安装</router-link>
      </li>
      <li>
        <router-link to="/doc/get-start">开始</router-link>
      </li>
    </ol>
    <h2>组件列表</h2>
    <ol>
      <li v-for="nav in demoViewList" :key="nav.title">
        <router-link :to="`/doc/${nav.path}`">{{ nav.title }} 组件</router-link>
      </li>
    </ol>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { demoViewList } from '../router/exampleDocsRouter';

export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['change'],
  setup(props, context) {
    const clickAsideNav = (e: MouseEvent) => {
      if ((<HTMLElement>e.target).tagName === 'A') {
        context.emit('change', false);
      }
    };
    return { demoViewList, clickAsideNav };
  },
});
</script>

<style lang="scss" scoped>
$asideIndex: 10;
aside {
  background: #fff;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $asideIndex;
  transition: all 0.25s;
  opacity: 0;
  transform: translateX(-100%);

  &.visible {
    transform: translateX(0);
    opacity: 1;
  }

  @media (min-width: 501px) {
    transform: translateX(0);
    opacity: 1;
  }

  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
  }

  > h2 {
    text-align: left;
    padding: 4px 1em;
  }

  > ol {
    li {
      text-align: left;
      margin: 4px 0;

      > a {
        display: block;
        padding: 8px 1.5em;
      }

      .router-link-active {
        background: #fff;
        color: #409eff;
        text-decoration: underline;
        font-weight: 600;
      }
    }
  }
}
</style>

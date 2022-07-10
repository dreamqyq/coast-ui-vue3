<demo>
  <title>常见页面布局</title>
  <desc>Layout：外层容器。当子元素中包含 Aside 时，全部子元素会水平左右排列，否则会垂直上下排列。Header：顶栏容器。Aside：侧边栏容器。Content：主要区域容器。Footer：底栏容器。</desc>
</demo>

<template>
  <co-layout>
    <co-header>Header</co-header>
    <co-content>Content</co-content>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-content>Content</co-content>
    <co-footer>Footer</co-footer>
  </co-layout>

  <co-layout>
    <co-aside width="200px">Aside</co-aside>
    <co-content>Content</co-content>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-layout>
      <co-aside width="200px">Aside</co-aside>
      <co-content>Content</co-content>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-header>Header</co-header>
    <co-layout>
      <co-aside width="200px">Aside</co-aside>
      <co-layout>
        <co-content>Content</co-content>
        <co-footer>Footer</co-footer>
      </co-layout>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-aside width="200px">Aside</co-aside>
    <co-layout>
      <co-header>Header</co-header>
      <co-content>Content</co-content>
    </co-layout>
  </co-layout>

  <co-layout>
    <co-aside width="100px">Aside</co-aside>
    <co-layout>
      <co-header height="70px">Header</co-header>
      <co-content>Content</co-content>
      <co-footer height="50px">Footer</co-footer>
    </co-layout>
  </co-layout>
</template>

<script lang="ts" setup>
import { CoAside, CoFooter, CoHeader, CoContent, CoLayout } from 'coast-ui-vue3';
</script>

<style lang="scss" scoped>
.demo-component > .coast-layout {
  margin-bottom: 40px;
  color: #fff;

  * {
    text-align: center;
  }

  &:last-child {
    margin-bottom: 0;
  }

  .coast-header,
  .coast-footer {
    background: #7dbcea;
    line-height: 60px;
  }
  .coast-content {
    background: #108ee9;
    line-height: 120px;
  }
  .coast-aside {
    background: #3ba0e9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

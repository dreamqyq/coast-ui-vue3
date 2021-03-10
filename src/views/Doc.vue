<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li><router-link to="/doc/switch">Switch 组件</router-link></li>
          <li><router-link to="/doc/button">Button 组件</router-link></li>
          <li><router-link to="/doc/dialog">Dialog 组件</router-link></li>
        </ol>
      </aside>
      <main><router-view /></main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnov.vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
  > h2 {
    padding: 4px 0;
  }
  > ol {
    li {
      padding: 4px 0;
    }
  }
}
main {
  overflow: auto;
}
</style>
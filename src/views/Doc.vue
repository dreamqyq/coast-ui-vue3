<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li><router-link to="/doc/switch">Switch 组件</router-link></li>
          <li><router-link to="/doc/button">Button 组件</router-link></li>
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
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
  > h2 {
    margin-top: 4px;
  }
  > ol {
    li {
      padding: 4px 0;
    }
  }
}
</style>
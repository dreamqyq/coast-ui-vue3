<template>
  <nav class="topnav">
    <span class="toggleAsideBtn" @click="toggleAside"></span>
    <div class="logo">
      <router-link to="/">logo</router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>菜单2</li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>
<style lang="scss" scoped>
nav.topnav {
  background: #ddd;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  justify-content: center;
  align-content: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAsideBtn {
    display: none;
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  @media (max-width: 500px) {
    > .toggleAsideBtn {
      display: inline-block;
    }
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
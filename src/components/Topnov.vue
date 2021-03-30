<template>
  <nav class="topnav">
    <svg
      v-if="toggleAsideBtnVisible"
      class="icon toggleAsideBtn"
      @click="toggleAside"
      aria-hidden="true"
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
    <div class="logo">
      <router-link to="/">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-king"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc/introduce">文档</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleAsideBtnVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside, asideVisible };
  },
};
</script>
<style lang="scss" scoped>
nav.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
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
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      border-left: 12px solid;
      border-top: 10px solid;
      border-right: 12px solid;
      border-bottom: 10px solid;
      border-color: #2dacfd transparent transparent transparent;
    }
    &::after {
      content: "";
      position: absolute;
      border-left: 12px solid;
      border-top: 10px solid;
      border-right: 12px solid;
      border-bottom: 10px solid;
      border-color: white transparent transparent transparent;
      left: 0;
      top: -2px;
    }
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
<template>
  <nav class="topnav">
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
export default {};
</script>
<style lang="scss" scoped>
nav.topnav {
  background: #ddd;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
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
}
</style>
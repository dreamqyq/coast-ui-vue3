<template>
  <div>
    <nav class="topnav">
      <div class="logo">logo</div>
      <div class="menu">
        <ul>
          <li>菜单1</li>
          <li>菜单2</li>
        </ul>
      </div>
    </nav>
    <div class="banner">
      <h1>V3-Wheel</h1>
      <h2>一个基于 Vue3 和 TypeScript 的组件库</h2>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
nav.topnav {
  background: pink;
  display: flex;
  padding: 16px;
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
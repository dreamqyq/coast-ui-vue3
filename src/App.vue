<template>
  <div>
    导航栏 |
    <router-link to="/">First</router-link> |
    <router-link to="/2">Second</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

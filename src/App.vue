<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <hr />
  <div>
    导航栏 |
    <router-link to="/">First</router-link> |
    <router-link to="/2">Second</router-link>
  </div>
  <router-view />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

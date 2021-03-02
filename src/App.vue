<template>
  <router-view />
</template>

<script lang="ts">
import { inject, provide, ref } from "vue";
import router from "./router";
export default {
  name: "App",
  setup() {
    const clientWidth = document.documentElement.clientWidth;
    const asideVisible = ref(clientWidth > 500);
    provide("asideVisible", asideVisible);
    router.beforeEach(() => {
      if (clientWidth <= 500) {
        asideVisible.value = false;
      }
    });
  },
};
</script>

<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const clientWidth = document.documentElement.clientWidth;
    const asideVisible = ref(clientWidth > 500);
    provide("asideVisible", asideVisible);
  },
};
</script>

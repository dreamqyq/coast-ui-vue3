<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script lang="js">
import md from "../markdown/Introduce.md";
export default {
  data(){
    return{
      md
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  text-align: left;
}
</style>
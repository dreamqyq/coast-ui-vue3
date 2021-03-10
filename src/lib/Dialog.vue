<template>
  <div class="v3wheel-dialog-mask"></div>
  <div class="v3wheel-dialog-wrapper">
    <header>标题</header>
    <main>
      <p>第一段话</p>
      <p>第二段话</p>
    </main>
    <footer>
      <Button>确定</Button>
      <Button>取消</Button>
    </footer>
  </div>
</template>

<script lang="ts">
import Button from "./Button.vue";
export default {
  components: { Button },
};
</script>
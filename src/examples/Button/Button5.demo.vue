<demo>支持 loading</demo>

<template>
  <div>
    <div>
      <co-button level="main" loading>加载中</co-button>
      <co-button level="danger" loading>加载中</co-button>
      <co-button level="warning" loading>警告按钮</co-button>
      <co-button loading>加载中</co-button>
      <co-button>加载完毕</co-button>
    </div>
  </div>
</template>

<script lang="ts">
import { CoButton } from 'coast-ui-vue3';

export default {
  components: {
    CoButton,
  },
};
</script>

<style lang="scss" scoped>
.coast-button {
  margin-top: 14px;
}
</style>

<demo>支持 loading</demo>

<template>
  <div>
    <div>
      <co-button level="main" loading>加载中</co-button>
      <co-button level="danger" loading>加载中</co-button>
      <co-button level="warning" loading>警告按钮</co-button>
      <co-button loading>加载中</co-button>
      <co-button :loading="loading" @click="handleClick">{{ msg }}</co-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CoButton } from 'coast-ui-vue3';
import { ref } from 'vue';

const msg = ref('点我开始加载');
const loading = ref(false);

const handleClick = () => {
  loading.value = true;
  msg.value = '加载中';
};
</script>

<style lang="scss" scoped>
.coast-button {
  margin-top: 14px;
}
</style>

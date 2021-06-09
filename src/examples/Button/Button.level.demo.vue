<demo>支持 level</demo>

<template>
  <div>
    <div>
      <co-button level="main">主要按钮</co-button>
      <co-button>普通按钮</co-button>
      <co-button level="warning">警告按钮</co-button>
      <co-button level="danger">危险按钮</co-button>
    </div>
    <div>
      <co-button level="main" theme="link">主要链接按钮</co-button>
      <co-button theme="link">普通链接按钮</co-button>
      <co-button level="warning" theme="link">警告按钮</co-button>
      <co-button level="danger" theme="link">危险链接按钮</co-button>
    </div>
    <div>
      <co-button level="main" theme="text">主要文字按钮</co-button>
      <co-button theme="text">普通文字按钮</co-button>
      <co-button level="warning" theme="text">警告按钮</co-button>
      <co-button level="danger" theme="text">危险文字按钮</co-button>
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

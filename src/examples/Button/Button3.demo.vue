<demo>支持 level</demo>

<template>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="warning">警告按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button level="main" theme="link">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button level="warning" theme="link">警告按钮</Button>
      <Button level="danger" theme="link">危险链接按钮</Button>
    </div>
    <div>
      <Button level="main" theme="text">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button level="warning" theme="text">警告按钮</Button>
      <Button level="danger" theme="text">危险文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from '../../lib/index';

export default {
  components: {
    Button,
  },
};
</script>

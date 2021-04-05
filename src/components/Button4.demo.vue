<demo>支持 disabled</demo>

<template>
  <div>
    <div>
      <Button>禁用按钮</Button>
      <Button disabled theme="link">禁用链接按钮</Button>
      <Button disabled theme="text">禁用文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from '../lib/index'
export default {
  components: {
    Button
  }
}
</script>

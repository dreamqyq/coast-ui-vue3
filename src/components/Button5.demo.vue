<demo>支持 loading</demo>

<template>
  <div>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
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

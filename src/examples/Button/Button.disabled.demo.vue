<demo>支持 disabled</demo>

<template>
  <div>
    <div>
      <co-button disabled>禁用按钮</co-button>
      <co-button disabled theme="link">禁用链接按钮</co-button>
      <co-button disabled theme="text">禁用文字按钮</co-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CoButton } from 'coast-ui-vue3';
</script>

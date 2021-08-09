<demo>
  <title>常规用法</title>
  <desc>支持不同的激活方式，包含 hover, click, focus</desc>
</demo>

<template>
  <co-popover trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <co-button>hover 激活</co-button>
  </co-popover>
  <co-popover trigger="click">
    <co-button>click 激活</co-button>
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
  </co-popover>
  <co-popover trigger="focus">
    <co-button>focus 激活</co-button>
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
  </co-popover>
</template>

<script lang="ts">
import { CoButton, CoPopover } from 'coast-ui-vue3';

export default {
  components: { CoButton, CoPopover },
};
</script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
}
</style>
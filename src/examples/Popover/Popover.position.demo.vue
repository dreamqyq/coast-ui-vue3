<demo>
  <title>支持 position</title>
  <desc>包含四种不同的出现位置：top, left, right, bottom</desc>
</demo>

<template>
  <co-popover position="top" trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <co-button>上方弹出</co-button>
  </co-popover>
  <co-popover position="bottom" trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <co-button>下方弹出</co-button>
  </co-popover>
  <co-popover position="left" trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <co-button>左边弹出</co-button>
  </co-popover>
  <co-popover position="right" trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <co-button>右边弹出</co-button>
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

<template>
  <div class="v3wheel-tabs">
    <div class="v3wheel-tabs-nav">
      <div
        class="v3wheel-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
      >
        {{ t }}
      </div>
    </div>
    <div class="v3wheel-tabs-content">
      <component v-for="(c, index) in defaults" :is="c" :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import TabsPanel from "./TabsPanel.vue";
export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TabsPanel) {
        throw new Error("Tabs 的子标签必须为 TabsPanel");
      }
    });
    const titles = defaults.map((tag) => tag.props.title);
    return { defaults, titles };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.v3wheel-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
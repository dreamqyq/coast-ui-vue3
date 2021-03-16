<template>
  <div class="v3wheel-tabs">
    <div class="v3wheel-tabs-nav">
      <div
        class="v3wheel-tabs-nav-item"
        v-for="(t, index) in titles"
        :class="{ selected: t === selected }"
        :key="index"
        @click="selectHandle(t)"
      >
        {{ t }}
      </div>
      <div class="v3wheel-tabs-nav-indicator"></div>
    </div>
    <div class="v3wheel-tabs-content">
      <component :is="current" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import TabsPanel from "./TabsPanel.vue";
export default {
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== TabsPanel) {
        throw new Error("Tabs 的子标签必须为 TabsPanel");
      }
    });
    const titles = defaults.map((tag) => tag.props.title);

    const current = computed(() => {
      return defaults.filter((tag) => tag.props.title === props.selected)[0];
    });

    const selectHandle = (title) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, selectHandle, current };
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
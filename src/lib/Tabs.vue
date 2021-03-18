<template>
  <div class="v3wheel-tabs">
    <div class="v3wheel-tabs-nav" ref="container">
      <div
        class="v3wheel-tabs-nav-item"
        v-for="(t, index) in titles"
        :class="{ selected: t === selected }"
        :key="index"
        :ref="
          (el) => {
            if (el) navItems[index] = el;
          }
        "
        @click="selectHandle(t)"
      >
        {{ t }}
      </div>
      <div class="v3wheel-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="v3wheel-tabs-content">
      <component :is="current" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";
import TabsPanel from "./TabsPanel.vue";
export default {
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLElement[]>([]);
    const indicator = ref<HTMLElement>(null);
    const container = ref<HTMLElement>(null);

    const calculateIndicatorStyle = () => {
      const divs = navItems.value;
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0];
      const { width, left: navItemLeft } = result.getBoundingClientRect();
      const { left: containerLeft } = container.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      indicator.value.style.left = navItemLeft - containerLeft + "px";
    };
    onMounted(calculateIndicatorStyle);
    onUpdated(calculateIndicatorStyle);

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
    return {
      defaults,
      titles,
      selectHandle,
      current,
      navItems,
      indicator,
      container,
    };
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
      transition: all 0.25s;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
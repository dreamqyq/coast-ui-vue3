<template>
  <div class="coast-tabs">
    <div class="coast-tabs-nav" ref="container">
      <div
        class="coast-tabs-nav-item"
        v-for="(t, index) in titles"
        :class="{ selected: t === selected }"
        :key="index"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="selectHandle(t)"
      >
        {{ t }}
      </div>
      <div class="coast-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="coast-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, watchEffect } from "vue";
import TabsPanel from "./TabsPanel.vue";
export default {
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLElement>(null);
    const indicator = ref<HTMLElement>(null);
    const container = ref<HTMLElement>(null);

    // https://v3.vuejs.org/guide/reactivity-computed-watchers.html#effect-flush-timing
    // fire after component updates so you can access the updated DOM
    watchEffect(
      () => {
        const {
          width,
          left: navItemLeft,
        } = selectedItem.value.getBoundingClientRect();
        const { left: containerLeft } = container.value.getBoundingClientRect();
        indicator.value.style.width = width + "px";
        indicator.value.style.left = navItemLeft - containerLeft + "px";
      },
      {
        // this will also defer the initial run of the effect until the
        // component's first render is finished.
        flush: "post",
      }
    );

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
      selectedItem,
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
.coast-tabs {
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
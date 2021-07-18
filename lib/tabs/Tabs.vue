<template>
  <div class="coast-tabs">
    <div ref="container" class="coast-tabs-nav">
      <div
        v-for="(t, index) in subElements"
        :key="index"
        :ref="
          el => {
            if (t.title === selected) selectedItem = el;
          }
        "
        :class="{ selected: t.title === selected, disabled: t.disabled }"
        class="coast-tabs-nav-item"
        @click="selectHandle(t)"
      >
        {{ t.title }}
      </div>
      <div ref="indicator" class="coast-tabs-nav-indicator"></div>
    </div>
    <div class="coast-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from 'vue';
import TabPanel from './TabPanel.vue';

export default defineComponent({
  name: 'CoastTabs',
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  emits: ['update:selected'],
  setup(props, context) {
    const selectedItem = ref<HTMLElement>(null);
    const indicator = ref<HTMLElement>(null);
    const container = ref<HTMLElement>(null);

    // https://v3.vuejs.org/guide/reactivity-computed-watchers.html#effect-flush-timing
    // fire after component updates so you can access the updated DOM
    watchEffect(
      () => {
        const { width, left: navItemLeft } = selectedItem.value.getBoundingClientRect();
        const { left: containerLeft } = container.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        indicator.value.style.left = navItemLeft - containerLeft + 'px';
      },
      {
        // this will also defer the initial run of the effect until the
        // component's first render is finished.
        flush: 'post',
      },
    );

    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== TabPanel) {
        throw new Error('CoTabs 的子标签必须为 CoTabPanel');
      }
    });
    const subElements = defaults.map(tag => ({
      title: tag.props.title,
      disabled: tag.props.disabled === true || tag.props.disabled === '',
    }));

    const current = computed(() => {
      return defaults.filter(tag => tag.props.title === props.selected)[0];
    });

    const selectHandle = ({ title, disabled }: { title: string; disabled: boolean }) => {
      if (disabled === undefined || disabled === true || title === props.selected) return;
      context.emit('update:selected', title);
    };
    return {
      defaults,
      subElements,
      selectHandle,
      current,
      selectedItem,
      indicator,
      container,
    };
  },
});
</script>

<style lang="scss">
@import '../style/common.scss';

.coast-tabs {
  &-nav {
    display: flex;
    color: $colorDark;
    border-bottom: 1px solid $borderColorGray;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      color: $colorGray;
      transition: all 0.25s;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $theme;
        font-weight: 500;
      }

      &.disabled {
        color: $disabledColor;
        cursor: not-allowed;
        user-select: none;
      }
    }

    &-indicator {
      position: absolute;
      height: 2px;
      background: $theme;
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

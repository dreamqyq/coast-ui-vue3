<template>
  <div ref="container" class="coast-tabs-nav">
    <div
      v-for="tab in subElements"
      class="coast-tabs-nav-item"
      :class="{ selected: tab.title === currentSelected, disabled: tab.disabled }"
      :ref="setSelectedElement"
      :key="tab.title"
      @click="handleClick(tab)"
    >
      {{ tab.title }}
    </div>
    <div ref="indicator" class="coast-tabs-nav-indicator"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, Ref, ref, watchEffect } from 'vue';
import { TabPanelProps, UpdateSelectedFnType } from './tabs';

export default defineComponent({
  name: 'CoastTabNav',
  props: {
    subElements: {
      type: Array,
      required: true,
    },
  },
  setup() {
    const currentSelected = inject<Ref<string>>('currentSelected');
    const updateCurrentSelected = inject<UpdateSelectedFnType>('updateCurrentSelected');

    const container = ref<HTMLElement>(null);
    const selectedItem = ref<HTMLElement>(null);
    const indicator = ref<HTMLElement>(null);

    // https://v3.vuejs.org/guide/reactivity-computed-watchers.html#effect-flush-timing
    // fire after component updates so you can access the updated DOM
    watchEffect(
      () => {
        if (selectedItem.value) {
          const { width, left: navItemLeft } = selectedItem.value.getBoundingClientRect();
          const { left: containerLeft } = container.value.getBoundingClientRect();
          indicator.value.style.width = width + 'px';
          indicator.value.style.transform = `translateX(${navItemLeft - containerLeft}px)`;
        }
      },
      {
        // this will also defer the initial run of the effect until the
        // component's first render is finished.
        flush: 'post',
      },
    );

    const setSelectedElement = (el: HTMLDivElement) => {
      const title = el.innerText;
      if (title === currentSelected.value) {
        selectedItem.value = el;
      }
    };
    const handleClick = (tab: TabPanelProps) => {
      const { disabled, title } = tab;
      if (disabled || title === currentSelected.value) return;
      updateCurrentSelected(tab.title);
    };

    return {
      container,
      currentSelected,
      indicator,
      handleClick,
      setSelectedElement,
    };
  },
});
</script>

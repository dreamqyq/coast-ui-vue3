<template>
  <div ref="container" class="coast-tabs-nav">
    <TabNavItem
      v-for="t in subElements"
      :key="t.title"
      :selected="selected"
      :title="t.title"
      :disabled="t.disabled"
      @change="handleClick"
      @getSelectedElement="getSelectedElement"
    />
    <div ref="indicator" class="coast-tabs-nav-indicator"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import TabNavItem from './TabNavItem.vue';

export default defineComponent({
  name: 'CoastTabNav',
  props: {
    subElements: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  components: { TabNavItem },
  emits: ['change'],
  setup(props, { emit }) {
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
    const getSelectedElement = (selectedElement: HTMLElement) => {
      selectedItem.value = selectedElement;
    };

    const handleClick = (title: string, selectedElement: HTMLElement) => {
      selectedItem.value = selectedElement;
      emit('change', title);
    };

    return {
      container,
      selectedItem,
      indicator,
      handleClick,
      getSelectedElement,
    };
  },
});
</script>

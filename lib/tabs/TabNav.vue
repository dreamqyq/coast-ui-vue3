<template>
  <div ref="container" class="coast-tab-nav">
    <div
      v-for="(t, index) in subElements"
      :key="index"
      :ref="
        el => {
          if (t.title === selected) selectedItem = el;
        }
      "
      :class="{ selected: t.title === selected, disabled: t.disabled }"
      class="coast-tab-nav-item"
      @click="handleClick(t)"
    >
      {{ t.title }}
    </div>
    <div ref="indicator" class="coast-tab-nav-indicator"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

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
  emits: ['change'],
  setup(props, { emit }) {
    const container = ref<HTMLElement>(null);
    const selectedItem = ref<HTMLElement>(null);
    const indicator = ref<HTMLElement>(null);

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

    const handleClick = (t: { title: string; disabled: boolean }) => {
      emit('change', t);
    };

    return {
      container,
      selectedItem,
      indicator,
      handleClick,
    };
  },
});
</script>

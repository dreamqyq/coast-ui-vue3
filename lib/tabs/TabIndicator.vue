<template>
  <div ref="indicator" class="coast-tabs-nav-indicator"></div>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  Ref,
  ref,
  watch,
} from 'vue';

export default defineComponent({
  name: 'CoastTabIndicator',
  setup() {
    const currentSelected = inject<Ref<string>>('currentSelected');
    const indicator = ref<HTMLElement>(null);
    const instance = getCurrentInstance();
    const parentContainer = ref<Element>(null);
    const containerLeft = ref(0);

    const setIndicatorStyle = () => {
      const selectedItem = Array.from(parentContainer.value.children).filter(item => {
        return Array.from(item.classList).find(c => c === 'selected');
      })[0];
      const navItemLeft = selectedItem.getBoundingClientRect().left;
      const width = selectedItem.getBoundingClientRect().width;
      indicator.value.style.width = width + 'px';
      indicator.value.style.transform = `translateX(${navItemLeft - containerLeft.value}px)`;
    };

    onMounted(() => {
      parentContainer.value = instance.parent.refs.container as Element;
      containerLeft.value = parentContainer.value.getBoundingClientRect().left;
      setIndicatorStyle();
    });

    watch(currentSelected, (a, b) => {
      nextTick(setIndicatorStyle);
    });

    return {
      indicator,
    };
  },
});
</script>

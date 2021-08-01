<template>
  <div class="coast-tabs-nav-indicator" :style="indicatorStyle" />
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
    const instance = getCurrentInstance();
    const parentContainer = ref<Element>(null);
    const containerLeft = ref(0);
    const indicatorStyle = ref({} as CSSStyleDeclaration);

    const setIndicatorStyle = () => {
      const selectedItem = Array.from(parentContainer.value.children).filter(item => {
        return Array.from(item.classList).find(c => c === 'selected');
      })[0];
      const navItemLeft = selectedItem.getBoundingClientRect().left;
      const width = selectedItem.getBoundingClientRect().width;
      indicatorStyle.value.width = width + 'px';
      indicatorStyle.value.transform = `translateX(${navItemLeft - containerLeft.value}px)`;
    };

    onMounted(() => {
      parentContainer.value = instance.parent.refs.container as Element;
      containerLeft.value = parentContainer.value.getBoundingClientRect().left;
      setIndicatorStyle();
    });

    watch(currentSelected, () => {
      nextTick(setIndicatorStyle);
    });

    return { indicatorStyle };
  },
});
</script>

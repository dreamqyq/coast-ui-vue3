<template>
  <div class="coast-tabs">
    <TabNav :subElements="subElements" @change="selectHandle" />
    <div class="coast-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import type { Ref } from 'vue';
import type { TabPanelProps, TabsProps, UpdateTabPanelFnType } from './tabs.d';

import { computed, defineComponent, provide, ref } from 'vue';
import TabNav from './TabNav.vue';

export default defineComponent({
  name: 'CoastTabs',
  props: {
    selected: {
      type: String,
      required: true,
    },
  },
  components: { TabNav },
  emits: ['update:selected'],
  setup(props: TabsProps, context) {
    const currentSelected = ref(props.selected);
    const tabPanelStateMap = ref<{ [key: number]: TabPanelProps }>({});
    provide<Ref<string>>('currentSelected', currentSelected);
    provide<UpdateTabPanelFnType>('updateTabPanelState', (state: TabPanelProps) => {
      tabPanelStateMap[state.uid] = state;
    });

    const defaults = context.slots.default();
    const subElements = defaults.map(tag => ({
      title: tag.props.title,
      disabled: tag.props.disabled === true || tag.props.disabled === '',
    }));

    const current = computed(() => {
      return defaults.filter(tag => tag.props.title === props.selected)[0];
    });

    const selectHandle = (title: string) => {
      currentSelected.value = title;
      context.emit('update:selected', title);
    };
    return {
      subElements,
      selectHandle,
      current,
    };
  },
});
</script>

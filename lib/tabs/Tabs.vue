<template>
  <div class="coast-tabs">
    <TabNav :subElements="subElements" />
    <div class="coast-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'CoastTabs' };
</script>

<script lang="ts" setup>
import { Ref, useSlots } from 'vue';
import type {
  TabPanelProps,
  TabsProps,
  UpdateSelectedFnType,
  UpdateTabPanelFnType,
} from './tabs.d';

import { computed, provide, ref } from 'vue';
import TabNav from './TabNav.vue';

const props = defineProps({
  selected: {
    type: String,
    required: true,
  },
});
const emits = defineEmits(['update:selected']);
const slots = useSlots();
const currentSelected = ref(props.selected);
const tabPanelStateMap = ref<{ [key: number]: TabPanelProps }>({});
provide<Ref<string>>('currentSelected', currentSelected);
provide<UpdateTabPanelFnType>('updateTabPanelState', (state: TabPanelProps) => {
  tabPanelStateMap.value[state.uid] = state;
});
provide<UpdateSelectedFnType>('updateCurrentSelected', (currentSelected: string) => {
  selectHandle(currentSelected);
});

const defaults = slots.default();
const subElements = defaults.map(tag => ({
  title: tag.props.title,
  disabled: tag.props.disabled === true || tag.props.disabled === '',
}));

const current = computed(() => {
  return defaults.filter(tag => tag.props.title === props.selected)[0];
});

const selectHandle = (title: string) => {
  currentSelected.value = title;
  emits('update:selected', title);
};
</script>

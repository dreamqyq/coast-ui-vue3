<template>
  <div ref="container" class="coast-tabs-nav">
    <div
      v-for="tab in subElements"
      class="coast-tabs-nav-item"
      :class="{ selected: tab.title === currentSelected, disabled: tab.disabled }"
      :key="tab.title"
      @click="handleClick(tab)"
    >
      {{ tab.title }}
    </div>
    <TabIndicator />
  </div>
</template>

<script lang="ts">
export default { name: 'CoastTabNav' };
</script>

<script lang="ts" setup>
import { inject, Ref, ref } from 'vue';
import { TabPanelProps, UpdateSelectedFnType } from './tabs';
import TabIndicator from './TabIndicator.vue';

defineProps({
  subElements: {
    type: Array,
    required: true,
  },
});
const currentSelected = inject<Ref<string>>('currentSelected');
const updateCurrentSelected = inject<UpdateSelectedFnType>('updateCurrentSelected');

const container = ref<HTMLElement>(null);

const handleClick = (tab: TabPanelProps) => {
  const { disabled, title } = tab;
  if (disabled || title === currentSelected.value) return;
  updateCurrentSelected(tab.title);
};
</script>

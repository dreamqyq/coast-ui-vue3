<template>
  <slot />
</template>

<script lang="ts">
export default { name: 'CoastTabPanel' };
</script>

<script lang="ts" setup>
import { getCurrentInstance, inject } from 'vue';
import { UpdateTabPanelFnType } from './tabs';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
});
const instance = getCurrentInstance();
const updateTabPanelState = inject<UpdateTabPanelFnType>('updateTabPanelState');

if (!updateTabPanelState) {
  throw new Error('CoTabPanel must use width CoTabs');
}

updateTabPanelState({
  ...props,
  uid: instance.uid,
});
</script>

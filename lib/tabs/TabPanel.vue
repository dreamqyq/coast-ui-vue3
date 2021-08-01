<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject } from 'vue';
import { TabPanelProps, UpdateTabPanelFnType } from './tabs';

export default defineComponent({
  name: 'CoastTabPanel',
  props: {
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  setup(props: TabPanelProps) {
    const instance = getCurrentInstance();
    const updateTabPanelState = inject<UpdateTabPanelFnType>('updateTabPanelState');

    if (!updateTabPanelState) {
      throw new Error('CoTabPanel must use width CoTabs');
    }

    updateTabPanelState({
      ...props,
      uid: instance.uid,
    });
  },
});
</script>

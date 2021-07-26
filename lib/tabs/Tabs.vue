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
import { computed, defineComponent, provide, ref } from 'vue';
import TabNav from './TabNav.vue';
import TabPanel from './TabPanel.vue';

interface TabsProps {
  selected: string;
}

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
    provide<Ref<string>>('currentSelected', currentSelected);

    const defaults = context.slots.default();
    defaults.forEach(tag => {
      if (tag.type !== TabPanel) {
        throw new Error('CoTabs 的子标签必须为 CoTabPanel');
      }
    });
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
      defaults,
      subElements,
      selectHandle,
      current,
    };
  },
});
</script>

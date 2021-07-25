<template>
  <div class="coast-tabs">
    <TabNav :subElements="subElements" :selected="selected" @change="selectHandle" />
    <div class="coast-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import TabNav from './TabNav.vue';
import TabPanel from './TabPanel.vue';

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
  setup(props, context) {
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

import { Component, computed, defineComponent, h, VNode } from 'vue';

const CoastLayout = defineComponent({
  name: 'CoastLayout',
  setup(props, { slots }) {
    const isHasAside = computed(() => {
      if (slots && slots.default) {
        const children: Array<VNode> = slots.default();
        return children.some(child => {
          const tag = (child.type as Component).name;
          return tag === 'CoastAside';
        });
      } else {
        return false;
      }
    });

    return () =>
      h(
        'section',
        { class: ['coast-layout', { 'coast-layout-has-aside': isHasAside.value }] },
        slots.default?.(),
      );
  },
});

export default CoastLayout;

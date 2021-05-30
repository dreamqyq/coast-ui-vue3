import { ref } from 'vue';
import { mount } from '@vue/test-utils';
import Tabs from '../Tabs.vue';
import TabPanel from '../TabPanel.vue';

describe('Tabs', () => {
  it('create', async () => {
    const wrapper = mount({
      components: {
        'co-tabs': Tabs,
        'co-tab-panel': TabPanel,
      },
      template: `
        <co-tabs v-model:selected="selected">
          <co-tab-panel title="tab1">内容1</co-tab-panel>
          <co-tab-panel title="tab2">内容2</co-tab-panel>
        </co-tabs>
      `,
      setup() {
        const selected = ref('tab1');
        return { selected };
      },
    });

    const tabsWrapper = wrapper.findComponent(Tabs);
    const panelsWrapper = wrapper.findComponent(TabPanel);
    expect(tabsWrapper.classes()).toContain('coast-tabs');
    expect(panelsWrapper.classes()).toContain('coast-tabs-content');
  });

  it('active-name', () => {});
  it('Tabs children must be TabPanel', () => {});
  it('watch selected tabPanel change', () => {});
  it('TabPanel disabled', () => {});
});

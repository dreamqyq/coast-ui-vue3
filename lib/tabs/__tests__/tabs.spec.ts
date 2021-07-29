import { ComponentPublicInstance, nextTick, ref } from 'vue';
import { mount, VueWrapper } from '@vue/test-utils';
import Tabs from '../Tabs.vue';
import TabPanel from '../TabPanel.vue';

const _mount = () => {
  return mount({
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
};

const expectActiveTabCorrectly = (
  wrapper: VueWrapper<ComponentPublicInstance>,
  activatedIndex: number,
) => {
  const anotherIndex = activatedIndex ? 0 : 1;
  const tabsWrapper = wrapper.findComponent(Tabs);
  const panelsWrapper = wrapper.findComponent(TabPanel);
  const tabsNavItemList = tabsWrapper.findAll('.coast-tabs-nav-item');
  const activatedTab = tabsWrapper.find('.selected');
  expect(activatedTab.text()).toBe(`tab${activatedIndex + 1}`);

  expect(tabsNavItemList[anotherIndex].text()).toBe(`tab${anotherIndex + 1}`);
  expect(tabsNavItemList[anotherIndex].classes()).not.toContain('selected');
  expect(panelsWrapper.text()).toBe(`内容${activatedIndex + 1}`);
};

describe('Tabs', () => {
  it('create', async () => {
    const wrapper = _mount();
    const tabsWrapper = wrapper.findComponent(Tabs);
    const panelsWrapper = wrapper.findComponent(TabPanel);
    expect(tabsWrapper.classes()).toContain('coast-tabs');
    expect(panelsWrapper.classes()).toContain('coast-tabs-content');

    const tabsNavWrapper = tabsWrapper.find('.coast-tabs-nav');
    const tabsNavItemList = tabsNavWrapper.findAll('.coast-tabs-nav-item');
    expect(tabsNavItemList.length).toBe(2);
    expect(tabsNavItemList[0].text()).toBe('tab1');
    expect(tabsNavItemList[1].text()).toBe('tab2');
    expectActiveTabCorrectly(wrapper, 0);

    tabsNavItemList[1].trigger('click');
    await nextTick();
    expectActiveTabCorrectly(wrapper, 1);
  });

  it('watch selected tabPanel change', async () => {
    const wrapper = mount({
      components: {
        'co-tabs': Tabs,
        'co-tab-panel': TabPanel,
      },
      template: `
      <co-tabs v-model:selected="selected" @update:selected="onChange">
        <co-tab-panel title="tab1">内容1</co-tab-panel>
        <co-tab-panel title="tab2">内容2</co-tab-panel>
      </co-tabs>
    `,
      setup() {
        const selected = ref('tab1');
        const onChange = jest.fn();
        return { selected, onChange };
      },
    });
    const vm = wrapper.vm;
    const tabsWrapper = wrapper.findComponent(Tabs);
    const tabsNavItemList = tabsWrapper.findAll('.coast-tabs-nav-item');
    tabsNavItemList[0].trigger('click');
    await nextTick();
    expect(vm.onChange).not.toHaveBeenCalled();

    tabsNavItemList[1].trigger('click');
    await nextTick();
    expect(vm.onChange).toHaveBeenCalled();
  });

  it('TabPanel disabled', () => {
    const wrapper = mount({
      components: {
        'co-tabs': Tabs,
        'co-tab-panel': TabPanel,
      },
      template: `
      <co-tabs v-model:selected="selected" @update:selected="onChange">
        <co-tab-panel title="tab1">内容1</co-tab-panel>
        <co-tab-panel title="tab2" :disabled="true">内容2</co-tab-panel>
        <co-tab-panel title="tab3" disabled>内容3</co-tab-panel>
      </co-tabs>
    `,
      setup() {
        const selected = ref('tab1');
        const onChange = jest.fn();
        return { selected, onChange };
      },
    });

    const vm = wrapper.vm;
    const tabsWrapper = wrapper.findComponent(Tabs);
    const tabsNavItemList = tabsWrapper.findAll('.coast-tabs-nav-item');
    for (let i = 1; i < 3; i++) {
      tabsNavItemList[i].trigger('click');
      expect(tabsNavItemList[i].classes()).toContain('disabled');
      expect(vm.onChange).not.toHaveBeenCalled();
      expectActiveTabCorrectly(wrapper, 0);
    }
  });
});

import { mount } from '@vue/test-utils';
import Icon from '../Icon.vue';

jest.mock('../../style/iconfont/index.js');

describe('Icon', () => {
  it('create', () => {
    const wrapper = mount(Icon, {
      props: { name: 'loading' },
    });
    expect(wrapper.classes()).toContain('coast-icon');
    expect(wrapper.find('use').attributes('href')).toEqual('#coast-icon-loading');
  });

  it('prefix', () => {
    const wrapper = mount(Icon, {
      props: { name: 'Loading', prefix: 'iconfont' },
    });
    expect(wrapper.classes()).toContain('coast-icon');
    expect(wrapper.find('use').attributes('href')).toEqual('#iconfontLoading');
  });
});

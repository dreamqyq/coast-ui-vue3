import { mount } from '@vue/test-utils';
import Layout from '../Layout';
import Header from '../Header';
import Content from '../Content';
import Aside from '../Aside';
import Footer from '../Footer';

const AXIOM = 'Tomorrow will be even better';

describe('Layout.vue', () => {
  test('Layout render test', () => {
    const wrapper = mount(Layout, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.classes()).toContain('coast-layout');
    expect(wrapper.text()).toEqual(AXIOM);
  });

  test('has aside', () => {
    const TestComponent = {
      template: `
        <co-layout>
          <co-header></co-header>
					<co-aside></co-aside>
          <co-content></co-content>
        </co-layout>`,
      components: {
        'co-layout': Layout,
        'co-header': Header,
        'co-aside': Aside,
        'co-content': Content,
      },
    };

    const wrapper = mount(TestComponent);
    expect(wrapper.classes()).toContain('coast-layout-has-aside');
  });
});

describe('Header', () => {
  test('create header', () => {
    const wrapper = mount(Header);
    expect(wrapper.classes()).toContain('coast-header');
  });

  test('header height', () => {
    const wrapper = mount(Header, { props: { height: '100px' } });
    const vm = wrapper.vm;
    expect(vm.$el.style.height).toBe('100px');
  });
});

describe('Aside', () => {
  test('aside create', () => {
    const wrapper = mount(Aside);
    expect(wrapper.classes()).toContain('coast-aside');
  });

  test('aside width', () => {
    const wrapper = mount(Aside, { props: { width: '200px' } });
    const vm = wrapper.vm;
    expect(vm.$el.style.width).toEqual('200px');
  });
});

describe('Content', () => {
  test('main create', () => {
    const wrapper = mount(Content);
    expect(wrapper.classes()).toContain('coast-content');
  });
});

describe('Footer', () => {
  test('footer create', () => {
    const wrapper = mount(Footer);
    expect(wrapper.classes()).toContain('coast-footer');
  });

  test('footer height', () => {
    const wrapper = mount(Footer, { props: { height: '100px' } });
    const vm = wrapper.vm;
    expect(vm.$el.style.height).toEqual('100px');
  });
});

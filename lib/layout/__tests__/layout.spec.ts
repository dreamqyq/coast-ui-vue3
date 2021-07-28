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

  test('Layout check for any aside', () => {
    const childHasAside = `
      <co-header></co-header>
      <co-aside></co-aside>
      <co-content></co-content>
    `;
    const childNotAside = `
      <co-header></co-header>
      <co-content></co-content>
    `;
    const childEmpty = '';

    const TestComponent = (templateChild: string) => ({
      template: `
        <co-layout>
        ${templateChild}
        </co-layout>
      `,
      components: {
        'co-layout': Layout,
        'co-header': Header,
        'co-aside': Aside,
        'co-content': Content,
      },
    });

    const hasAsideClassName = 'coast-layout-has-aside';

    const wrapper1 = mount(TestComponent(childHasAside));
    const LayoutComponent1 = wrapper1.findComponent(Layout);
    expect(LayoutComponent1.vm.$slots).toBeTruthy();
    expect(LayoutComponent1.vm.$slots.default).toBeTruthy();
    expect(LayoutComponent1.vm.$slots.default().length > 0).toBeTruthy();
    expect(LayoutComponent1.findAllComponents(Aside).length > 0).toBeTruthy();
    expect(wrapper1.classes()).toContain(hasAsideClassName);

    const wrapper2 = mount(TestComponent(childNotAside));
    const LayoutComponent2 = wrapper2.findComponent(Layout);
    expect(LayoutComponent2.vm.$slots).toBeTruthy();
    expect(LayoutComponent2.vm.$slots.default).toBeTruthy();
    expect(LayoutComponent2.vm.$slots.default().length > 0).toBeTruthy();
    expect(LayoutComponent2.findAllComponents(Aside).length > 0).toBeFalsy();
    expect(wrapper2.classes()).not.toContain(hasAsideClassName);

    const wrapper3 = mount(TestComponent(childEmpty));
    const LayoutComponent3 = wrapper3.findComponent(Layout);
    expect(LayoutComponent3.vm.$slots).toBeTruthy();
    expect(LayoutComponent3.vm.$slots.default).toBeFalsy();
    expect(LayoutComponent3.vm.$slots).toMatchObject({});
    expect(wrapper3.classes()).not.toContain(hasAsideClassName);
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

import { mount } from '@vue/test-utils';
import Card from '../Card.vue';

const AXIOM = 'Tomorrow will be even better';

describe('Card', () => {
  it('create', () => {
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.classes()).toContain('coast-card');
    expect(wrapper.text()).toEqual(AXIOM);
  });

  it('render title', () => {
    const title = 'I am title';
    const wrapper = mount(Card, {
      props: {
        title,
      },
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.find('h2').classes()).toContain('coast-card-title');
    expect(wrapper.text()).toContain(title);
  });

  it('render footer', () => {
    const footer = 'I am footer';
    const wrapper = mount(Card, {
      slots: {
        default: AXIOM,
        footer,
      },
    });
    expect(wrapper.find('footer').classes()).toContain('coast-card-footer');
    expect(wrapper.text()).toContain(footer);
  });

  it('hoverable', () => {
    const wrapper = mount(Card, {
      props: {
        hoverable: true,
      },
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.classes()).toContain('coast-card-hoverable');
  });

  it('shadow', () => {
    const wrapper = mount(Card, {
      props: {
        shadow: true,
      },
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.classes()).toContain('coast-card-shadow');
  });

  it('type', () => {
    const wrapper = mount(Card, {
      props: {
        type: 'dark',
      },
      slots: {
        default: AXIOM,
      },
    });
    expect(wrapper.classes()).toContain('coast-card-dark');
  });
});

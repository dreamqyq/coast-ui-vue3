import { mount } from '@vue/test-utils';
import { h, nextTick, ref } from 'vue';
import Col from '../Col';
import Row from '../Row';

describe('Col', () => {
  it('create', () => {
    const wrapper = mount(Col);
    expect(wrapper.classes()).toContain('coast-col');
  });

  it('span number', () => {
    const wrapper = mount(Col, { props: { span: 12 } });
    expect(wrapper.classes()).toContain('coast-col-span-12');
  });

  it('span string', () => {
    const wrapper = mount(Col, { props: { span: '8' } });
    expect(wrapper.classes()).toContain('coast-col-span-8');
  });

  it('offset number', () => {
    const wrapper = mount(Col, { props: { offset: 2 } });
    expect(wrapper.classes()).toContain('coast-col-offset-2');
  });

  it('offset string', () => {
    const wrapper = mount(Col, { props: { span: '4' } });
    expect(wrapper.classes()).toContain('coast-col-span-4');
  });

  it('change gutter value', async () => {
    const outer = ref(20);
    const App = {
      setup() {
        return () => {
          return h(
            Row,
            {
              gutter: outer.value,
              ref: 'row',
            },
            () => [
              h(Col, {
                span: 12,
                ref: 'col',
              }),
            ],
          );
        };
      },
    };

    const wrapper = mount(App);
    const rowElm = wrapper.findComponent({ ref: 'row' }).element as HTMLElement;
    const colElm = wrapper.findComponent({ ref: 'col' }).element as HTMLElement;
    expect(rowElm.style.marginLeft === '-10px').toBe(true);
    expect(rowElm.style.marginRight === '-10px').toBe(true);
    expect(colElm.style.paddingLeft === '10px').toBe(true);
    expect(colElm.style.paddingRight === '10px').toBe(true);

    outer.value = 40; // change gutter value
    await nextTick();
    expect(rowElm.style.marginLeft === '-20px').toBe(true);
    expect(rowElm.style.marginRight === '-20px').toBe(true);
    expect(colElm.style.paddingLeft === '20px').toBe(true);
    expect(colElm.style.paddingRight === '20px').toBe(true);
  });

  it('responsive', () => {
    const TestComponent = {
      template: `<el-row :gutter="20">
        <el-col
          ref="col"
          :sm="{ span: 4, offset: 2 }"
          md="8" 
          :lg="{ span: 6, offset: 3 }"
        ></el-col>
      </el-row>`,
      components: {
        'el-col': Col,
        'el-row': Row,
      },
    };
    const wrapper = mount(TestComponent);
    const colElmClass = wrapper.findComponent({ ref: 'col' }).classes();
    expect(colElmClass.includes('coast-col-sm-span-4')).toBe(true);
    expect(colElmClass.includes('coast-col-sm-span-4')).toBe(true);
    expect(colElmClass.includes('coast-col-sm-offset-2')).toBe(true);
    expect(colElmClass.includes('coast-col-lg-span-6')).toBe(true);
    expect(colElmClass.includes('coast-col-lg-offset-3')).toBe(true);
    expect(colElmClass.includes('coast-col-md-span-8')).toBe(true);
  });
});

describe('Row', () => {
  it('create', () => {
    const wrapper = mount(Row);
    expect(wrapper.classes()).toContain('coast-row');
  });

  it('gutter', () => {
    const wrapper = mount(Row, { props: { gutter: 20 } });
    const rowElm = wrapper.element as HTMLElement;
    expect(rowElm.style.marginLeft).toEqual('-10px');
    expect(rowElm.style.marginRight).toEqual('-10px');
  });

  it('justify', () => {
    const wrapper = mount(Row, { props: { justify: 'end' } });
    expect(wrapper.classes()).toContain('coast-justify-end');
  });
});

import { getBodyElement } from '@coast/__tests__/utils/utils';
import { mount, VueWrapper } from '@vue/test-utils';
import { PopoverProps, TriggerType } from './../popover.d';
import Popover from '../Popover.vue';
import { ComponentPublicInstance } from 'vue';

const AXIOM = 'Tomorrow will be even better';

const _mount = (props: PopoverProps = {}) => {
  const bindTrigger = props.trigger ? `trigger="${props.trigger}"` : '';
  const bindPosition = props.position ? `position="${props.position}"` : '';
  const bindWidthPrefix = typeof props.width === 'number' ? ':' : '';
  const bindWidth = props.width ? `${bindWidthPrefix}width="${props.width}"` : '';
  return mount({
    components: { 'co-popover': Popover },
    template: `
      <co-popover 
        ${bindTrigger}
        ${bindPosition}
        ${bindWidth}
      >
        <template #content>${AXIOM}</template>
        <button>button</button>
      </co-popover>
    `,
  });
};

const expectPopoverVmVisible = (wrapper: VueWrapper<ComponentPublicInstance>, visible: boolean) => {
  const { vm } = wrapper.findComponent(Popover);
  expect(vm.visible).toBe(visible);
};

const expectBodyIsEmpty = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  const { bodyChildren } = getBodyElement();
  expect(bodyChildren.length).toBe(0);
  expectPopoverVmVisible(wrapper, false);
};

const expectPopoverExist = (wrapper: VueWrapper<ComponentPublicInstance>) => {
  const { bodyChildren, lastElementChild } = getBodyElement();
  expect(bodyChildren.length).toBe(1);
  expect(lastElementChild.className).toContain('coast-popover');
  expectPopoverVmVisible(wrapper, true);
};

const handleTriggerEvent = async (
  trigger: TriggerType,
  wrapper: VueWrapper<ComponentPublicInstance>,
  index: number,
) => {
  const eventMap = {
    click: {
      events: ['click', 'click'],
      selector: 'button',
    },
    hover: {
      events: ['mouseenter', 'mouseleave'],
      selector: '.coast-popover-slot',
    },
    focus: {
      events: ['focusin', 'focusout'],
      selector: 'button',
    },
  };
  const currentEvent = eventMap[trigger];
  const element = wrapper.find(currentEvent.selector);
  await element.trigger(currentEvent.events[index]);
};

const expectPopoverTriggerCorrectly = async (trigger: TriggerType) => {
  const wrapper = _mount({ trigger });
  expectBodyIsEmpty(wrapper);

  await handleTriggerEvent(trigger, wrapper, 0);
  expectPopoverExist(wrapper);

  await handleTriggerEvent(trigger, wrapper, 1);
  expectBodyIsEmpty(wrapper);

  wrapper.unmount();
};

type ExpectCBType = (popover: Element, vm?: ComponentPublicInstance) => void;
const handleInitAndReturnPopover = async (
  expectCallback: ExpectCBType,
  props: PopoverProps = {},
) => {
  const wrapper = _mount(props);
  expectBodyIsEmpty(wrapper);
  const popoverVm = wrapper.findComponent(Popover).vm;
  await handleTriggerEvent('click', wrapper, 0);
  const { bodyChildren: afterBody, lastElementChild } = getBodyElement();
  expect(afterBody.length).toBe(1);
  expectCallback(lastElementChild, popoverVm);
  wrapper.unmount();
};

describe('Popover', () => {
  it('create', async () => {
    await handleInitAndReturnPopover(popover => {
      expect(popover.className).toContain('coast-popover');
      expect(popover.className).toContain('coast-popover-top');
    });
  });

  it('trigger event', async () => {
    const triggerList = ['click', 'hover', 'focus'] as const;
    for (const trigger of triggerList) {
      await expectPopoverTriggerCorrectly(trigger);
    }
  });

  it('position', async () => {
    const position = 'bottom';
    await handleInitAndReturnPopover(
      (popover, vm) => {
        const props = vm.$props as PopoverProps;
        expect(props.position).toBe(position);
        expect(popover.className).toContain(`coast-popover-${position}`);
      },
      { position },
    );
  });

  it('number width', async () => {
    await handleInitAndReturnPopover(
      (popover, vm) => {
        const props = vm.$props as PopoverProps;
        expect(popover.getAttribute('style')).toContain('width: 20px');
        expect(typeof props.width).toBe('number');
      },
      { width: 20 },
    );
  });

  it('string width', async () => {
    await handleInitAndReturnPopover(
      (popover, vm) => {
        const props = vm.$props as PopoverProps;
        expect(popover.getAttribute('style')).toContain('width: 20%');
        expect(typeof props.width).toBe('string');
      },
      { width: '20%' },
    );
  });
});

import { createVNode, render, VNode } from 'vue';
import ToastConstructor from './ToastConstructor.vue';
import type { ToastProps } from './toast.d';

const toastQueue: Array<VNode> = [];
let current = 1;

const Toast = (options: ToastProps) => {
  const _options = {
    ...options,
    id: `coast-toast-${current++}`,
  };
  createToast(_options);
};

const createToast = (options: ToastProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const onDestroy = () => {
    render(null, div);
    div.remove();
    const i = toastQueue.findIndex(item => {
      const _id = item.component.props.id;
      return _id === options.id;
    });
    if (i === -1) return;
    const h = toastQueue[i].el.offsetHeight;
    console.log(toastQueue[i]);
    toastQueue.splice(i, 1);
    if (toastQueue.length < 1) return;
    for (let j = i; i < toastQueue.length; j++) {
      const pos = parseInt(toastQueue[j].el.style.top) - h - 16;
      toastQueue[j].component.props.top = pos;
    }
  };
  const vm = createVNode(ToastConstructor, {
    ...options,
    top: toastQueue.length * 60,
    onDestroy,
  });
  toastQueue.push(vm);
  render(vm, div);
};

export { Toast };

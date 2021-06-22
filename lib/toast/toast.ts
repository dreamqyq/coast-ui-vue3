import { createVNode, render } from 'vue';
import ToastConstructor from './ToastConstructor.vue';
import type { ToastProps } from './toast.d';

const Toast = (options: ToastProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    render(null, div);
    div.remove();
  };
  const vm = createVNode(ToastConstructor, {
    ...options,
  });
  render(vm, div);
};

export { Toast };

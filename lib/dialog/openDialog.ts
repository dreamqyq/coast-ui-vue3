import { createVNode, render } from 'vue';
import Dialog from './Dialog.vue';

interface Options {
  content: string;
  title?: string;
  overlayClosable?: boolean;
  confirm?: () => void;
  cancel?: () => void;
}

export const openDialog = (options: Options) => {
  const { title, content, overlayClosable, confirm, cancel } = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = () => {
    render(null, div);
    div.remove();
  };
  const vm = createVNode(
    Dialog,
    {
      visible: true,
      title,
      overlayClosable,
      confirm,
      cancel,
      'onUpdate:visible': (newVisible: boolean) => {
        if (newVisible === false) {
          close();
        }
      },
    },
    {
      default: () => content,
    },
  );
  render(vm, div);
  return { close };
};

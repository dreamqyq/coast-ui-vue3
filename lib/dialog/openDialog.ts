import { render, createVNode } from 'vue';
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
  const closeHandle = () => {
    render(null, div);
    div.remove();
  };
  const app = createVNode(
    Dialog,
    {
      visible: true,
      title,
      overlayClosable,
      confirm,
      cancel,
      'onUpdate:visible': (newVisible: boolean) => {
        if (newVisible === false) {
          closeHandle();
        }
      },
    },
    {
      default: content,
    },
  );
  render(app, div);
};

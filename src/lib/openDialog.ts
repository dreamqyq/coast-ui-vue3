import { createApp, h } from 'vue';
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
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          title,
          overlayClosable,
          confirm,
          cancel,
          'onUpdate:visible': newVisibel => {
            if (newVisibel === false) {
              closeHandle();
            }
          }
        },
        { content }
      );
    }
  });
  app.mount(div);
};

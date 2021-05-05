import type { Plugin } from 'vite';
import marked from 'marked';

const mdToJs = (str: string) => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};

export const md = (): Plugin => ({
  name: 'md-plugin',
  async handleHotUpdate(ctx) {
    // 用于开发
    if (ctx.file.endsWith('.md')) {
      ctx.read = async function () {
        return mdToJs(await ctx.read());
      };
    }
  },
  transform(raw, id) {
    // 用于 rollup // 插件
    if (id.endsWith('md')) {
      return { code: mdToJs(raw) };
    }
  },
});

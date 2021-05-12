import { md } from './plugins/md';
import fs from 'fs';
import path from 'path';
import { baseParse, ElementNode } from '@vue/compiler-core';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

type FindElementType = {
  tag: string;
} & ElementNode;
const coastDemoParse = {
  name: 'coast-demo-parse',
  transform(code: string, id: string) {
    if (!/vue&type=demo/.test(id)) return;
    const file = fs.readFileSync(id.split('?')[0]).toString();
    const parsed = baseParse(file).children.find((n: FindElementType) => n.tag === 'demo');
    const main = file.split(parsed.loc.source).join('').trim();
    const sourceCode = main;
    return `export default Comp => {
      Comp.__sourceCodeTitle = ${JSON.stringify(code)}
      Comp.__sourceCode = ${JSON.stringify(sourceCode)}
    }`;
  },
};

export default defineConfig({
  build: {
    assetsDir: 'assets',
  },
  base: './',
  plugins: [md(), vue(), coastDemoParse],
  resolve: {
    alias: {
      'coast-ui-vue3': path.resolve('lib'),
    },
  },
});

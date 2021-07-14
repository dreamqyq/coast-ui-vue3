import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import dartSass from 'sass';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'lib/index.ts',
  output: {
    globals: {
      vue: 'Vue',
    },
    name: 'Coast',
    file: 'package/coast-ui.js',
    format: 'umd',
    plugins: [terser()],
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    vue({
      include: /\.vue$/,
      target: 'browser',
    }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
  ],
};

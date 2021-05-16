import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import Markdown from '../components/Markdown.vue';
import introduce from '../markdown/Introduce.md';
import install from '../markdown/Install.md';
import getStart from '../markdown/GetStart.md';
import { demoViewList } from './exampleDocsRouter';
import { createRouter, createWebHashHistory } from 'vue-router';
import { h } from '@vue/runtime-core';

const mdRender = (content: string) => h(Markdown, { content, key: content });

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      name: 'doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/introduce' },
        {
          path: 'introduce',
          name: 'Introduce',
          component: mdRender(introduce),
          meta: {
            prev: '',
            next: 'Install',
          },
        },
        {
          path: 'install',
          name: 'Install',
          component: mdRender(install),
          meta: {
            prev: 'Introduce',
            next: 'GetStart',
          },
        },
        {
          path: 'get-start',
          name: 'GetStart',
          component: mdRender(getStart),
          meta: {
            prev: 'Install',
            next: demoViewList[0].name,
          },
        },
        ...demoViewList,
      ],
    },
  ],
});

export default router;

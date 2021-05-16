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
          name: '介绍',
          component: mdRender(introduce),
          meta: {
            prev: '',
            next: '安装',
          },
        },
        {
          path: 'install',
          name: '安装',
          component: mdRender(install),
          meta: {
            prev: '介绍',
            next: '开始',
          },
        },
        {
          path: 'get-start',
          name: '开始',
          component: mdRender(getStart),
          meta: {
            prev: '介绍',
            next: `${demoViewList[0].name as string} 组件`,
          },
        },
        ...demoViewList,
      ],
    },
  ],
});

export default router;

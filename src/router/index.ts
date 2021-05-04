import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import Markdown from '../components/Markdown.vue';
import introduce from '../markdown/Introduce.md';
import install from '../markdown/Install.md';
import getStart from '../markdown/GetStart.md';
import navList from '../router/nav.config.json';
import { createRouter, createWebHashHistory } from 'vue-router';
import { h } from '@vue/runtime-core';

const mdRender = content => h(Markdown, { content, key: content });

interface NavItem {
  title: string;
  path: string;
  componentPath: string;
}

const componentList = (navList as Array<NavItem>).map(({ title, path, componentPath }) => ({
  title,
  path,
  component: () => import(componentPath),
}));

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', redirect: '/doc/introduce' },
        { path: 'introduce', component: mdRender(introduce) },
        { path: 'install', component: mdRender(install) },
        { path: 'get-start', component: mdRender(getStart) },
        ...componentList,
      ],
    },
  ],
});

export default router;

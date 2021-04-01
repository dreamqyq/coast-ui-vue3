import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import introduce from './markdown/Introduce.md';
import install from './markdown/Install.md';
import getStart from './markdown/GetStart.md';
import { createRouter, createWebHashHistory } from 'vue-router';
import { h } from '@vue/runtime-core';

const mdRender = content => h(Markdown, { content, key: content });

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
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ],
    },
  ],
});

export default router;

import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './examples/Switch/SwitchDemo.vue';
import ButtonDemo from './examples/Button/ButtonDemo.vue';
import DialogDemo from './examples/Dialog/DialogDemo.vue';
import TabsDemo from './examples/Tabs/TabsDemo.vue';
import CardDemo from './examples/Card/CardDemo.vue';
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
        { path: 'card', component: CardDemo },
      ],
    },
  ],
});

export default router;

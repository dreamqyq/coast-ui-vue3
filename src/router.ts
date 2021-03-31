import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import { createWebHashHistory, createRouter } from 'vue-router';
import { h } from '@vue/runtime-core';

const mdRender = fileName =>
  h(Markdown, { path: `../markdown/${fileName}.md`, key: fileName });

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
        { path: 'introduce', component: mdRender('Introduce') },
        { path: 'install', component: mdRender('Install') },
        { path: 'get-start', component: mdRender('GetStart') },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo }
      ]
    }
  ]
});

export default router;

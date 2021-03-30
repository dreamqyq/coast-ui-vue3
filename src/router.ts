import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Introduce from './views/Introduce.vue';
import Install from './views/Install.vue';
import GetStart from './views/GetStart.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      children: [
        { path: '', component: Introduce },
        { path: 'introduce', component: Introduce },
        { path: 'install', component: Install },
        { path: 'get-start', component: GetStart },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo }
      ]
    }
  ]
});

export default router;

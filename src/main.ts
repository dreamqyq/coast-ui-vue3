import { createApp } from 'vue';
import App from './App.vue';
import MyComponent from './components/MyComponent.vue';
import MySecondComponent from './components/MySecondComponent.vue';
import './index.css';
import { createWebHashHistory, createRouter } from 'vue-router';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: MyComponent },
    { path: '/2', component: MySecondComponent }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');

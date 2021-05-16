import { RouteRecordRaw } from 'vue-router';
const modules = import.meta.glob('../examples/**/index.vue');

const demoViewList: Array<RouteRecordRaw> = [];
Object.keys(modules).forEach((key, index) => {
  demoViewList.push({
    name: `${key.split('/')[2]} 组件`,
    path: key.split('/')[2].toLocaleLowerCase(),
    component: modules[key],
    meta: {
      prev: '',
      next: '',
    },
  });
  if (index === 0) {
    demoViewList[index].meta.prev = '开始';
  } else {
    demoViewList[index - 1].meta.next = demoViewList[index].name;
    demoViewList[index].meta.prev = demoViewList[index - 1].name;
  }
});

export { demoViewList };

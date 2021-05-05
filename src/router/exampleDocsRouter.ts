const modules = import.meta.glob('../examples/**/index.vue');

const demoViewList = [];
Object.keys(modules).forEach(key => {
  demoViewList.push({
    title: key.split('/')[2],
    path: key.split('/')[2].toLocaleLowerCase(),
    component: modules[key],
  });
});

export { demoViewList };

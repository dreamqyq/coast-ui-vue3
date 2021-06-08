# Coast UI for Vue3

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/dreamqyq/coast-ui-vue3/Unit%20Test) [![https://www.npmjs.com/package/coast-ui-vue3](https://img.shields.io/npm/l/coast-ui-vue3)](https://www.npmjs.org/package/coast-ui-vue3) [![NPM Version](http://img.shields.io/npm/v/coast-ui-vue3.svg?style=flat)](https://www.npmjs.org/package/coast-ui-vue3) [![NPM Downloads](https://img.shields.io/npm/dm/coast-ui-vue3.svg?style=flat)](https://npmcharts.com/compare/coast-ui-vue3?minimal=true) ![vue version](https://img.shields.io/github/package-json/dependency-version/dreamqyq/coast-ui-vue3/vue) ![vite version](https://img.shields.io/github/package-json/dependency-version/dreamqyq/coast-ui-vue3/dev/vite)
## 介绍

基于 `Vue3` 及 `TypeScript` 的组件库，代码易读，每个组件的源代码都极其简洁。本项目基于 `Vite2.x` 构建。

## 如何使用

### 安装

```
yarn add coast-ui-vue3
```

或

```
npm install coast-ui-vue3
```

### 引入 coast-ui-vue3

```
import { CoButton, CoTabs, CoSwitch, CoDialog, openDialog } from "coast-ui-vue3"
import "coast-ui-vue3/package/coast-ui.css";
```

### 本项目使用

- 官网本地运行
  - `yarn` 安装依赖
  - `yarn dev` 运行
- 官网自动化部署（gh-pages）
  - `yarn deploy`
- 组件打包，基于 rollup
  - `yarn build:lib`
- 组件单元测试，基于 jest
  - `yarn test:lib`
- 自动生成 changelog，基于 conventional-changelog
  - `yarn changelog`

## 文档

要查看实时示例和详细的组件文档，请访问[文档](https://dreamqyq.github.io/coast-ui-vue3/#/)。

## 变更记录

[CHANGELOG](https://github.com/dreamqyq/coast-ui-vue3/blob/master/CHANGELOG.md) 中记录了每个发行版的详细更改。

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Enoch Qin

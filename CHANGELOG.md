# [0.3.0](https://github.com/dreamqyq/coast-ui-vue3/compare/v0.2.0...v0.3.0) (2021-06-01)

### Bug Fixes

- Button loading add disabled status, cannot trigger click event ([7435790](https://github.com/dreamqyq/coast-ui-vue3/commit/7435790f0f2f051f11f9b6d5fdbef51ea6cb65c5))
- Button loading status reactivity ([13cb19f](https://github.com/dreamqyq/coast-ui-vue3/commit/13cb19fd5419e7b034eeeef53634e93285e6cabc))
- Button loading status: disabled style ([3b7ac4c](https://github.com/dreamqyq/coast-ui-vue3/commit/3b7ac4c092275abca89ea360623d26e57b9a5344))
- lib/index.ts import default style ([684af7f](https://github.com/dreamqyq/coast-ui-vue3/commit/684af7f9acffc7c487ba5630777dd85d7b266659))

### Features

- add api openDialog.close() can close dialog manually ([4fbc275](https://github.com/dreamqyq/coast-ui-vue3/commit/4fbc275cb93170438cd084cef7c20ff5eacc1c54))
- add ButtonGroup component ([8967ff5](https://github.com/dreamqyq/coast-ui-vue3/commit/8967ff535450c0a5e912b29a3823e0c2e6f15b8e))
- add Icon component ([c4ac891](https://github.com/dreamqyq/coast-ui-vue3/commit/c4ac8914c32d36bd5ae763672c65cf7ed0ab14b6))
- Button loading use icon, refactor style ([b0c83ba](https://github.com/dreamqyq/coast-ui-vue3/commit/b0c83bac0953361e522470b21a636d688f13cc5f))
- Icon add prefix attribution ([cfaefb9](https://github.com/dreamqyq/coast-ui-vue3/commit/cfaefb995da651f0a727ed5f030a6465460cb361))

### BREAKING CHANGES

- import style file use new path: import "coast-ui-vue3/dist/lib/coast-ui.css"

# [0.2.0](https://github.com/dreamqyq/coast-ui-vue3/compare/v0.1.1...v0.2.0) (2021-05-16)

### Bug Fixes

- TabPanel disabled props required false ([87f7564](https://github.com/dreamqyq/coast-ui-vue3/commit/87f7564e7a8b75fdfe7728eb6169ce53fb6c5eeb))

### Features

- add Card component ([4d273b0](https://github.com/dreamqyq/coast-ui-vue3/commit/4d273b08b6c0493ca24658ce9d602dab174aaf09))
- add prefix Co in coast-ui component ([41e8d0a](https://github.com/dreamqyq/coast-ui-vue3/commit/41e8d0a6d45eca008257b87e3dd853ef124e8857))
- Button add 'warning' level ([687d969](https://github.com/dreamqyq/coast-ui-vue3/commit/687d96964b50b0876f739daa72e4d3915a481be1))
- Card add footer slot ([b14a72c](https://github.com/dreamqyq/coast-ui-vue3/commit/b14a72ced1c44a42b70e8efd61a62663d7eb822c))
- Card add hoverable props ([5e0c01e](https://github.com/dreamqyq/coast-ui-vue3/commit/5e0c01e646e818da851153a4303a6433eac6930c))
- Card add shadow props ([3dbbd45](https://github.com/dreamqyq/coast-ui-vue3/commit/3dbbd45842622f62f665f0cc6f05a3983deea7eb))
- Card add type props ([841407c](https://github.com/dreamqyq/coast-ui-vue3/commit/841407c081beaa4eeaa0a58a4865c730f87229cf))

### BREAKING CHANGES

- rename component, such as `<co-button>`
- Dialog use default slot to render content
- vite version -> 2.2.4, to dynamic import component demos. md plugins and demo vueCustomBlockTransforms use new grammar

## [0.1.1](https://github.com/dreamqyq/coast-ui-vue3/compare/v0.1.0...v0.1.1) (2021-05-01)

### Bug Fixes

- Button disabled status hover style ([f192e31](https://github.com/dreamqyq/coast-ui-vue3/commit/f192e317d0bc8d5bd0b64482e33110f9c173758f))

### Features

- better support for typescript ([88d9e1e](https://github.com/dreamqyq/coast-ui-vue3/commit/88d9e1eb31c8b5f741527b2c05ef053103f6bbf2))
- Button main color to black ([e228056](https://github.com/dreamqyq/coast-ui-vue3/commit/e228056a4cd3b888d4c0b3a28f2fc33b2821363c))
- TabPanel add disabled props ([2367bd1](https://github.com/dreamqyq/coast-ui-vue3/commit/2367bd1767df8bc1d6e65ac99e1a50fe4b00b54b))
- Tabs main color change to black ([a3415a4](https://github.com/dreamqyq/coast-ui-vue3/commit/a3415a482c1f3f56939ece9534dab81fd042bbf6))

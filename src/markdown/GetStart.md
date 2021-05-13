# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import { CoButton, CoTabs, CoSwitch, CoDialog, openDialog } from "coast-ui-vue3"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <co-button>按钮</co-button>
  </div>
</template>
<script>
import {CoButton, CoTabs, CoSwitch, CoDialog} from "coast-ui-vue3"
export default {
  components: { CoButton }
}
</script>
```

下一节：[Button 组件](#/doc/button)

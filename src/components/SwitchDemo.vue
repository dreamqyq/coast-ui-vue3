<template>
  <div>
    <h1>Switch 文档</h1>
    <div class="demo">
      <h2>{{ SwitchDemo1.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="SwitchDemo1" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          class="language-css"
          v-html="
            Prism.highlight(
              SwitchDemo1.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        />
      </div>
    </div>
    <div class="demo">
      <h2>{{ SwitchDemo2.__sourceCodeTitle }}</h2>
      <div class="demo-component">
        <component :is="SwitchDemo2" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre
          class="language-css"
          v-html="
            Prism.highlight(
              SwitchDemo2.__sourceCode,
              Prism.languages.html,
              'html'
            )
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SwitchDemo1 from "../components/Switch1.demo.vue";
import SwitchDemo2 from "../components/Switch2.demo.vue";
import Button from "../lib/Button.vue";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

export default {
  components: { Button },
  setup() {
    return {
      SwitchDemo1,
      SwitchDemo2,
      Prism,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
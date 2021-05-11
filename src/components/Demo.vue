<template>
  <Card :title="component.__sourceCodeTitle" class="demo">
    <div class="demo-component">
      <component :is="component" />
    </div>
    <template #footer>
      <Button @click="toggleCodeVisible">查看代码</Button>
      <div v-show="codeVisible" class="demo-code">
        <pre><code class="hljs" v-html="sourceCode"></code></pre>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
import hljs from 'highlight.js';
import 'highlight.js/styles/arduino-light.css';
import { Button, Card } from '../lib/index';
import { computed, ref } from 'vue';

export default {
  name: 'Demo',
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  components: { Button, Card },
  setup(props) {
    const codeVisible = ref(false);
    const toggleCodeVisible = () => {
      codeVisible.value = !codeVisible.value;
    };
    const sourceCode = computed(() => {
      return hljs.highlight(props.component.__sourceCode, { language: 'html' }).value;
    });

    return {
      codeVisible,
      toggleCodeVisible,
      sourceCode,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  margin: 16px 0 32px;

  &-code {
    margin-top: 16px;
    padding: 8px 0;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>

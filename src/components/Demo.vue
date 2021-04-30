<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggleCodeVisible">查看代码</Button>
    </div>
    <div v-show="codeVisible" class="demo-code">
      <pre><code class="hljs" v-html="sourceCode"></code></pre>
    </div>
  </div>
</template>

<script lang="ts">
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import { Button } from '../lib/index';
import { computed, ref } from 'vue';

export default {
  name: 'Demo',
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  components: { Button },
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
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>

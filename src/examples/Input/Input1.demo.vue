<demo>常规用法</demo>

<template>
  <co-input placeholder="The Evil Rabbit" value="" />
  <co-input placeholder="The Evil Rabbit" disabled value="" />
  <co-input placeholder="The Evil Rabbit" value="readOnly" readonly />
  <co-input placeholder="The Evil Rabbit" width="100%" />

  <co-input placeholder="The Evil Rabbit" label="userName" value="" />
  <co-input placeholder="https://github" labelRight=".com" value="" />

  <co-input value="The Input secondary" status="secondary" />
  <co-input value="The Input success" status="success" />
  <co-input value="The Input warning" status="warning" />
  <co-input value="The Input error" status="error" />
  
  <co-input placeholder="The Evil Rabbit" size="mini" value="" />
  <co-input placeholder="The Evil Rabbit" size="small" value="" />
  <co-input placeholder="The Evil Rabbit" size="medium" value="" />
  <co-input placeholder="The Evil Rabbit" size="large" value="" />
</template>

<script lang="ts">
import { ref } from 'vue';
import { CoInput } from 'coast-ui-vue3';

export default {
  components: { CoInput },
  setup() {
    const defaultValue = ref(false);
    const handleChange = (value: boolean) => {
      console.log('value change', value);
    };
    return { defaultValue, handleChange };
  },
};
</script>

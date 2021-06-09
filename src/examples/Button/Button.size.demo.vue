<demo>支持 size</demo>

<template>
  <div>
    <div>
      <co-button size="big">大大大</co-button>
      <co-button>普普通</co-button>
      <co-button size="small">小小小</co-button>
    </div>
    <div>
      <co-button size="big" theme="link">大大大</co-button>
      <co-button theme="link">普普通</co-button>
      <co-button size="small" theme="link">小小小</co-button>
    </div>
    <div>
      <co-button size="big" theme="text">大大大</co-button>
      <co-button theme="text">普普通</co-button>
      <co-button size="small" theme="text">小小小</co-button>
    </div>
  </div>
</template>

<script lang="ts">
import { CoButton } from 'coast-ui-vue3';

export default {
  components: {
    CoButton,
  },
};
</script>

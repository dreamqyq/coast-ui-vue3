<template>
  <div class="coast-card" :class="classes">
    <h2 class="coast-card-title" v-if="title">{{ title }}</h2>
    <main class="coast-card-content">
      <slot name="content" />
    </main>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'CoastCard',
  props: {
    title: {
      type: String,
      required: false,
    },
    hoverable: {
      type: Boolean,
      required: false,
    },
    shadow: {
      type: Boolean,
      required: false,
    },
  },
  setup(props) {
    const { hoverable, shadow } = props;
    const classes = computed(() => {
      return {
        'coast-card-hoverable': hoverable,
        'coast-card-shadow': shadow,
      };
    });
    return { classes };
  },
});
</script>

<style lang="scss">
$border-color: #eaeaea;
.coast-card {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  width: 100%;
  transition: all 0.25s;
  border-radius: 5px;

  &-hoverable:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0 5px 10px;
  }

  &-shadow {
    box-shadow: rgba(0, 0, 0, 0.12) 0 5px 10px;

    &.coast-card-hoverable:hover {
      box-shadow: rgba(0, 0, 0, 0.12) 0 8px 30px;
    }
  }

  &-title {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-content {
    padding: 16px;
  }
}
</style>

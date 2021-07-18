<template>
  <div :class="classes" class="coast-card">
    <h2 v-if="title" class="coast-card-title">{{ title }}</h2>
    <main class="coast-card-content">
      <slot />
    </main>
    <footer v-if="$slots.footer" class="coast-card-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue';
import { computed, defineComponent } from 'vue';

type CardTypeType = PropType<
  | 'secondary'
  | 'alert'
  | 'success'
  | 'purple'
  | 'warning'
  | 'violet'
  | 'error'
  | 'cyan'
  | 'dark'
  | 'lite'
>;

interface CardProps {
  title?: string;
  hoverable?: boolean;
  shadow?: boolean;
  type?: CardTypeType;
}

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
    type: {
      type: String as CardTypeType,
      required: false,
      validator: (val: string) => {
        return [
          'secondary',
          'alert',
          'success',
          'purple',
          'warning',
          'violet',
          'error',
          'cyan',
          'dark',
          'lite',
        ].includes(val);
      },
    },
  },
  setup(props) {
    const { hoverable, shadow, type } = props;
    const classes = computed(() => ({
      'coast-card-hoverable': hoverable,
      'coast-card-shadow': shadow,
      [`coast-card-${type}`]: type,
    }));
    return { classes };
  },
});
</script>

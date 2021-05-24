<template>
  <div class="coast-card" :class="classes">
    <h2 class="coast-card-title" v-if="title">{{ title }}</h2>
    <main class="coast-card-content">
      <slot />
    </main>
    <footer v-if="$slots.footer" class="coast-card-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

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
  setup(props: CardProps) {
    const { hoverable, shadow, type } = props;
    const classes = computed(() => {
      return {
        'coast-card-hoverable': hoverable,
        'coast-card-shadow': shadow,
        [`coast-card-${type}`]: type,
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

  &-secondary {
    background: #5b5b5b;
    color: #fff;
  }

  &-alert {
    background: #ff0f74;
    color: #fff;
  }

  &-success {
    background: #0062ec;
    color: #fff;
  }

  &-purple {
    background: #fc18dc;
    color: #fff;
  }

  &-warning {
    background: #f69d32;
    color: #fff;
  }

  &-violet {
    background: #701fbe;
    color: #fff;
  }

  &-error {
    background: #f01217;
    color: #fff;
  }

  &-cyan {
    background: #39dfbb;
    color: #fff;
  }

  &-dark {
    background: #000000;
    color: #fff;
  }

  &-lite {
    background: #fff;
    color: #000;
    border-color: #fff;
    .coast-card-title {
      border-bottom: none;
    }
  }

  &-title {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-content,
  &-footer {
    padding: 16px;
  }

  &-footer {
    border-top: 1px dashed $border-color;
  }
}
</style>

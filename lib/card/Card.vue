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

<style lang="scss">
@import '../style/common.scss';

$border-color: #eaeaea;
.coast-card {
  border: 1px solid $border-color;
  width: 100%;
  transition: all 0.25s;
  border-radius: $radius;

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
    background: $secondary;
    color: #fff;
  }

  &-alert {
    background: $alert;
    color: #fff;
  }

  &-success {
    background: $success;
    color: #fff;
  }

  &-purple {
    background: $purple;
    color: #fff;
  }

  &-warning {
    background: $warning;
    color: #fff;
  }

  &-violet {
    background: $violet;
    color: #fff;
  }

  &-error {
    background: $error;
    color: #fff;
  }

  &-cyan {
    background: $cyan;
    color: #fff;
  }

  &-dark {
    background: $theme;
    color: #fff;
  }

  &-lite {
    background: #fff;
    color: $colorBlack;
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

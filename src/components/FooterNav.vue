<template>
  <footer>
    <div
      class="prev"
      tabindex="0"
      @click="toAdjacentPage('prev')"
      @keypress="onKeypress($event, 'prev')"
    >
      <template v-if="prevName">
        ←
        <span>{{ prevName }}</span>
      </template>
    </div>
    <div
      class="next"
      tabindex="0"
      @click="toAdjacentPage('next')"
      @keypress="onKeypress($event, 'next')"
    >
      <template v-if="nextName">
        <span>{{ nextName }}</span>
        →
      </template>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { onBeforeRouteUpdate, useRouter } from 'vue-router';

type ActionType = 'prev' | 'next';

export default defineComponent({
  setup() {
    const router = useRouter();
    const prevName = ref(router.currentRoute.value.meta.prev);
    const nextName = ref(router.currentRoute.value.meta.next);

    onBeforeRouteUpdate(to => {
      prevName.value = to.meta.prev;
      nextName.value = to.meta.next;
    });

    const onKeypress = (event: KeyboardEvent, type: ActionType) => {
      if (event.key === 'Enter') {
        toAdjacentPage(type);
      }
    };

    const toAdjacentPage = (type: ActionType) => {
      const name = type === 'prev' ? prevName.value : nextName.value;
      router.push({ name });
      window.scrollTo({
        top: 0,
        left: 0,
      });
    };

    return {
      prevName,
      nextName,
      toAdjacentPage,
      onKeypress,
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  margin: 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #0366d6;
  cursor: pointer;
}
</style>

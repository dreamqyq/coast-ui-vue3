<template>
  <footer>
    <div class="prev" @click="toPrevPage">
      <template v-if="prevName">
        ←
        <span>{{ prevName }}</span>
      </template>
    </div>
    <div class="next" @click="toNextPage">
      <template v-if="nextName">
        <span>{{ nextName }}</span>
        →
      </template>
    </div>
  </footer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter, onBeforeRouteUpdate } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const prevName = ref(router.currentRoute.value.meta.prev);
    const nextName = ref(router.currentRoute.value.meta.next);

    onBeforeRouteUpdate(to => {
      prevName.value = to.meta.prev;
      nextName.value = to.meta.next;
    });
    const toPrevPage = () => {
      router.push({ name: prevName.value });
    };
    const toNextPage = () => {
      router.push({ name: nextName.value });
    };

    return {
      prevName,
      nextName,
      toPrevPage,
      toNextPage,
    };
  },
});
</script>

<style lang="scss" scoped>
footer {
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #0366d6;
}
</style>
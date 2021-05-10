<template>
  <div class="layout">
    <TopNav class="nav" toggleAsideBtnVisible />
    <div class="content">
      <AsideNav :visible="asideVisible" />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import AsideNav from '../components/AsideNav.vue';
import TopNav from '../components/TopNav.vue';

export default {
  components: { AsideNav, TopNav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return { asideVisible };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
  }
}

main {
  overflow: auto;
}
</style>

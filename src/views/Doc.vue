<template>
  <div class="layout">
    <TopNav class="nav" />
    <div class="content">
      <AsideNav :visible="asideVisible" @change="asideVisibleChange" />
      <main>
        <router-view />
        <FooterNav />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
import AsideNav from '../components/AsideNav.vue';
import TopNav from '../components/TopNav.vue';
import FooterNav from '../components/FooterNav.vue';

export default {
  components: { AsideNav, TopNav, FooterNav },
  inject: ['asideVisible'],
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');

    const asideVisibleChange = (visible: boolean) => {
      asideVisible.value = visible;
    };
    return { asideVisible, asideVisibleChange };
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

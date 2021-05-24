<template>
  <nav class="topNav" :class="{ shadow: !isTop, fixed: !isHome }">
    <co-icon
      v-if="!isHome"
      name="menu"
      prefix="icon-"
      class="icon toggleAsideBtn"
      @click="toggleAside"
    />
    <div class="logo">
      <router-link to="/">
        <co-icon name="wheel" prefix="icon-" class="icon" />
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc/introduce">文档</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { inject, Ref, onMounted, onBeforeUnmount, ref } from 'vue';
import { throttle } from '../utils';
import { CoIcon } from 'coast-ui-vue3';

export default {
  name: 'TopNav',
  props: {
    isHome: {
      type: Boolean,
      default: false,
    },
  },
  components: { CoIcon },
  inject: ['asideVisible'],
  setup(props) {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const isTop = ref(true);
    if (!props.isHome) {
      onMounted(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
      });

      onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
      });

      const handleScroll = throttle(() => {
        isTop.value = window.scrollY === 0;
      });
    }

    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside, isTop };
  },
};
</script>
<style lang="scss" scoped>
nav.topNav {
  display: flex;
  padding: 16px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 11;
  justify-content: center;
  align-content: center;
  background: #fff;
  transition: all 0.25s;

  .icon{
    font-size: 36px;
  }

  &.fixed {
    position: fixed;
  }

  &.shadow {
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 15px 0px;
  }

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAsideBtn {
    display: none;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      border-left: 12px solid;
      border-top: 10px solid;
      border-right: 12px solid;
      border-bottom: 10px solid;
      border-color: #2dacfd transparent transparent transparent;
    }

    &::after {
      content: '';
      position: absolute;
      border-left: 12px solid;
      border-top: 10px solid;
      border-right: 12px solid;
      border-bottom: 10px solid;
      border-color: white transparent transparent transparent;
      left: 0;
      top: -2px;
    }
  }

  @media (max-width: 500px) {
    > .toggleAsideBtn {
      display: inline-block;
    }
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>

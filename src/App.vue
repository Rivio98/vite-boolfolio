<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import { router } from './router';
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      store
    }
  }
}
</script>
<template>
  <div class='text-center p-2'>
    <AppHeader :menu="store.menuItems" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './scss/generals.scss';
</style>
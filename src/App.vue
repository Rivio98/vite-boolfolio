<script>
import AppHeader from './components/AppHeader.vue';
import { router } from './router';
export default {
  components: {
    AppHeader
  }
}
</script>
<template>
  <div class='text-center p-2'>
    <AppHeader />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './scss/generals.scss';
</style>
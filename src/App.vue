<script>
import AppProject from './components/AppProject.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppProject,
    AppHeader
  }
}
</script>
<template>
  <div class='text-center p-2'>
    <AppHeader />
    <AppProject />
  </div>
</template>

<style lang="scss">
@import './scss/generals.scss';
</style>
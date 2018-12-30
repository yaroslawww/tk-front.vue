<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>

  import Header from './components/Parts/Header.vue'

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style lang="scss">

</style>

<template lang="pug">
  b-navbar.bg-dark(toggleable="md" type="dark")
    b-navbar-brand(href="/")
      img(src="/dist/images/logo.svg")
    b-navbar-toggle(target="navbarTop")
    b-collapse#navbarTop(is-nav)
      b-navbar-nav
        b-nav-item(href="#") Option
        b-nav-item(href="#") Option
        b-nav-item(href="#") Option
        b-nav-item(href="#") Option
      b-navbar-nav.ml-auto
        b-nav-item(href="#") Login
        b-nav-item(href="#") Sign Up
</template>

<!--<script>
  export default {
    data() {
      return {
      }
    },
    created() {

    },
    computed: {
    },
    methods: {
    }
  }
</script>-->

<!-- Scoped Attribute https://www.w3schools.com/tags/att_scoped.asp-->
<style lang="scss" scoped>

</style>

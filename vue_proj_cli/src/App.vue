<template>
  <header>
    <app-navbar></app-navbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import AppNavbar from "./layouts/AppNavbar.vue";
</script>

<script>
export default {
  setup() {
    //
    return {
      //
    };
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: #2c3e50;
}
</style>

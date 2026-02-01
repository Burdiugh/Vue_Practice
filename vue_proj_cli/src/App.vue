<template>
  <main>
    <app-home-page></app-home-page>
  </main>
</template>

<script setup>
import AppHomePage from "./AppHomePage.vue";
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "app-home-page": AppHomePage,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: #2c3e50;
  padding-top: 40px;
}
</style>

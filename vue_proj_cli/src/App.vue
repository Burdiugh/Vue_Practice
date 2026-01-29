<template>
  <header>
    <app-header></app-header>
  </header>

  <main>
    <app-home-page></app-home-page>
  </main>

  <footer>
    <app-footer></app-footer>
  </footer>
</template>

<script setup>
import AppHeader from "./layouts/AppHeader.vue";
import AppFooter from "./layouts/AppFooter.vue";
import AppHomePage from "./AppHomePage.vue";
</script>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter,
    "app-home-page": AppHomePage,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

body {
  margin: 0;
}

header {
  min-height: 50px;
  background: lightcyan;
}

footer {
  min-height: 50px;
  background: PapayaWhip;
}
</style>

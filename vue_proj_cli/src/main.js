import { createApp } from "vue";
import App from "./App.vue";
import AppFooter from "./layouts/AppFooter.vue";
import AppHeader from "./layouts/AppHeader.vue";
import AppHomePage from "./AppHomePage.vue";
import "./theme.css";

const app = createApp(App);

//global
app.component("app-header", AppFooter);
app.component("app-home-page", AppHomePage);
app.component("app-footer", AppHeader);

app.mount("#app");

import { createApp } from "vue";
import App from "./App.vue";

import AppHomePage from "./AppHomePage.vue";
import "./theme.css";

const app = createApp(App);

//global

app.component("app-home-page", AppHomePage);

app.mount("#app");

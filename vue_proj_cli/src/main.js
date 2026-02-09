import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
//import AppHomePage from "./AppHomePage.vue";
import { router } from "./router";
import "./theme.css";
import AppNavbar from "./layouts/AppNavbar.vue";
//import AppTasksPage from "./AppTasksPage.vue";
//import AppTaskCreatePage from "./AppTaskCreatePage.vue";

const app = createApp(App);
const pinia = createPinia();

//global
app.component("app-navbar", AppNavbar);

//app.component("app-home-page", AppHomePage);  // they are registered in router
//app.component("app-tasks-page", AppTasksPage);
//app.component("app-task-create-page", AppTaskCreatePage);

//uses
app.use(pinia);
app.use(router);

app.mount("#app");

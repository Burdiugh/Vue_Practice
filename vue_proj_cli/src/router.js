import { createWebHistory, createRouter } from "vue-router";

import AppHomePage from "./AppHomePage.vue";
import AppTasksPage from "./AppTasksPage.vue";
import AppTaskCreatePage from "./AppTaskCreatePage.vue";
import AppTaskCardPage from "./AppTaskCardPage.vue";

const routes = [
  { path: "/", name: "home", component: AppHomePage },
  { path: "/tasks", name: "tasks-page", component: AppTasksPage },
  { path: "/task-create", name: "task-create", component: AppTaskCreatePage },
  {
    path: "/task-card/:id",
    name: "task-card",
    component: AppTaskCardPage,
    props: true,
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

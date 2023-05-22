import { createRouter, createWebHistory } from "vue-router";

import PersonsPage from "./pages/PersonsPage.vue";
import CreateWork from "./pages/CreateWork.vue";
import UseGrid from "./pages/UseGrid.vue";
import Jobs from "./pages/JobsPage.vue";
import CategoriesPage from "./pages/CategoriesPage.vue";


const routes = [
  { path: "/all", name: "PersonsPage", component: PersonsPage },
  { path: "/1", name: "UseGrid", component: UseGrid },
  { path: "/jobs", name: "jobs", component: Jobs },
  { path: "/category", name: "CategoriesPage", component: CategoriesPage },
  { path: "/create", name: "CreateWork", component: CreateWork },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

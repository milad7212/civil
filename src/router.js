import { createRouter, createWebHistory } from "vue-router";

import PersonsPage from "./pages/PersonsPage.vue";
import UseGrid from "./pages/UseGrid.vue";


const routes = [
  { path: "/", name: "PersonsPage", component: PersonsPage },
  { path: "/1", name: "UseGrid", component: UseGrid },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/Home.vue";
import ListView from "@/components/board/List.vue";
import WriteView from "@/components/board/Write.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "list",
    component: ListView,
  },
  {
    path: "/write",
    name: "write",
    component: WriteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

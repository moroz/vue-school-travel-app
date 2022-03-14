import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import DestinationShow from "@/views/DestinationShow.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/destination/:slug",
    name: "destination.show",
    component: DestinationShow
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

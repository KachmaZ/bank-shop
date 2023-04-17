import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/HomeView.vue";
import InDevView from "../views/InDevView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "catalog",
    component: HomeView,
  },
  {
    path: "/delivery",
    name: "delivery",
    component: InDevView,
  },
  {
    path: "/payment",
    name: "payment",
    component: InDevView,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: InDevView,
  },
  {
    path: "/about",
    name: "about",
    component: InDevView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

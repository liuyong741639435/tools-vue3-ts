import { createRouter, createWebHistory,  RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: '/map-editor',
  },
  {
    path: "/map-editor",
    name: "map-editor",
    component: () => import("../views/map-editor/index.vue"),
  },
];

export default createRouter({
    history: createWebHistory(),
    routes,
})
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("./Pages/CarHome.vue"),
    },
    {
        path: "/addcar",
        component: () => import("./Pages/CarAdd.vue"),
    },
    {
        path: "/editcar/:carId",
        component: () => import("./Pages/CarEdit.vue"),
    },
    {
        path: "/viewcar/:carId",
        component: () => import("./Pages/CarView.vue"),
    },


    {
        path: "/form",
        component: () => import("./Pages/FormPage.vue"),
    },
    {
        path: "/view/:viewId",
        component: () => import("./Pages/ViewPage.vue"),
    },
    {
        path: "/edit/:viewId",
        component: () => import("./Pages/EditPage.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
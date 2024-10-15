import { createRouter, createWebHistory } from "vue-router";

import PageProject from "./pages/PageProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'homepage',
        component: PageProject,
    }]
})

export { router };
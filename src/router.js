import { createRouter, createWebHistory } from "vue-router";

import PageProject from "./pages/PageProject.vue";
import Homepage from "./pages/Homepage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'homepage',
        component: Homepage,
    },
    {
        path: '/myprojects',
        name: 'myprojects',
        component: PageProject,
    }
    ]
})

export { router };
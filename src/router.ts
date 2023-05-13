import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: readonly RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./pages/PageHome.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
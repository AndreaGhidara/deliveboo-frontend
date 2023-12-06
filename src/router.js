import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue'
import AppRestaurants from './pages/AppRestaurants.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name:'',
            component: AppHome,
        },
        {
            path: '/home',
            name:'home',
            component: AppHome
        },
        {
            path: '/restaurants',
            name:'restaurants',
            component: AppRestaurants
        },
    ],

});
export default router;
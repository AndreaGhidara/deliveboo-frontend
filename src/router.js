import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppRestaurants from './pages/AppRestaurants.vue';
import AppCategories from './pages/AppCategories.vue';
import AppSpecificRestaurant from './pages/AppSpecificRestaurant.vue';


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
        {
            path: '/categories',
            name:'categories',
            component: AppCategories
        },
        {
            path: '/specificRestaurant',
            name:'specificRestaurant',
            component: AppSpecificRestaurant
        },
    ],

});
export default router;
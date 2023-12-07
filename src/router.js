import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppRestaurants from './pages/AppRestaurants.vue';
import AppCategories from './pages/AppCategories.vue';
import AppSpecificRestaurant from './pages/AppSpecificRestaurant.vue';
import AppSpecificCategory from './pages/AppSpecificCategory.vue';


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
            path: '/specificRestaurant/:id',
            name:'specificRestaurant',
            component: AppSpecificRestaurant,
            props:true
        },
        {
            path: '/specifcCategory/:id',
            name:'specifcCategory',
            component: AppSpecificCategory,
            props:true
        },
    ],

});
export default router;
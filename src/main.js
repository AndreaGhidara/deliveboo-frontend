import { createApp } from 'vue'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'

//Import STYLE
import './style.scss'
//Import Bootstrap
import * as bootstrap from 'bootstrap'
//Import Vue Router
import  router  from './router'



createApp(App).use(router).use(MotionPlugin).mount('#app')

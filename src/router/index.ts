import { createRouter, createWebHistory } from "vue-router"
import Home from '../pages/Home.vue'
import Counter from '../pages/Counter.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/counter', component: Counter },
  ]
})

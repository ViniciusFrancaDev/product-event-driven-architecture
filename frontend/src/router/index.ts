import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Admin from '../pages/admin/Admin.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

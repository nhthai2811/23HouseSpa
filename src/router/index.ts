import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ProductView from '../views/ProductView.vue'
import ServiceView from '../views/ServiceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Giới thiệu',
      component: HomeView
    },
    {
      path: '/service',
      name: 'Dịch vụ',
      component: ServiceView
    },
    {
      path: '/products',
      name: 'Sản phẩm',
      component: HomeView
    },
    {
      path: '/recruitment',
      name: 'Tuyển dụng',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'Liên hệ',
      component: HomeView
    }
  ]
})

export default router

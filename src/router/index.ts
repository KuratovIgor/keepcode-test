import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainLayout',
      component: () => import('@/layouts/main/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'documents',
          component: () => import('@/views/DocumemtsView.vue'),
        }
      ],
    },
  ]
})

export default router

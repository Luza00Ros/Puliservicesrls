// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      { //404 - PAGE NOT FOUND
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: () => import('/PageNotFound.vue'),
      },
      {
        path: 'pulizieTraslochi',
        name: 'PulizieTraslochi',
        component: () => import('@/components/PulizieTraslochi.vue'),
      },
      {
        path: 'pulizieUffici',
        name: 'PulizieUffici',
        component: () => import('@/components/PulizieUffici.vue'),
      },
      {
        path: 'pulizieProfessionali',
        name: 'PulizieProfessionali',
        component: () => import('@/components/PulizieProfessionali.vue'),
      },
      {
        path: 'preventivo',
        name: 'Preventivo',
        component: () => import ('@/components/Preventivo.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

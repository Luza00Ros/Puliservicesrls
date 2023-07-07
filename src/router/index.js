// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: 'chisiamo',
        name: 'ChiSiamo',
        component: () => import('@/views/ChiSiamo.vue'),
      },
      {
        path: 'contatti',
        name: 'VistaContatti',
        component: () => import('@/views/VistaContatti.vue'),
      },
      { //Menu pulizie
        path: 'uffici',
        name: 'VistaUffici',
        component: () => import('@/views/VistaUffici.vue'),
      },
      {
        path: 'condomini',
        name: 'VistaCondomini',
        component: () => import('@/views/VistaCondomini.vue'),
      },
      {
        path: 'appartamenti',
        name: 'VistaAppartamenti',
        component: () => import('@/views/VistaAppartamenti.vue'),
      },
      {
        path: 'negozi',
        name: 'VistaNegozi',
        component: () => import('@/views/VistaNegozi.vue'),
      },
      { //Menu servizi
        path: 'giardinaggio',
        name: 'VistaGiardinaggio',
        component: () => import('@/views/VistaGiardinaggio.vue'),
      },
      { //Menu servizi
        path: 'manutenzioni',
        name: 'VistaManutenzioni',
        component: () => import('@/views/VistaManutenzioni.vue'),
      },
      { //Menu servizi
        path: 'traslochi',
        name: 'VistaTraslochi',
        component: () => import('@/views/VistaTraslochi.vue'),
      },
      { //404 - PAGE NOT FOUND
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: () => import('@/views/PageNotFound.vue'),
      },
      {
        path: 'preventivo',
        name: 'RichiestaPreventivo',
        component: () => import ('@/views/RichiestaPreventivo.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

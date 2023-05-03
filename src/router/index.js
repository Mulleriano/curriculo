import { createRouter, createWebHistory } from 'vue-router'
import Sobre from '../views/SobreView.vue'
import Conhecimentos from '../views/ConhecimentosView.vue'
import Experiencias from '../views/ExperienciasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Sobre',
      component: Sobre
    },
    {
      path: '/conhecimentos',
      name: 'conhecimentos',
      component: Conhecimentos
    },
    {
      path: '/experiencias',
      name: 'experiencias',
      component: Experiencias
    }
  ]
});

export default router

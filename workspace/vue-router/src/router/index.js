import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/view/HomeView.vue';
import AboutView from '@/view/AboutView.vue';

const routes = [
  {
    path: '/',
    name:'home',
    component:HomeView,
  },
  {
    path:'/about',
    name:'about',
    component:AboutView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
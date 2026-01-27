import { createRouter, createWebHistory } from "vue-router/auto";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/homeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/aboutView.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/accountView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contactView.vue'),
    },
    {
      path: '/post-property',
      name: 'post',
      component: () => import('../views/postView.vue'),
    },
  ],
});

export default router;
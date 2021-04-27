import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout.vue';

Vue.use(Router);
export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'es6',
    component: Layout
  },
  {
    path: '/es6',
    component: Layout,
    name: 'es6',
    redirect: '/es6/about',
    children: [
      { path: 'about', component: () => import('@/views/es6/About'), name: 'about', meta: { title: 'es6 about' } },
      { path: 'home', component: () => import('@/views/es6/Home'), name: 'Home', meta: { title: 'es6 Home' } }
    ]
  },
  {
    path: '/vue',
    component: Layout,
    name: 'vue',
    redirect: '/vue/about',
    children: [
      { path: 'about', component: () => import('@/views/vue/About'), name: 'about', meta: { title: 'vue about' } },
      { path: 'slot', component: () => import('@/views/vue/SlotPage'), name: 'slotPage', meta: { title: 'Slot使用' } }
    ]
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

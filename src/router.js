import Vue from 'vue';
import Router from 'vue-router';
import Layout from './views/Layout.vue';
import Page404 from './views/404.vue'

Vue.use(Router);
export const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'es6',
    component: Layout
  },
  {
    path: '/404',
    component: Page404,
    name: 'page404',
    hidden: true,
    meta: { title: '404' }
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
      { path: 'slot', component: () => import('@/views/vue/SlotPage/index'), name: 'slotPage', meta: { title: '插槽slot' } },
      { path: 'alert', component: () => import('@/views/vue/Alert'), name: 'alertPage', meta: { title: '全局alert' } }
    ]
  },
  {
    path: '*',
    redirect: '404',
    hidden: true
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

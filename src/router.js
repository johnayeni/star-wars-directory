import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/profile/:type/:id',
      name: 'profile',
      component: () => import('./views/Profile'),
    },
    {
      path: '/404',
      component: () => import('./views/NotFound'),
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});

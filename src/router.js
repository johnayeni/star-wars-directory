import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import NotFound from './views/NotFound';

Vue.use(Router);

export default new Router({
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
      component: NotFound,
    },
    {
      path: '*',
      redirect: '/404',
    },
  ],
});

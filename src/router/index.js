import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home';
import Register from '@/components/register';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {Auth: false, title: 'Inicio'},
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {Auth: false, title: 'Registro'},
    }
  ]
})

import Router from "vue-router";
import Home from "../components/Home.vue";
import Error404 from "../components/Errors/Error404.vue";

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/home',
      redirect: '/'
    }, {
      path: '/404',
      name: '404',
      component: Error404
    }, {
      path: '*',
      component: Error404
    }
  ]
});


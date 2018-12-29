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
      path: '/404',
      name: 'home',
      component: Error404
    }, {
      path: '*',
      redirect: '/404'
    }
  ]
});


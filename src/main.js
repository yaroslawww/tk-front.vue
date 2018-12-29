import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import router from './routes/routes';

Vue.use(Router);

new Vue({
  render: h => h(App),
  router
}).$mount('#app');


import Vue from 'vue';
import Router from 'vue-router';
import router from './routes/routes';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';


Vue.use(Router);
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

new Vue({
  render: h => h(App),
  router
}).$mount('#app');


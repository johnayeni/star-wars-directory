import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';
import './assets/styles/main.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueToast);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

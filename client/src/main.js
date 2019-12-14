import Vue from 'vue';
import App from './App.vue';
import router from './router';
import myStore from './store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

console.log(myStore.state.myAuth.isAuthenticated);

new Vue({
  router,
  store: myStore,
  render: h => h(App)
}).$mount('#app');

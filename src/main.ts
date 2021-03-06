import Vue from 'vue';
import App from '@/components/App/index.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

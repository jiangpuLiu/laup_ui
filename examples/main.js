import Vue from 'vue';
import App from './App.vue';
import NnUi from 'laup-ui';
import 'laup-ui/lib/laup-ui.css';
Vue.use(NnUi);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

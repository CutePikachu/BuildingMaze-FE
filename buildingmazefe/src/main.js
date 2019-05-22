import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


//MuseUI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

import Helpers from 'muse-ui/lib/Helpers';
Vue.use(Helpers);

// import Toast from 'muse-ui-toast';
// Vue.use(Toast);

// import Message from 'muse-ui-message';
// Vue.use(Message);

// import Loading from 'muse-ui-loading';
// Vue.use(Loading);

// import theme from 'muse-ui/lib/theme';
// theme.add('bm', {
//   primary: '#673ab7',
//   secondary: '#b39ddb',
//   success: '#66bb6a',
//   warning: '#ff3d00'
// }, 'light');

// theme.use('bm');

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

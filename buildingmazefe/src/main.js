import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


//MuseUI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

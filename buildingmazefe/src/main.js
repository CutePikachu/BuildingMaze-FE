import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


//MuseUI
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

//axios
import axios from 'axios'

Vue.use({
  install (Vue) {
  	Vue.prototype.$api = axios.create({
			baseURL:'http://localhost:8000/api/v1'
		})
  }
})

//import vuex
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App'

import router from './routers'
import store from './store/index'

import BootStap from './plugin/BootStap' 

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(ElementUI)
Vue.use(BootStap)

const app = new Vue({
  router,
  store,
  template:'<App/>',
  components:{
    App
  }
}).$mount("#app")
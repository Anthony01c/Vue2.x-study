import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false//不显示生产环境的提示

new Vue({
  el: '#app',
  render: h => h(App)
})

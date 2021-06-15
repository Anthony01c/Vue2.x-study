import Vue from 'vue'
import App from './App.vue'



new Vue({
  beforeCreate() {
    Vue.prototype.$vm = this
  },

  el: '#app',
  render: h => h(App)
})

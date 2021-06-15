import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false//不显示生产环境的提示

/*创建一个全局的用于绑定事件监听和分发的对象：Global Event Bus (全局事件总线)*/
/*Vue.prototype.vm = new Vue*/

new Vue({

  beforeCreate() {
    Vue.prototype.vm = this //优化
  },

  el: '#app',
  render: h => h(App)
})

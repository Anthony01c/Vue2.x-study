import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'

//声明使用vue插件
Vue.use(VueResource)//内部给所有的组件对象都添加了一个$http的属性对象

new Vue({
  el: '#app',
  render: h => h(App)
})

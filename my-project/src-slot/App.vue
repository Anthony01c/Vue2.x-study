<template>
  <div class="todo-container">
    <div class="todo-wrap">
<!--       <Header @addTodo="addTodo"/>   &lt;!&ndash; //给当前的header对象绑定监听&ndash;&gt;-->
      <Header ref='header'/>
      <List :todos="todos"
              :updateTodo="updateTodo"/>
        <Footer>
          <!-- 在父组件中解析好之后传入的-->
          <input type="checkbox" v-model="isCheckAll" slot="left"/>
          <span slot="middle">
          <span>已完成{{compSize}}</span> / {{ todos.length }}
        </span>

          <button class="btn btn-danger" v-show="compSize" slot="right" >0"
                  @click="clearCompletedTodos">清除已完成任务</button>
        </Footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from "./components/Footer";
import List from "./components/List";
import {saveTodos,readTodos} from "./utils/stroageUtils";

export default {
  name: 'app',
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    clearCompletedTodos(){
      this.todos = this.todos.filter((todo,index)=> !todo.completed)
    },
    checkAll(isCheckAll){
      this.todos.forEach(todo => todo.completed = isCheckAll)
    },
    updateTodo(todo,isCheck){
      todo.completed = isCheck
    }
  },
  components: {Footer, List, Header},
  data () {
    return {
      todos:[]
    }
  },
  computed:{
    compSize(){
      return this.todos.reduce((preTotal,todo,index)=>preTotal+(todo.completed ? 1 : 0),0)
    },
    isCheckAll:{
      get(){
        return this.todos.length === this.compSize  && this.compSize > 0
        //读属性值就会自动调用对应的getter方法
      },
      set(value){
        this.checkAll(value)
      }
    }
  },
  mounted() {
    this.$refs.header.$on('addTodo',this.addTodo)

    //通过vm来绑定事件监听
    this.vm.$on('deletedTodo',this.deleteTodo)
    //模拟异步
    setTimeout(()=>{
      //读取local中保存的todos，更新数据
      this.todos = readTodos()
    },1000);
  },
  watch:{
    todos:{
      deep:true,//深度监视（本身和内部所有层次的数据）
      /*handler(value){
        //将todos保存到local中（以json格式）
        saveTodos(value);
      }*/
      handler:saveTodos

    }
  },
  beforeDestroy() {
    this.$refs.header.$off('addTodo')
    this.vm.$off('deletedTodo')
  }
}
</script>

<style>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

<template>
  <div class="todo-container">
    <div class="todo-wrap">
        <Header :addTodo="addTodo"/>
        <List v-bind:todos="todos" :deleteTodo="deleteTodo"/>
        <Footer :todos="todos" :clearCompletedTodos="clearCompletedTodos" :checkAll="checkAll"/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from "./components/Footer";
import List from "./components/List";

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
    }
  },
  components: {Footer, List, Header},
  data () {
    return {
      todos:[
        {id:1,title:'A',completed:false},
        {id:2,title:'B',completed:false},
        {id:3,title:'C',completed:false},
      ]
    }
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

<template>
  <ul class="todo-main">
    <Item v-for="(todo,index) in todos" v-bind:key="todo.id" v-bind:todo="todo" :index="index" :deleteTodo="deleteTodo"/>

  </ul>
</template>

<script>
import Item from "./Item";
export default {
  //声明接收属性:属性名 ===> 组件对象多了一个todos属性
  props:['todos','deleteTodo'],
  name: "List",
  components: {Item}
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

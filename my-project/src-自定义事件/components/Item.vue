<template>
  <li :style="{background:bgColor}" @mouseenter="enters" @mouseleave="leaves">
    <label>
      <input type="checkbox" v-model="isComplete"/>
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteNode">删除</button>
  </li>
</template>
<!--
绑定事件监听
设计数据
在监听回调中，更新数据
-->
<script>
export default {
  props:{//声明属性的属性名和属性值的类型
    todo:Object,
    deleteTodo:Function,
    index:Number,
    updateTodo:Function
  },
  data(){
    return{
      bgColor:'white',
      isShow:false
    }
  },
  computed:{
    isComplete:{
      get(){
        return this.todo.completed
      },
      set(value){
          this.updateTodo(this.todo,value)
      }
    },

  },
  name: "Item",
  methods:{
    enters(){
      this.bgColor = 'skyblue'
      this.isShow = true
    },
    leaves(){
      this.bgColor = 'white'
      this.isShow = false
    },
    deleteNode(){
      if (window.confirm('你确定要删除么？')){
        this.deleteTodo(this.index)
      }
    }
  }
}
</script>



<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>

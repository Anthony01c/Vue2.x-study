<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading" >用户搜索</h3>
    <div>
      <input type="text" placeholder="输入用户名以搜索" v-model="searchName"/>&nbsp;
      <button @click="search">搜索</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Main",
  data(){
    return{
      searchName:''
    }
  },
  methods:{
    search(){
      const searchName = this.searchName.trim()
      if (searchName){
        //分发自定义事件
        this.$vm.$emit('search',searchName)

        this.searchName = ''
      }
    }
  },


}
</script>

<style scoped>

</style>

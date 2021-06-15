<template>
  <h2 v-if="firstView">请输入关键字以搜索</h2>
  <h2 v-else-if="loading">正在搜索中...</h2>
  <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
  <div class="row" v-else>
    <div class="card" v-for="(user,index) in users" :key="user.username">
      <a :href="user.url" >
        <img :src="user.avatar_url" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.username}}</p>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "List",
  data(){
    return{
      firstView:true,//是否显示第一个界面
      loading:false,//是否正在请求
      users:[],//用户列表
      errorMsg:''//错误消息
    }
  },
  mounted() {
    //绑定一个自定义事件监听
    this.$vm.$on('search',(searchName)=>{
      //更新状态数据（请求中）
      this.firstView = false
      this.loading = true
      //发Ajax请求，获取用户列表
      axios.get('https://api.github.com/search/users',{
        params:{
          q: searchName
        }
      })
        //如果成功，更新状态数据
      .then(res =>{
        const result = res.data
        const users = result.items.map(item => ({
          username:item.login,
          url:item.html_url,
          avatar_url:item.avatar_url
        }))
        this.loading =false
        this.users = users
      },
        //如果失败，展示失败信息
      err =>{
        this.loading = false
        this.errorMsg = err.message
      })


    })
  },
  beforeDestroy() {
    this.$vm.$off('search')
  }
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

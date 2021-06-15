<template>
  <div>
    <p v-if="!repoName">Loading....</p>
    <p v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      repoName: '',
      repoUrl:''
    }
  },
  mounted() {
    //利用vue-resource发送ajax请求获取数据
    this.$http.get('https://api.github.com/search/repositories?q=r&sort=stars')
    .then(response =>{
      const result = response.data
      const {name,html_url} = result.items[0]
      this.repoName = name
      this.repoUrl = html_url
    })
    .catch(error=>{
      alert('请求出错了')
    })
  }
}
</script>

<style>

</style>

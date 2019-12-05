<template>
  <div id="app">
   app
   <router-view></router-view>
   <router-link to="/home">首页</router-link>
   <router-link to="/list">列表</router-link>
   <router-link to="/test">测试</router-link>
   <router-link to="/testbutton">样式</router-link>
    <router-link to="/write">编写</router-link>
   <div>{{aaa}}</div>
  </div>
</template>

<style lang="scss">
  
</style>

<script>
  export default {
    date(){
      return {
        aaa:null
      }
    },
    created(){
        this.aaa = this.$store.state.num
    }
    
  }

</script>



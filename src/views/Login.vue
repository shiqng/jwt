<template>
  <div class="login">
    <el-input style="width:200px" v-model="username"></el-input>
    <el-button class="dl" @click="login">登录</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return{
      username:''
    }
  },
  methods:{
    login(){
      this.$store.dispatch('login',this.username).then((data)=>{
        this.$router.push('/profile')
      })
    }
  }
}
</script>
<style lang="less" scoped>
// @import '../css/minx.less';
.login{
  display: flex;
  align-items: center;
  justify-content: center;
  .dl{
    // color: red;
    .color(red)
  }
}
</style>
<template>
  <div class="login">
    <el-input class="in" v-model="username"></el-input>
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
    // .color(red);
    color: @baseColor3;
    width: @baseWidth + 50px;
  }
  .in{
    width: 200px;
  }
  @media @min768 {
    .in{
      width: 100px;
      font-size: 2rem;
    }
  }
}
</style>
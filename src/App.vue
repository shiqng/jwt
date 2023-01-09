<template>
  <div id="app">
    <lottie :options="defaultOptions"  :width="660" :height="660" class="lottie" @animCreated="animationCreate"/>
    <div class="div" style="width:100px;height:100px;" contenteditable="true">1232132</div>
    <router-link to="/">首页</router-link> |
      <router-link to="/login">登录</router-link> |
      <router-link to="/profile">个人中心</router-link>
    <router-view/>
  </div>
</template>
<script>
import Lottie from './components/lottie.vue';
import temp from './assets/lottie/1.json'
export default {
  name:'app',
  components:{
    'lottie':Lottie
  },
  data(){
    return{
      username:'',
      defaultOptions:{animationData:temp,loop:true,autoplay:true},
    }
  },
  methods:{
    test(){
      this.$store.dispatch('login',this.username).then(()=>{console.log(this.$store.state.username);})
    },
    animationCreate(a){
      console.log(a);
      // a.isPaused?a.play():a.pause();
      a.setDirection(1)
    }
  }
}
</script>
<style lang="less">
// @import './css/minx.less';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // @color:red;
  .div{
    .color(red)
  }

}
#nav {
  padding: 30px;
  
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

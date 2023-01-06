<template>
  <div class="Profile">
    用户名：<span>{{this.$store.state.username}}</span>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted(){
    this.$router.push('/profileSon')
  }
  
}
</script>

<template>
  <div class="home">
    <h1>首页{{ cookie }}</h1>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      cookie:''
    }
  },
  mounted(){
    this.$Cookies.set('admin','111111')
    this.cookie = this.$Cookies.get('admin')
  }
}
</script>

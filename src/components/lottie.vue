<template>
  <div>
    <div :style="style" ref="lavContainer"></div>
    <h1 @click="test">动画重置</h1>
  </div>
  
  
</template>
 
<script>
import lottie from 'lottie-web'
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    height: Number,
    width: Number
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
        anim:''
      }
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
          container: this.$refs.lavContainer,
          renderer: 'svg',
          loop: this.options.loop,
          autoplay: true,
          animationData: this.options.animationData,
          rendererSettings: this.options.rendererSettings
        }
    )
    // this.$emit('animCreated', this.anim)
  },
  methods:{
    test(){
      // this.anim.playSegments([0, 90], true);
      this.$emit('animCreated', this.anim)
    }
  }
}
</script>
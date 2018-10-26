<template>
  <div id="landing">
    <div class="landing-content"> 
      <h2>I'm a <span>F</span>ront <span>E</span>nd <span>D</span>evelper / <span>T</span>echnical <span>A</span>rtist  / <span>S</span>tudent and...</h2>
      <h1>It's Me, Just NAYEA !!</h1>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="sass" scoped>
@import './style/help.scss'
@import './style/common.sass'

li
  display: block

h2
  font-size: px2rem(30)
  text-align: right
  margin-right: px2rem(150)

h1
  color: $yellow
  font-size: px2rem(50)
  margin-right: px2rem(100)
  text-align: right

#landing


.landing-content
  margin-top: px2vw(300, $break-large)
  span
    position: relative
  span::before
    display: inline-block
    content: ""
    position: absolute
    top: px2rem(-8)
    left: 50%
    +transform(translateX(-50%))
    width: px2rem(10)
    height: px2rem(10)
    background: $yellow
    border-radius: 50%


</style>

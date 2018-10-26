<template>
  <div id="projectMain">
    <div class="title"> 
      <h1><span>P</span>roject</h1>
     
    </div>
    <div class="projectMain-content"> 
     <ul class="content-list">
       <li><router-link :to="{ name: 'projectPopcorn'}"><img src="https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/popcorn.png" alt=""><span>Web - Popcorn</span></router-link></li>
       
     </ul>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'projectMain',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../style/help.scss'
@import '../style/common.sass'




h1
  // color: #fff
  // text-shadow: -1px 0 $black, 0 1px $black, 1px 0 $black, 0 -1px $black
  font-size: px2rem(50)
  margin-top: px2vw(200, $break-large)


#projectMain
  +flexboxJustify(space-between)

.projectMain-title, .projectMain-content
  width: 50%
  height: 100vh

.projectMain-content
  background: $light-gray
  overflow-y: scroll

.projectMain-content::-webkit-scrollbar, .mainNewsPopup::-webkit-scrollbar
  +respond-to(desktop)
    width: px2vw(8px, $break-large)

.projectMain-content::-webkit-scrollbar-thumb, .mainNewsPopup::-webkit-scrollbar-thumb
  background-color: $black
  border: 1px solid $black

.projectMain-title
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

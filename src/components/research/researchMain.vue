<template>
  <div id="researchMain">
    <div class="title"> 
      <h1><span>R</span>earch <span>E</span>xperience</h1>
       <div class="title-content"><p>
       I am interested in art and engineering.<br> Especially, I want to study the convergence of these two studies.</p>
      </div>
    </div>
    <div class="researchMain-content"> 
     <ul class="content-list">
       <!-- <router-link :to="{ name: 'WorkMain'}">Work</router-link> -->
       <li><router-link :to="{ name: 'ResearchMozaic'}"><img src="../../assets/mozaic/mosaic_title2.png" alt=""><span>Mosaic jouralism Gallery<br>(working title)</span></router-link></li>
       <!-- <li><a href="/mozaic"><img src="../../assets/mozaic/mozaic_title.png" alt=""><span>Text Mozaic<br>(working title)</span></a></li> -->
       <li><router-link :to="{ name: 'ResearchWave'}"><img src="../../assets/sleepscape/wave_1.png" alt=""><span>Audio-Visual Expression of Biometric Data</span></router-link></li>
       <!-- <li><router-link :to="{ name: 'ResearchMotion'}"><img src="../../assets/motion/motion_1.png" alt=""><span>An Exquisite movement definition & recognition through the Motion-Matrix</span></router-link></li> -->
     </ul>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'researchMain',
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


#researchMain
  +flexboxJustify(space-between)

.researchMain-title, .researchMain-content
  width: 50%
  height: 100vh

.researchMain-content
  background: $light-gray
  overflow-y: scroll

.researchMain-content::-webkit-scrollbar, .mainNewsPopup::-webkit-scrollbar
  +respond-to(desktop)
    width: px2vw(8px, $break-large)

.researchMain-content::-webkit-scrollbar-thumb, .mainNewsPopup::-webkit-scrollbar-thumb
  background-color: $black
  border: 1px solid $black

.researchMain-title
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

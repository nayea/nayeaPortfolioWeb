<template>
  <div id="workMain">
    <div class="title"> 
      <h1><span>W</span>ork <span>E</span>xperience</h1>
      <div class="title-content"><p>
      I have worked in various fields such as web, video, graphic, AR, etc.<br>
     I want to keep challenging new things in the future.</p>
      </div>
    </div>
    <div class="workMain-content"> 
     <ul class="content-list">
       <li><router-link :to="{ name: 'workARSeeSoul'}"><img src="../../assets/ARSeesoul/ARSeesoul_4.jpeg" ><span>AR - Poetry Concert</span></router-link></li>
       <li><router-link :to="{ name: 'workWebTime'}"><img src="../../assets/TimeforPoetry/timefor_5.png" ><span>web - TimetoPoetry</span></router-link></li>
       <li><router-link :to="{ name: 'workCampfire'}"><img src="../../assets/charactor/charactor_1.png" ><span>3D - Character </span></router-link></li>
       <li><router-link :to="{ name: 'workWebmaverick'}"><img src="../../assets/maverick/campfire_1.png" ><span>web - Maverick </span></router-link></li>
       <li><router-link :to="{ name: 'workADFX'}"><img src="https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/FX_1.png" ><span>3D - FX</span></router-link></li>
     </ul>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'workMain',
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


#workMain
  +flexboxJustify(space-between)

.workMain-title, .workMain-content
  width: 50%
  height: 100vh

.workMain-content
  background: $light-gray
  overflow-y: scroll

.workMain-content::-webkit-scrollbar, .mainNewsPopup::-webkit-scrollbar
  +respond-to(desktop)
    width: px2vw(8px, $break-large)

.workMain-content::-webkit-scrollbar-thumb, .mainNewsPopup::-webkit-scrollbar-thumb
  background-color: $black
  border: 1px solid $black



</style>

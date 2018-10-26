<template>
  <div id="researchWaveDetail">
  
  <div class="videoWrapper">
    <div>
    <div class="video-content">
    <button class="btn-left"><img src="../../assets/question-sign.svg" alt="" @click="popupChange01()"></button>
      <p class="popup-leftText" :class="buttonOption01? 'display-active': 'display-none'">
        <span>Normal Stage</span>
        Sleep begins when hypnagogue induces awakening (NREM) into B-REM sleep. It has 4 to 5 cycles at one night with 90 to 120 minutes of sleeping cycle. At first half of sleep is covered by one third of deep sleep, and the latter half of sleep is mostly consisted of dreaming sleep. In a normal graph, It reaches to the deepest sleeping stage (stage 3) within the first 1 to 2 hours after one falls into asleep, and about 90minutes after the person fell asleep, it enters to the first REM sleeping period where there is no significant difference when it is compared to the brain activity in a wakening state. It enters a couple of more times in the stage 3, and going back and forth between the REM sleep and stage 1- 2, and wakes up from the sleep.
      </p>
    <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname">
    </video-player> 
    <h1>Normal Stage</h1>
    </div>
     <div class="video-content">
    <button class="btn-right"><img src="../../assets/question-sign.svg" alt="" @click="popupChange02()"></button>
     <p class="popup-rightText" :class="buttonOption02? 'display-active': 'display-none'">
       <span>Insomnia Stage</span>
        Insomnia is an illness with the symptom of sleep-deprivation which the person finds difficulty to fall asleep, hard to have consistent sleep, or when the person cannot go back to sleep once he or she wakes up from the sleep [6]. When you look at the Polysomnography graph, there is no point where it indicates the sign of deep sleep, whereas there are many awakened sections, and REM sleep is also either short or it is not exist at all.
      </p>
     <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions1"
                 :playsinline="true"
                 customEventName="customstatechangedeventname">
    </video-player> 
    <h1>Insomnia Stage</h1>
    </div>
    </div>
    <div>
     <div class="video-content">
    <button class="btn-left"><img src="../../assets/question-sign.svg" alt="" @click="popupChange03()"></button>
    <p class="popup-leftText" :class="buttonOption03? 'display-active': 'display-none'">
        <span>Narcolepsy Stage</span>
         The narcolepsy patient tends to fall intensive drowsiness, but the narcolepsy patient shows a normal awakened state after the certain period of sleep. The narcolepsy patient tends to shows features such as showing symptom of drowsiness during the daytime, or loss of the level of bodily muscle intensity caused by emotional stimulus but maintains consciousness. The point where REM sleep emerges at the person falls asleep by hypnagogue can be the one evidence of narcolepsy. 
      </p>
     <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions2"
                 :playsinline="true"
                 customEventName="customstatechangedeventname">
    </video-player> 
    <h1>Narcolepsy Stage</h1>
    </div>
    
   <div class="video-content">
    <button class="btn-right"><img src="../../assets/question-sign.svg" alt="" @click="popupChange04()"></button>
     <p class="popup-rightText" :class="buttonOption04? 'display-active': 'display-none'">
       <span>Apnea Index Stage</span>
       Apnea (apnea index, AI) is a frequency of apnea occurs every hour during the sleep at Polysomnography. It is called as (apnea-hypopnea index, AHI) , the sum of apnea which occurs every hour during the sleep[7]. Sleep apnea can occur to anyone. However, it will not be a significant problem as long as it does not exceed a certain range. Within the event section on the Polysomnography, if Apnea section Apnea-the respiratory index is less than 5, then it is considered as mere snoring patient, if it is above 5, then stricter standard is applied for decision. Based on the respiratory index, 5≤AHI&lt;15 is considered as a minor case, 5≤AHI&lt;30 is more severe than 5≤AHI&lt;15 but not severe as AHI≥30, which is classified as a serious level. For the judgment, it has to be a comprehensively considered by looking at apnea-low respiratory index, the level of drowsiness, whether it is accompanied with cardiovascular illness, the level of hypoxia, apnea index, and severe heartburn.
      </p>
     <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions3"
                 :playsinline="true"
                 customEventName="customstatechangedeventname">
    </video-player> 
    <h1>Apnea Index Stage</h1>
    </div>
    </div>
    </div>
 

   
  </div>
</template>

<script>



 import { videoPlayer } from 'vue-video-player'
  
  export default {
    data() {
      return {
        buttonOption01: false,
        buttonOption02: false,
        buttonOption03: false,
        buttonOption04: false,
        // videojs options
        playerOptions: {
          height: '260',
          autoplay: false,
          muted: false,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          loop: true,
          sources: [{
            type: "video/mp4",
            // mp4
            src: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/normal.mp4",
          }],
          poster: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/black.jpg",
        },
         playerOptions1: {
          height: '260',
          autoplay: false,
          muted: false,
          language: 'en',
          loop: true,
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/insomnia.mp4",
          }],
          poster: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/black.jpg",
        },
         playerOptions2: {
          height: '260',
          autoplay: false,
          muted: false,
          language: 'en',
          loop: true,
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/narcolepsy.mp4",
          }],
          poster: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/black.jpg",
        },
         playerOptions3: {
          height: '260',
          autoplay: false,
          muted: false,
          language: 'en',
          loop: true,
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/OSA.mp4",
          }],
          poster: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/black.jpg",
        }
      }
    },
     components: {
    videoPlayer
  },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
     
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        // player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      },
      popupChange01: function(){
       this.buttonOption01 = !this.buttonOption01;
     },
       popupChange02: function(){
       this.buttonOption02 = !this.buttonOption02;
     },
       popupChange03: function(){
       this.buttonOption03 = !this.buttonOption03;
     },
       popupChange04: function(){
       this.buttonOption04 = !this.buttonOption04;
     },
    }
  }
</script>

<style lang="sass" scoped>
@import '../style/help.scss'
@import '../style/common.sass'


#researchWaveDetail
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100vh
  overflow: hidden
  background: url("../../assets/particleSleep.jpg")


.videoWrapper
  position: absolute
  top: 48%
  left: 50%
  width: 1000px
  +transform(translate(-47%,-50%))
 

.video-player
  position: relative
  top: 0
  left: 0 !important
  +transform(translateX(0))
  
  



.video-content
  display: inline-block
  position: relative
  margin-right: px2rem(10)
  margin-left: px2rem(10)
  margin-top: px2rem(30)
  text-align: center

h1
  color: #D371C0
  position: relative
  bottom: px2rem(-5)
  font-size: px2rem(20)
  text-align: center
  width: 100%


button
  cursor: pointer
  outline: none
  +size(px2rem(30))
  background: transparent
  border-radius: 50%
  border: 2px solid #D371C0
  img
    width: 100%
    height: 100%

button:hover
  background: #fff

.btn-left
  position: relative
  top: 40px
  left: px2rem(-260)

.btn-right
  position: relative
  top: 40px
  right: px2rem(-260)


.popup-leftText
  font-size: 14px
  text-align: left
  padding: 10px
  position: absolute
  top: px2rem(30)
  left: 0
  z-index: 2
  width: px2rem(300)
  height: px2rem(200)
  background: #fff
  border: 2px solid #D371C0
  overflow-y: scroll

.popup-rightText
  font-size: 14px
  text-align: left
  padding: 10px
  position: absolute
  top: px2rem(30)
  right: 0
  z-index: 2
  width: px2rem(300)
  height: px2rem(200)
  background: #fff
  border: 2px solid #D371C0
  overflow-y: scroll

.popup-leftText span,.popup-rightText span
  display: block
  font-size: 18px
  font-weight: 700

.popup-leftText::-webkit-scrollbar, .popup-rightText::-webkit-scrollbar
  +respond-to(desktop)
    width: 4px

.popup-leftText::-webkit-scrollbar-thumb, .popup-rightText::-webkit-scrollbar-thumb
  background-color: #D371C0
  border: 1px solid #D371C0

.display-active
  display: block

.display-none
  display: none

</style>

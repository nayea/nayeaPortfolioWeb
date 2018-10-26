<template>
  <div id="researchWave">
    <div class="content-title">
   <h1><span>M</span>osaic <span>J</span>ouralism <span>G</span>allery (working title)
   </h1>
   </div>
   <div class="content-all">
     <ul>
       <li><h2>Institution</h2><span>Chung Ang University</span></li> 
       <li><h2>Advised by</h2><span>Prof. Pack Jin Wan</span></li> 
       <li><h2>Date</h2><span>07.2018 - present</span></li> 
       <li><h2>More</h2>
         <p>
        - When the URL is applied, Main picture and article are mosaic.<br>
        - New ways to communicate text and image information together<br>
        - Javascript/Node Js/P5 Js/mongoDB<br>
        - <a href="https://github.com/nayea/MosaicJournalismGallery" class="web-url" target="_blank">https://github.com/nayea/MosaicJournalismGallery</a>
          </p>
         </li> 
      
     </ul>
     
    <div class="content-images-2">
      <img src="../../assets/mozaic/mosaic_1.png" alt="">
      <img src="../../assets/mozaic/mosaic_2.png" alt="">
    </div>
    <div class="content-images">
      <img src="../../assets/mozaic/site_1.png" alt="">
      <img src="../../assets/mozaic/site_2.png" alt="">
    </div>
   

   </div>
  </div>
</template>

<script>

 import '../style/video-js.css'

 
 import { videoPlayer } from 'vue-video-player'
  
  export default {
    data() {
      return {
        // videojs options
        playerOptions: {
          height: '300',
          autoplay: false,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/ARSeesoul_video.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/ARSeesoul_1.jpeg",
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
      }
    }
  }
</script>

<style lang="sass" scoped>
@import '../style/help.scss'
@import '../style/common.sass'


.content-images
  img
    border: 1px solid $light-gray








</style>

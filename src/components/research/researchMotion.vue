<template>
  <div id="researchMotion">
    <div class="content-title">
      <h1><span>A</span>n <span>E</span>xquisite movement definition & recognition through the <span>M</span>otion-<span>M</span>atrix
   </h1>
   </div>
   <div class="content-all">
     <ul>
       <li><h2>Institution</h2><span>Chung Ang University  |  <a href="http://swstarlabforum.com/board/bbs/page.php?hid=case22" class="web-url" >SW Starlab</a></span></li> 
       <li><h2>Advised by</h2><span>Prof. Chai Young-Ho</span></li> 
       <li><h2>Date</h2><span>04.2018 - present</span></li> 
       <li><h2>More</h2>
         <p>
        The gesture input, which is a means for interacting with the computer and human beings, is gradually developing. However, efforts to achieve accurate gesture recognition on existing platforms are reaching their limits. The Motion Matrix defines and extends conventional gesture recognition, and can be used to associate the whole motion with the unit-module interactions. The aim is to improve the accuracy of recognition by analyzing the difference in the human gesture by the exquisite Motion Matrix. Simple motion by using various methods such as video analysis and sensory analysis are measured. In addition, we find out the parts that were ambiguous and problematic in conventional motion recognition and gesture recognition. After that, we will look at what can be improved and complemented by using the Motion Matrix, and we aim to improve it so that it can be applied to more complicated and sophisticated human motion.
          </p>
         </li> 
      
     </ul>
 
   

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











</style>

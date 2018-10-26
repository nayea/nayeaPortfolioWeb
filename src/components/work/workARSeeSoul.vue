<template>
  <div id="workARSeeSoul">
    <div class="content-title">
   <h1><span>A</span><span>R</span> <span>S</span>ee<span>S</span>oul</h1>
   </div>
   <div class="content-all">
     <ul>
       <li><h2>Company</h2><span>Young&Rich</span></li> 
       <li><h2>Project</h2><span>AR Poetry Concert</span></li> 
       <li><h2>Role</h2><span>AR Development, Design</span></li> 
       <li><h2>More</h2>
         <p>
          - Since 2016, the timeforPoetry(Service Title) team has conducted a total of 11 performances of poetry, reading, music and visual convergence. AR was first introduced in the latest 11th performance. A poetry recital combining music and visual expressions, not just reading, showed that AR technology can develop not only into game content but also into literature and performance stages.<br>
          - Unity, Maya
          </p>
        </li> 
      
     </ul>
    <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname">
    </video-player>
    <div class="content-images">
      <img src="../../assets/ARSeesoul/ARSeesoul_1.jpeg" alt="">
      <img src="../../assets/ARSeesoul/ARSeesoul_2.jpeg" alt="">
      <img src="../../assets/ARSeesoul/ARSeesoul_3.jpg" alt="">
      <img src="../../assets/ARSeesoul/ARSeesoul_4.jpeg" alt="">
    </div>

   </div>
  </div>
</template>

<script>

//  import '../style/video-js.css'

 
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

@import '../style/video-js.css'









</style>

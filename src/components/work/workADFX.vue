<template>
  <div id="workADFX">
    <div class="content-title">
   <h1><span>A</span><span>D</span> - <span>F</span><span>X</span></h1>
   </div>
   <div class="content-all">
     <ul>
       <li><h2>Company</h2><span>Seoul Vision</span></li> 
       <li><h2>Project</h2><span>AD Post Product</span></li> 
       <li><h2>Role</h2><span>3D Team - FX</span></li> 
       <li><h2>More</h2>
         <p>
         - Express particle and fluid movement such as water, fire, wind, etc.<br>
         - Participate in a total of nine projects, including Northcape, Lyricos, Mamond (Chinese version), and Elastin etc.<br>
         - Maya : particle(mel script), fluid / Realflow / Nuke / Photoshop 
          </p>
          <p>
           
          </p></li> 
      
     </ul>
   
  
    <video-player  class="video-player-box"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname">
    </video-player>

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
            src: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/AD.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/FX_1.png",
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

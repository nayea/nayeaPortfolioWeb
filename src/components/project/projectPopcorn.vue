<template>
  <div id="projectpopcorn">
    <div class="content-title">
   <h1><span>W</span>eb -  <span>P</span>opcorn</h1>
   </div>
   <div class="content-all">
     <ul>
       <li><h2>Institution</h2><span>FastCampus</span></li> 
       <li><h2>Date</h2><span>12.2016</span></li> 
       <li><h2>Role</h2><span>Front End Develper, UI Designer</span></li> 
       <li><h2>More</h2>
         <p>
          - Provide movie information and rating sites<br>
          - HTML, SASS, Javascript, Jquery, Angular Js, gulp, Webpack<br>
          - Sketch, Zeplin<br>
          - git, github<br>
          - <a href="https://github.com/We-Lab/popcorn-frontend" class="web-url" target="_blank">https://github.com/We-Lab/popcorn-frontend</a><br>
          </p>
        </li> 
      
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
            src: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/portfolio-Popcorn-nayeaoh.mp4",
          }],
          poster: "https://s3.ap-northeast-2.amazonaws.com/nayeayo.com/apiImages/popcorn.png",
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

<template>
  <div id="researchWave">
    <div class="content-title">
   <h1><span>A</span> <span>S</span>tudy on <span>A</span>udio-<span>V</span>isual <span>E</span>xpression of <span>B</span>iometric <span>D</span>ata <span>B</span>ased on the <span>P</span>olysomnography <span>T</span>est
   </h1>
   </div>
   <div class="content-all">
     <ul>
       <li><h2>Institution</h2><span>Chung Ang University</span></li> 
       <li><h2>Advised by</h2><span>Prof. Pack Jin Wan</span></li> 
       <li><h2>Date</h2><span>04.2018 - 10.2018</span></li> 
       <li><h2>More  - <router-link :to="{ name: 'ResearchWaveDetail'}" class="viewLink">View</router-link></h2> 
         <p>
         The goal of the study is to provide a new type of audio-visualization method through case analysis and work production based on Polysomnography(PSG) data that is difficult to interpret or not familiar to the public. Most art works are produced with conscious actions during waking hours. On the other hand, during sleep, we get into the world of unconsciousness. Therefore, through the experiment,  want to discover if could get something new when we were in the subconscious state, and if so,  wondered what kind of art could be made through it.<br>
 The study method is to consider definition of sleep and sleep data first. The sleep data were classified into normal group and Narcolepsy, Insomnia, and sleep apnea by focusing on sleep disorder graphs that is measured by sleep polygraph. After that, I refined and converted the acquired biometric data into a text-based script. The degree of sleep in the text form of the script was rendered as a 3D animated image using Maya. In addition, the heart rate data script was transformed into a midi format, and the audition was implemented in the garage band. After Effects combines the image and sound to create four single channel images of 3 minutes and 20 seconds each.<br>
 As a result of the research, I made an opportunity for anyone easy to understand the results, having difference with the normal data, through art instead of using difficult medical term. It also showed the possibility of artistic expression even when conscious actions did not occur. Through the results of this research, I expect the expansion and diversity of artistic audiovisual expression of biometric data.
          </p>
        - <a href="http://www.dbpia.co.kr/Journal/ArticleDetail/NODE07542078?TotalCount=1&Seq=1&q=%5B%EC%98%A4%EB%82%98%EC%98%88%C2%A7coldb%C2%A72%C2%A751%C2%A73%5D&searchWord=%EC%A0%84%EC%B2%B4%3D%5E%24%EC%98%A4%EB%82%98%EC%98%88%5E*&Multimedia=0&isIdentifyAuthor=0&Collection=0&SearchAll=%EC%98%A4%EB%82%98%EC%98%88&isFullText=0&specificParam=0&SearchMethod=0&Sort=1&SortType=desc&Page=1&PageSize=20" class="web-url" target="_blank">view Paper</a>
         </li> 
      
     </ul>
  
    
  <div class="content-images">
    
      <img src="../../assets/sleepscape/wave-image-1.png" alt="">
      <img src="../../assets/sleepscape/wave-image-2.png" alt="">
      <img src="../../assets/sleepscape/wave-image-2-particle.png" alt="">
      <img src="../../assets/sleepscape/wave-image-3.png" alt="">
      <img src="../../assets/sleepscape/wave-image-4.png" alt="">
      <img src="../../assets/sleepscape/wave-image-5.png" alt="">
    </div>

   </div>
  </div>
</template>

<script>



 
 import { videoPlayer } from 'vue-video-player'
  
  export default {
    data() {
      return {
       
       
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


.viewLink
  font-size: px2rem(14)
  color: $gray

.viewLink:hover
  color: $yellow





</style>

<template>
  <div id="app">
    <div class="desktop">
    <div class="menu">
       <Up></Up>
    </div>
    <div class="content">
      <transition enter-active-class="animated FadeInLeft">
        <router-view></router-view>
     </transition>
    </div>
    </div>
      <div class="mobile">
        <h1 class="ready">preparing. (준비중입니다)</h1>
    </div>

  
  </div>
</template>

<script>

import Up from './components/Header.vue'
import Down from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Up,
    Down
  },
}
</script>

<style lang="sass">

@import '@/components/style/help.scss'

body
  margin: 0

#app 
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #333333
  font-family: 'Poppins', sans-serif
  
  

.menu
  flex: 1 1 13%
  -ms-flex: 1 1 13%
  -webkit-flex: 1 1 13%

.content
  flex: 1 1 87%
  -ms-flex: 1 1 87%
  -webkit-flex: 1 1 87%


.desktop
  
  +respond-to(desktop)
    display: block
    +flexboxJustify(space-between)
  +respond-to(mobile)
    display: none

.mobile
  +respond-to(desktop)
    display: none
  +respond-to(mobile)
    display: block
 

.ready
  position: absolute
  top: 50%
  left: 50%
  +transform(trnaslate(-50%,-50%))

</style>

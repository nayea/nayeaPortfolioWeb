<template>
  <div id="up">
    <a href="/" class="logo"><div>O<span>H</span>♥<br>N<span>A</span> Y<span>EA</span></div></a>

    <ul class="header-menu">
      <li><router-link :to="{ name: 'WorkMain'}">Work</router-link></li>
      <li><router-link :to="{ name: 'ResearchMain'}">Research</router-link></li>
      <li><router-link :to="{ name: 'ProjectMain'}">Project</router-link></li>
    </ul>

			<ul>
				<li><a href="mailto:onayeayo@gmail.com?Subject=Hello%20nayea" target="_top"><img src="../assets/icon-mail.svg" alt="mail" class="header-mail"></a></li>
			</ul>
		
  

    </div>

</template>



<script>

export default {
  data(){
    return{
      buttonSearch: true,
      buttonMyPoetry: false,
      focused: false,
      inputReset: null,
      url: null,
      urlPara: null,
      backStyle: ''
    }
  },
   created () {
    this.backgroundStyle()
  },
  watch: {
    '$route': 'backgroundStyle',
  },
   methods: {
     mouseoverMyPoetry: function(){
       this.buttonMyPoetry = true;
     },
      mouseleaveMyPoetry: function(){
       this.buttonMyPoetry = false;
     },
     backgroundStyle: function(){
       this.url = window.location.pathname;
       this.urlPara = this.url.split('/').reverse();
       if(this.urlPara[0] === 'SignUp'){
         this.backStyle = `background: #FFD8CB;`
       }
       else{
         this.backStyle = `background: #DFE0E5;`
       }
     }
  },
  mounted: function(){
  }
};
</script>

<style lang="sass" scoped>


@import './style/help.scss'
@import './style/common.sass'



#up
  margin-left: px2rem(10px)

.logo
  margin-top: px2rem(20px)
  border: 2px solid #333333
  display: inline-block
  box-sizing: border-box
  line-height: 1.6rem
  padding: 0.3125rem
  

.logo div
  font-size: px2rem(24px)


.logo span
	display: none



.logo:hover span
	display: inline-block

 
.header-menu
  position: absolute
  top: 50%
  left: 0 
  li
    margin-bottom: px2rem(10px)

 
.header-mail
  position: absolute
  bottom: px2rem(20px)
  left: 0 
  +size(px2rem(20))

.my-active-class
  color: $yellow
</style>


<template>
  <div class="home">
    <div id="pageheader">
      <HEADER msg="this is from header.vue" v-bind:isShow ='true'/>
    </div>
    <swiper :options="swiperOption" class="swiperContent">
      <swiper-slide><img src="@/assets/images/1.jpg" class ='imgstyle'></swiper-slide>
      <swiper-slide><img src="@/assets/images/2.jpg" class ='imgstyle'></swiper-slide>
      <swiper-slide><img src="@/assets/images/3.jpg" class ='imgstyle'></swiper-slide>
      <swiper-slide><img src="@/assets/images/4.jpg" class ='imgstyle'></swiper-slide>
      <swiper-slide><img src="@/assets/images/5.jpg" class ='imgstyle'></swiper-slide>
      <swiper-slide><img src="@/assets/images/6.jpg" class ='imgstyle'></swiper-slide>
      <swiper-slide><img src="@/assets/images/7.jpg" class ='imgstyle'></swiper-slide>
      <swiper-slide><img src="@/assets/images/8.jpg" class ='imgstyle'></swiper-slide>
      <div class="swiper-scrollbar"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </swiper>
    <div id="pagefooter">
      <FOOTER/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import HEADER from '@/components/header.vue'
import FOOTER from '@/components/footer.vue'
Vue.use(VueAwesomeSwiper /* { default global options } */)

export default {
  name: 'home',
  components: {
    HEADER,
    FOOTER
  },
  data: function () {
    return {
      inputData: {
      },
      swiperOption: {
        autoplay: true,
        speed: 1000,
        loop: true,
        autoheight: true,
        autowidth: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  height: 100%;
}
.imgstyle{
   display:inline-block;
   max-height: 100%;
   width: auto;
}
.swiperContent {
  margin-top: 124px;
  margin-bottom: 50px;
  max-height: calc( 100% - 175px );
  height: calc( 100% - 175px );
  position: fixed;
  top: 0px;
  left: 0px;
}
</style>

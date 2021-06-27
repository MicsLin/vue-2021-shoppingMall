<template>
    <swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange" >
        <swiper-slide>
            <img src="../assets/imgs/first1.jpg" style="width:100%">  
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/imgs/first2.jpg" style="width:100%">
        </swiper-slide>
        <swiper-slide>
            <img src="../assets/imgs/first3.jpg" style="width:100%">
        </swiper-slide>

          <div class="absolute">
            <div class="fadeDown_logo" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000">
              <img src="../assets/imgs/logo2.png" alt="" style="width:100%">
            </div>
          </div>
          <div class="absolute_two">
            <div class="fadeDown_word" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="1000">
                <div class="fadeDown_wordup">
                    <span>植 萃 緣</span>
                    <br>
                    <span style="text-decoration: underline;font-size:60px;">E m e r a l d     G r e e n</span>
                </div>
            </div>
          </div>
    </swiper>
    
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import AOS from 'aos';
   
  // You can also use <link> for styles
    import 'aos/dist/aos.css'; 
 AOS.init();
   

  // Import Swiper styles
  import 'swiper/swiper.scss';
  export default {
    name:'Banner',
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  }
</script>
<style scoped>
    swiper-slide{
        width: 100%;
    }
    .fadeDown_logo{
        width: 200px;
        
        
    }
      .fadeDown_logo img{
        border-radius: 50%;
        position: relative;
        top: -300px;
        z-index: 300;
        opacity: 0.5;
      }
    .absolute{
      position: absolute;
      top:500px;
      left: calc(50% - 100px);
      z-index: 99;
    }
    .absolute_two{
      position: absolute;
      top:600px;
      left: calc(50% - 350px);
      z-index: 99;
    }
      .fadeDown_word{
        width: 700px;
        color: white;
        font-size: 80px;
        text-align: center;
      }
        .fadeDown_wordup{
          position: relative;
          top: -250px;
        }
</style>
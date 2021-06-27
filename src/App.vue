<template>
  <div :class="{active : hide}">
    <Opening />
  </div>
  <div :class="{active : !hide}">
    <Navbar :showing="showing" :shift="shift" @navshift="changeshift" />
    <Content :shift="shift" @closepopup="closeshift" :shownews="shownews" :showcontact="showcontact" :showshoppingcart="showshoppingcart" @firstpopup="firstpopup" />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Content from'./view/Content.vue'
import Footer from'./view/Footer.vue'
import Opening from'./components/Opening.vue'


export default {
  name: 'App',
  data(){
    return{
      showing:false,
      shift:false,
      shownews:false,
      showcontact:false,
      showshoppingcart:false,
      hide:false
    }
  },
  methods:{
    clearAll(){
      this.shownews = false
      this.showcontact = false
      this.showshoppingcart = false
    },
    changeshift(param,pagename){
      this.shift = param
      this.clearAll()
      if(pagename =="shownews"){
        this.shownews = true
      }
      if(pagename =="showcontact"){
        this.showcontact = true
      }
      if(pagename =="showshoppingcart"){
        this.showshoppingcart = true
      }
    },
    closeshift(param){
      this.shift = param
      this.clearAll()
    },
    firstpopup(param){
      let firstpopups = param
      firstpopups.forEach(firstpopup => {
        this.shift = firstpopup.shift
        this.shownews = firstpopup.shownews
      });
    },

    // get(){
    //   function change() {
    //     console.log('AAAAAA');
    //   }
    //   window.setTimeout(change,5000)

      // window.setInterval(function(){
      //    console.log(hide);
      // },1000)

    // },


  },
  // 用來綁定
  created(){
      // 在setTimeout裡 只能這樣用this
      window.setTimeout(() => this.hide=true,5000)

      // 失敗的
      // window.setTimeout(function(){
      //   this.hide=true
      // },5000)

      // window.setInterval(function(){
      //    console.log('BB');
      // },6000)

        window.onscroll=function () {
           // NavBar。Navbar顯示條件
            var nav_two = document.querySelector(".nav_two")
                // 如果解析度<768才會執行，以免768以下navbar2還會顯示出來，752可能是因為算進拉條的寬度
            if(document.body.clientWidth > 752){
                //   滾輪位置
                if(document.documentElement.scrollTop>50){
                    nav_two.style.display="flex"
                }else{
                    nav_two.style.display="none"
                }
            }

            // var sticky =document.querySelector('#sticky')
            // var contacntus =document.querySelector('#contacntUs')
            // let topsticky =sticky.offsetTop
            // if(document.documentElement.scrollTop>50){
                // topsticky=200
                // console.log(this.$refs.st.$el.offsetTop);
            // }else{
                
            // }

        }
  },
 
  components: {
    Navbar,
    Content,
    Footer,
    Opening
  },


}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
*{
  box-sizing: border-box;
}
.active{
  display: none;
}
  /* .navbar{
    position: sticky;
    top:100px;
    display: none;
    z-index: 5;
  } */


</style>

<template>
    <main :class="{shift: shift}">
        <div class="container">
            <div class="margin_bottum"><Banner /></div>
            <div class="margin_bottum"><Firstpage @firstpopup="firstpopup" /></div>
        </div>
        <div class="container"  >
         
                <div class="closePopup" @click="closePopup">
                <img src="../assets/imgs/img3png.png">
                <div>返回</div>
                </div>
    
            <div class="showPage" :class="{active:shownews}">
                <News />
            </div>
            <div class="showPage" :class="{active:showcontact}">
                <Contactus />
            </div>
            <div class="showPage" :class="{active:showshoppingcart}">
                <Shoppingcart />
            </div>
        </div>
    </main>
</template>

<script>
import News from'../components/News.vue'
import Contactus from'../components/Contactus.vue'
import Shoppingcart from'../components/Shoppingcart.vue'
import Banner from'../components/Banner.vue'
import Firstpage from'../components/Firstpage.vue'

export default {
    name:'Content',
    emit:['closepopup'],
    props:{
        shift:Boolean,
        shownews:Boolean,
        showcontact:Boolean,
        showshoppingcart:Boolean,
    },
   
    data(){
        return{
        }
    },
    components:{
        News,
        Contactus,
        Shoppingcart,
        Firstpage,
        Banner
    },
    methods:{
        closePopup(){
            this.$emit('closepopup',!this.shift)
        },
        firstpopup(param){
            let firstpopup = param
            this.$emit('firstpopup',firstpopup)
        }
    }
}
</script>

<style scoped>
main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
}

    main .container {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width: 100%;

        

        -ms-flex-negative: 0;
        flex-shrink: 0;
        -webkit-transition: -webkit-transform 300ms;
        transition: -webkit-transform 300ms;
        transition: transform 300ms;
        transition: transform 300ms, -webkit-transform 300ms;
        /* closePopup的位置 */
        position: relative;
    }

    main.shift .container {
        -webkit-transform: translate(-100%, 0);
        transform: translate(-100%, 0);
    }
    
    .closePopup{
        position: absolute;
        z-index: 999;
        top:50px;
        right: 50px; 
/* background-color: orangered; */
        width: 60px;
        height: 60px;
        cursor: pointer;
        /* overflow: hidden; */
       
        background-color: plum;
        border-radius: 50%;
    }
        .closePopup img{
            width: 100%;
        }
        .closePopup div{
            color: white;
            font-size: 20px;
            text-align: center;
            transform: rotate(-15deg) translateX(15px) translateY(-5px);
            background-color: plum;
        }
    .closePopup:hover{
        animation-duration: 3s;
        transform: scale(1.05);
        /* animation-name: closehover;
        animation-duration: 3s;
        background-color: red;  */
    }
    .showPage{
        display: none;
    }
    .showPage.active{
        display: inherit;
    }
    .margin_bottum{
        margin-bottom: 20px;
    }
    @keyframes closehover {
        0%{
            width: 40px;
            height: 40px;
        }
        50%{
            width: 50px;
            height: 50px;
        }
        100%{
            width: 40px;
            height: 40px;
        }
    }
</style>
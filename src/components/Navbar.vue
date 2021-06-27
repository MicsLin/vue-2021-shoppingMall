<template>
    <nav>
        <div class="nav_one" >
            <div class="button" v-for="page in pages" @click="popup(page.pagename)">
                <span>{{page.pagecontent}}</span>
            </div>
        </div>

        <div class="nav_two">
            <div class="nav_hamburger">
                <Hamburger :hamburgerpages="pages" @hamburgershift="popup" />
            </div> 
            <div class="logo_two">
                <img src="../assets/imgs/logo2.png" alt="" style="width:100%">
            </div>
            <a href="/" class="logoName">植萃緣 Emerald Green</a>
        </div>

        <div class="nav_three">
            <div class="navThree_hamburger">
                <Hamburger :hamburgerpages="pages" @hamburgershift="popup" />
            </div>
            <div class="nav_three_right">
                <div class="logo_three">
                    <img src="../assets/imgs/logo2.png" alt="" style="width:100%">
                </div>
                <div class="logoName_three">植萃緣 Emerald Green</div>
            </div>   
        </div>
    </nav>
</template>

<script>
import Hamburger from './Hamburger.vue'
export default {
    name:'Navbar',
    emit:['navshift'],
    components:{
        Hamburger
    },
    props:{
        shift:Boolean
    },
    data(){
        return{
            navshift:true,
            pages:[
                {
                    pagename:"shownews",
                    pagecontent:"最新消息"
                   
                },
                 {
                    pagename:"showcontact",
                    pagecontent:"聯絡我們"
                   
                },
                 {
                    pagename:"showshoppingcart",
                    pagecontent:"購物車"
                   
                },
            ]
        }
    },
    methods:{
        popup(param){ 
            let pagename = param
            this.$emit("navshift",this.navshift,pagename)  
        },
       
    },
    
}
</script>

<style scoped>
    nav{
        width: 100%;
        max-width: 1920px;
        padding: 0 50px;
        font-size: 25px;
        font-weight: bold;
        font-family: "Noto Sans TC", "Noto Sans JP";
        color:#6fd8d5;
        /* background-color:#6fd8d5; */

    }
        .nav_one{
            height: 50px;
            display: flex;
           
            position: fixed;
            z-index: 25;
            /* 消失 顯示 */
            /* display: none; */
        }
            .button{
                line-height: 50px;
                margin-right: 50px; 
                opacity: 0.8;    
                /* 底線動畫 */
                background-image: linear-gradient(#6fd8d5, white);
                background-position: left bottom;
                background-size: 0 5px;
                background-repeat: no-repeat;
                transition: background-size 0.15s linear; 
            }
            .button:hover{
                font-size: 27px;
                cursor: pointer;
                opacity: 1;
                /* 底線動畫 */
                background-size: 100% 5px;
            }
        .nav_two{
            width: 100%;
            max-width: 1920px;
            padding: 0 50px;
            display: none;
            justify-content: space-between;
            height: 50px;
            background-color: white;

            position: fixed;
            top: 0;
            left: 0;
            z-index: 50;
        }
            .logoName{
                line-height: 50px;
                text-decoration: none;
                color: #6fd8d5;
            }
            .logo_two{
                width: 120px;
               opacity: 0.9;

                position: absolute;
                left:calc(50% - 60px);
                top:10px;
                z-index: 10;
                
            }
                .logo_two img{
                    border-radius: 100%;
                }
            .nav_hamburger{
              position: relative;
              top:13px;
              z-index: 99;
            }
        .nav_three{
            display: none;
            background-color:#6fd8d5;
            justify-content: space-between;
            height: 50px;
            padding: 0 20px;
        }
            .navThree_hamburger{
                position: relative;
                top:13px;
                z-index: 99;
            }
            .nav_three_right{
                display: flex;
                line-height: 50px;
            }
                .logo_three{
                    width: 35px;
                    position: relative;
                    top: 7px;
                    margin-right: 10px;
                }
                    .logo_three img{
                        border-radius: 100%;
                    }
    @media screen and (max-width:768px){
        nav{
            padding: 0 0;
            font-size: 20px;
            font-weight: normal;
            font-family: "Noto Sans TC", "Noto Sans JP";
            color:white;
        }
            .nav_one{
                display: none;
            }
            .nav_two{
                display: none;
            }
            .nav_three{
                width: 100%;
                display: flex;
                /* nav sticky */
                position: fixed;               
                top: 0;
                z-index: 25;
            }      
    }
</style>
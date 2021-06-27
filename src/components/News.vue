<template>
    <div class="navbarBox"></div>
    
    <div class="banner">
        <div class="banner_text">
            <div class="btext_position">
                <h2>天然植物萃取，好滋潤！</h2>
                <h3>全場滿1000,免運費(促銷代碼nlk30201114)</h3>
                <p>每次體驗都將成為一個獨特的美好感受</p>
            </div>
        </div>
        <div class="banner_pic">
            <img src="../assets/imgs/bannerpic.jpg" alt="" style="width:100%">
        </div>

    </div>
    <div class="cardGroup" >
        <h2 class="card_title">全抗精油噴霧</h2>
        <div class="d-flex">
            <div class="card_single">
                <div class="card_pic">
                    <img :src="oil[0].card_pic" alt="" style="width:100%" />
                </div>
                <h3>{{oil[0].card_h3}}</h3>
                <div class="card_content">{{oil[0].card_content}}</div>
            </div>
            <div class="card_single">
                <div class="card_pic">
                    <img :src="oil[1].card_pic" alt="" style="width:100%" />            
                </div>
                <h3>{{oil[1].card_h3}}</h3>
                <div class="card_content">{{oil[1].card_content}}</div>
            </div>
        </div>
        
    </div>
    <div class="cardGroup">
        <h2 class="card_title">天然潔淨組</h2>
        <div class="d-flex">
            <div class="card_single">
                <div class="card_pic">
                    <img :src="clean[0].card_pic" alt="" style="width:100%" />
                </div>
                <h3>{{clean[0].card_h3}}</h3>
                <div class="card_content">{{clean[0].card_content}}</div>
            </div>
        </div>
        
    </div>
    <div class="bg"></div>
</template>

<script>
import lax from 'lax.js'

export default {
    name:'News',
    components:{
    },
    data(){
        return{
            oil:[
                {   
                    // 圖片傳值 要加require，然後用<:src="card_pic" />傳值
                    card_pic:require("../assets/imgs/oil1.jpg"),
                    card_h3:"茶樹清爽全抗噴霧",
                    card_content:"NTD $199元起"
                },
                {
                    card_pic:require("../assets/imgs/oil2.jpg"),
                    card_h3:"保衛全抗精油噴霧",
                    card_content:"NTD $199元起"
                }
            ],
            clean:[
                {
                    card_pic:require("../assets/imgs/clean.jpg"),
                    card_h3:"橙香洗碗精",
                    card_content:"NTD $110元"
                }
            ]
        }
    },
   
}
</script>

<style scoped>
.navbarBox{
    width: 100%;
    height: 50px;
    background-color:white ;
}
.bg{
    width: 100%;
    height: 5000px;
    position: absolute;
    top: 50px;
    background-image: url('../assets/imgs/bgIme2.jpg');
    z-index: 1;
    opacity: 0.2;
}
    .banner{
        display: flex;
        padding: 0 20px;
        z-index: 10;
    }
        .banner_text{
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            /* padding: 20px; */
            /* margin: auto; */
        }
            .btext_position{
            }
        .banner_pic{
            width: 450px;
        }
    .cardGroup{
        width: 70%;
        /* background-color: lightcoral; */
        margin: auto;
        z-index: 10;
    }
        .d-flex{
            display: flex;
            justify-content: space-around;
        }
            .card_title{
                text-align: center;
                margin: 0 10px;

                position: relative;
            }
            /* .card_title::before{
                content:"";
                position: absolute;
                right:20%;
                width: 100px;
                height: 3px;

                background-color: blue;
            }
            .card_title::after{
                content:"";
                position: absolute;
                left:20%;
                width: 100px;
                height: 3px;
                

                background-color: red;
            } */
            .card_single{
                width: 320px;
                height: 450px;

                /* border: 3px solid pink;
                box-shadow: 5px black; */
            }
            .card_single:nth-child(1){
                margin-right: 10px;
            }
                .card_pic{
                    width: 100%;
                }

     @media screen and (max-width:526px){
          .banner{
            flex-wrap: wrap;
            padding: 0 50px;
        }    
        .banner_text{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            text-align: center;
            order:2
        } 
        .banner_pic{
            order:1
        }
        .cardGroup{
            width: 100%;
            padding: 0 50px;
        }
        .card_title{
            margin: 15px 0;
        }
        .d-flex{
            display: initial;
        }
        .card_single{
            width: 100%;
            height: auto;
             background-color:pink;
        }
        .card_single:nth-child(1){
                margin-right: 0;
            }
        .card_single h3{
            text-align: center;
            margin: 0;
            padding: 0;
            background-color:#6fd8d5 ;
            position: relative;
            top: -10px;
        }
        .card_content{
            margin: 10px 0;
            color: orangered;
            text-align: center;
            text-decoration: underline;
            text-decoration-color:#6fd8d5;
            
        }
    } 




</style>
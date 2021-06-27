<template>
    <div class="products margin_bottum">
        <div class="product_one product_card" @click="popup">
            <img src="../assets/imgs/product_oil.jpg" alt="" >
            <div class="productOne_text product_text">
                <div class="text">全抗精油噴霧</div>
                <div class="span_group" data-aos="fade-down">
                    <div>NTD $119元起</div>
                </div>
                
            </div>
        </div>
        <div class="product_two product_card" @click="popup">
            <img src="../assets/imgs/product_clean.jpg" alt="" >
            <div class="productTwo_text product_text">
                 <div class="text">天然潔淨組</div>
                 <div class="span_group" data-aos="fade-down">
                    <div>NTD $110</div>
                </div>
            </div>
        </div>
    </div>
    <div class="intro margin_bottum">
        <div class="intro_title">Introduction</div>
        <div class="intro_content">
            <div class="intro_left">
                <div>
                    <span>愛</span>
                    <span class="spanHide">好環保</span>
                    <br>
                    <img src="../assets/imgs/img3png.png" class="bgI">
                    <br>
                    <span>自然</span>
                    <span class="spanHide">裸裝</span>
                </div>
            </div>   
            <div class="intro_line"></div>
            <div class="intro_right">
                <span>我們是大自然的愛好者</span>
                <span>
                    從未間斷致力於提供品質保證的全可抗系列產品，自我花園確保栽種過程無農藥、無重金屬污染，並促進環境永續發展。產品製作過程無動物實驗、不會產出有害有害環境或是人體的物質以及過多的廢棄物，產品罐裝也能夠全部回收再次利用，讓我們在使用植萃緣產品提升生活品質同時，仍能維護地球環境。
                </span> 
                <div class="product_detail" @click="popup">-> 產品詳細</div>             
            </div>
        </div>
    </div>
</template>


<script>
 import AOS from 'aos';
   
  // You can also use <link> for styles
import 'aos/dist/aos.css'; 
 AOS.init();

export default {
    name:'Firstpage',
    emits:['firstpopup'],
    data(){
        return{
            firstpagedata:[
                {
                    shift:true,
                    pagename:"shownews"
                }
            ]
            
        }
    },
    methods:{
        popup(){
            this.$emit('firstpopup',this.firstpagedata)
        }
    }
}
</script>

<style scoped>
.products{
    width: 100%;
    background-color: white;

    display: flex;
    justify-content: space-between;
}
    .product_card{
        width: 49%;
        position: relative;

        overflow:hidden;
    }
    .product_card:hover{
        cursor: pointer;
    }
        .product_card img{
            width: 100%;
            transform:scale(1,1);transition: all 1s ease-out;
        }
        .product_card img:hover{
            transform:scale(1.2,1.2);
        }

    .product_text{
        width: 100%;
        position: absolute;
        top: 0;
        z-index: 10;
    }
        .text{
            font-size: 25px;
            background-color:#6fd8d5 ;
            color: white;
            text-align: center;

        }
        .span_group{
            width: 40%;
            font-size: 20px;
            color:#6fd8d5 ;
            background-color: white;
            opacity: 0.7;
            padding: 10px;
            text-align: center;
        }
.intro{
    width:100%;
}
    .intro_title{
        width:100%;
        font-size: 77px;
        color: #4A4A4A;
        padding: 0 50px;
  

        background-image: url('../assets/imgs/introduce.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position-x: 380px;
    }
    .intro_content{
        width:100%;
        display: flex;

    }
        .intro_left{

            /* background-color: teal; */
            padding: 0 0 0 50px;
            font-size: 57px;
        }
            .intro_left div{
                width: 350px;
                border: 3px solid #f2b3c3;
                border-radius: 55px;
                text-align: center;
                padding: 20px;
                color: #f2b3c3;
            }
                .bgI{
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                
                }
        .intro_line{
            width: 10px;
            height: 280px;
            background-color: #4A4A4A;
            margin: 0 10px;
            display: block;
        }
        .intro_right{
            font-size: 20px;
            background-color: turquoise;
            color: #4A4A4A;
            /* padding:50px ; */
            padding: 20px 10px;
            text-indent: 40px;
        }
                .spanHide{
                    display: initial;
                }
    .product_detail{
        width: 160px;
        cursor: pointer;
        background-color:#f2b3c3 ;
        overflow: hidden;

    }
    .product_detail:hover{
        border: 2px solid orangered;
    }
    .product_detail:active{
        background-color:orangered ;
        color: white;
    }
    .margin_bottum{
        margin-bottom: 20px;
    }



     @media screen and (max-width:820px){
            .intro_right{
                font-size: 18px;
            }
     }
     @media screen and (max-width:768px){
         .products{
             display: unset;
         }
            .product_card{
                width: 100%;
            }
            .intro_content{
                display: unset;
            }
                .intro_title{
                    text-align: center;
                    background-position-x: 90%;
                }
                .intro_left{
                    padding: 0 0 0 0;
                }
                    .intro_left div{
                        margin: auto;
                    }
                    .intro_line{
                        display: none;
                    }
                .intro_right{
                    padding: 20px 20px;
                }
     } 
     @media screen and (max-width:526px){
                .intro_title{
                    
                    font-size: 26px;
                    padding: 10px 0;
                    text-align: center;
                    background-image:none;
                    background-color: #6fd8d5;
                }
                    .intro_right{
                        background-color: white;
                    }
     } 
    @media screen and (max-width:400px){
                .spanHide{
                    display: none;
                }
         .intro_left div{
                width: 200px;
                font-size: 15px;
                border-radius: 55px;
                padding: 15px;
            }
                .bgI{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                
                }
    }


    
</style>
<template>
    <div class="navbarBox"></div>
    <div class="bg"></div>
    <div id="contacntUs">
        <div id="sticky" :style='{top:stickytop + "px"}' >
        
            <div class="contactUsTitle">
                <h2>Contact Us 聯絡我們</h2>
            </div>
            <div class="d-flex">
                <div class="contactUsLeft">
                    <h3>植萃緣</h3>
                    <p>
                        從未間斷致力於提供品質保證的全可抗系列產品，自我花園確保栽種過程無農藥、無重金屬污染，並促進環境永續發展。產品製作過程無動物實驗、不會產出有害有害環境或是人體的物質以及過多的廢棄物，產品罐裝也能夠全部回收再次利用，讓我們在使用植萃緣產品提升生活品質同時，仍能維護地球環境。
                    </p>
                    <a href="https://www.facebook.com/pages/Example-Account/197494372329">Facebook</a>
                    <br>
                    <a href="https://www.instagram.com/exampleprofilelink/">Instagram</a>
                    <p >
                        <span>電子郵件</span>:<span>puregreen520@gmail.com</span>
                        <br>
                        <span>電話號碼</span><span>+886-987114632</span>
                    </p>
                </div>
                <div class="contactUsRight">
                    <!-- v-model綁定的變數要放在label的外面 然後要跟/label空一格 不然會出錯 -->
                    <!-- 要在div外面註解 在裡面會出錯 -->
                    <div>
                        <label for="name" class="w-100 m-10">姓名:</label> {{name}}
                        <input id="name" type="text" class="w-100 m-10" placeholder="請輸入名字" v-model="name" required>
                    </div>
                    <div>
                        <label for="email" class="w-100 m-10">電子信箱: {{email}}</label> 
                        <input id="email" type="email" class="w-100 m-10" placeholder="請輸入信箱" v-model="email" required>
                    </div>
                    <div>
                        <label for="phone" class="w-100 m-10" >電話: {{phone}}</label> 
                        <input id="phone" type="number" class="w-100 m-10" placeholder="請輸入電話" v-model="phone" required>
                    </div>
                    <a href="/"><button @click="check">確認</button></a>
                </div>
                
            </div>
        </div>      
    </div>
    
</template>

<script>


export default {
    name:'Contactus',
    data(){
        return{
            stickytop:200,
            name:'',
            email:'',
            phone:''
        }
    },
    components:{
    },
    methods:{
        check(){
            alert('送出')
        }
    },
    mounted(){
        // 只能用ID才能找到<div>    class會無法定義
        // var sticky =document.getElementById('sticky')
        // var contacntus =document.getElementById('contacntUs')
        // var stickytop =this.stickytop
        // function stickyNav() {
           

        //     if(document.documentElement.scrollTop>50){
        //         stickytop=document.documentElement.scrollTop+450
        //         console.log(stickytop);
        //         return stickytop
        //     }else{
                
        //     }
            // let topsticky = sticky.offsetTop
            
            // let topcontacntus =contacntus.offsetTop

            // console.log(sticky.offsetTop);
            // console.log(contacntus.offsetTop);
        // }
        // window.addEventListener('scroll', stickyNav);
    }
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
        background-image: url('../assets/imgs/bgIme1.jpg');
        opacity: 0.7;
        z-index: 1;
        
    }
        #contacntUs{
            width: 100%;
            /* height: 2000px; */
            /* padding: 130px 50px 0 50px; */
            padding: 130px 0 0 0;

        
            /* background-attachment: fixed;  */
            /* background-image:url('https://d1di2lzuh97fh2.cloudfront.net/files/01/018/018frd.png?ph=f797ff1687') ; */
            
        }
            /* 固定在offsetTop=200的位置 */
            #sticky{
                width: 100%;
                height: 900px;
                /* background-color: brown; */
                position: absolute;
            }
                .contactUsTitle{
                    text-align: center;
                    margin-bottom: 100px;
                    
                }
                .contactUsLeft{
                    width: 50%;
                    padding: 0 50px 0 50px;

                   
                }
                    .contactUsLeft a{
                        /* text-decoration: none; */
                        color:coral
                    }
                .contactUsRight{
                    padding: 20px 50px;
                }
        .d-flex{
            display: flex;
        }
        .w-100{
            width: 100%;
        }
        .m-10{
            margin: 10px 0;
        }
        @media screen and (max-width:526px){
              .d-flex{
                  display: initial;
              }  
                .contactUsLeft{
                    width: 100%;
                    padding: 0 50px 0 50px;
                }
        } 
</style>
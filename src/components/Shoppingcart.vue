<template>
    <div class="bg"></div>
    <div class="navbarBox"></div>
    <div class="bg_phone">
        <div class="phone">
            <NavTab @isshowingcart="kk" :isshowingcart="isshowingcart" />
            <div id="main" :class="{ shift: isshowingcart }">
                <div class="content">
                    <Products :products="products" @productamountshow="mm" @productshowingicon="uu" />  
                </div>
                <div class="content">
                <Cart @productamount="ss" :products="products" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavTab from '../components/cart_components/NavTab.vue'
import Products from '../components/cart_components/Products.vue'
import Cart from '../components/cart_components/Cart.vue'


export default {
    name:'Shoppingcart',
    props:{},
    data(){
        return{
            isshowingcart:false,
            products:[]
        }
    },
    methods:{
        kk(e){
            this.isshowingcart=e
        },
        mm(e){
            this.products.amountshow=e
        },
        uu(e){
            this.products.showingicon=e
        },
        ss(e){
            this.products.amount=e
        }
    },

    // 用created導入產品
        created(){
        this.products= [
            {
                id: '2062',
                name: '橙香洗碗精',
                price: 110,
                thumb: 'https://purenature3.webnode.tw/_files/200000018-5d6dd5d6e0/IMG_0720.JPG',
                amount: 0,
                amountshow: 1,
                showingicon: false
            }, 
            {
                id: '832',
                name: '茶樹清爽全抗噴霧',
                price: 199,
                thumb: 'https://purenature3.webnode.tw/_files/200000016-9f0c79f0c9/man-harvest-pick-fresh-green-tea-leaves-high-land-tea-field-chiang-mai-thailand_1150-8986.jpg',
                amount: 0,
                amountshow: 1,
                showingicon: false
            }, 
            {
                id: '16762',
                name: '保衛全抗精油噴霧',
                price: 199,
                thumb: 'https://purenature3.webnode.tw/_files/200000014-5a3625a364/cowslip-telosma-cordata-flowers-with-green-nature-background_43871-88.jpg',
                amount: 0,
                amountshow: 1,
                showingicon: false
            },
        ]
 
    },
    components:{
        NavTab,
        Products,
        Cart
    },
}
</script>

<style scoped>
.bg{
    width: 100%;
    height: 2000px;
    /* background-color: #6fd8d5; */
    background-image: url('../assets/imgs/bgIme1.jpg');
    position: absolute;
    top: 50px;
    opacity: 0.3;
}
 .navbarBox{
    width: 100%;
    height: 50px;
    background-color:white ;
}
.bg_phone{
    padding: 150px 0 0 0;
}
.phone {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 414px;
    height: 736px;
    margin: 20px auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    background: pink;
    overflow: hidden;
    
}

@media (max-width: 414px) {
  .phone {
    margin: 0;
  }
}
#main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    overflow: hidden;
}

#main .content {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    overflow-y: scroll;
    -webkit-transition: -webkit-transform 300ms;
    transition: -webkit-transform 300ms;
    transition: transform 300ms;
    transition: transform 300ms, -webkit-transform 300ms;
}

#main.shift .content {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
</style>
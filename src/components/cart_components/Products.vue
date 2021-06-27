<template>
    <div class="product" v-for="product in products">
        <div class="info-box">
            <img :src="product.thumb" />
            <div>
                <h2>{{ product.name }}</h2>
                <p>{{ product.price }}</p>
            </div>
        </div>
        <div class="action-box">
            <div>
                <button class="round" @click="minusone(product)">-</button>
                <span>{{ product.amountshow }}</span>
                <button class="round" @click="addone(product)">+</button>
            </div>
            <button @click="addtocart(product)">add to cart</button>
        </div>

        <!-- 購物成功的 icon -->
        <div class="icon-container" :class="{ showing: product.showingicon }">
            <svg class="icon" viewBox="0 0 100 100" width="80" height="80">
                <circle class="circle" cx="50" cy="50" r="48"></circle>
                <polyline class="check" points="28,53 42,66 74,34"></polyline>
            </svg>
            <p>成功加入購物車</p>
        </div>
    </div>
</template>


<script>


export default {
    name:'Products',
    props:{
       products:Array,
    },
    components:{
        
    },
    methods:{
        // 點擊 - / + 後的動作
        minusone (product) {
            product.amountshow--
            product.amountshow = (product.amountshow < 1) ? 1 : product.amountshow
            let productamountshow = product.amountshow;
            this.$emit('productamountshow',productamountshow);
        },
        addone (product) {
            product.amountshow++
            product.amountshow = (product.amountshow > 9) ? 9 : product.amountshow
            let productamountshow = product.amountshow;
            this.$emit('productamountshow',productamountshow);
        },

        // 點擊 add to cart 後的動作
        addtocart (product) {
            product.amount += product.amountshow
            
            product.showingicon = true

            console.log(product.amount);
            setTimeout(() => {     
                product.showingicon = false
                this.$emit('productamountshow',product.amountshow);
                this.$emit('productshowingicon',product.showingicon);
                product.amountshow=1
            }, 800)

        },
    }

}
</script>
<style scoped>
.product {
  position: relative;
  margin: 20px;
  background: #fff;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product .info-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 15px 5px;
}

.product .info-box img {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  -o-object-fit: contain;
     object-fit: contain;
}

.product .info-box h2 {
  margin: 10px 0;
  padding: 0;
  font-size: 18px;
}

.product .info-box p {
  margin: 0;
  color: #aba6a6;
}

.product .info-box p::before {
  content: "$";
  margin-right: .3em;
}

.product .action-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-top: 1px solid #f3f3f3;
  padding: 10px 10px 10px 15px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.product .action-box .round {
  width: 30px;
  height: 30px;
  outline: 0;
  border: 0;
  color: #fff;
  font-size: 18px;
  background: #c3c3c3;
  border-radius: 50%;
  cursor: pointer;
}

.product .action-box span {
  display: inline-block;
  width: 2em;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}

.product .action-box > button {
  outline: 0;
  border: 0;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  background: #ef8a8b;
  cursor: pointer;
}
.icon-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  padding: 30px 20px 0;
  color: #ef8a8b;
  font-size: 20px;
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  opacity: 0;
  pointer-events: none;
  -webkit-transition: opacity .3s;
  transition: opacity .3s;
}

.icon-container .circle,
.icon-container .check {
  fill: none;
  stroke: #ef8a8b;
  stroke-width: 3px;
}

.icon-container .check {
  stroke-dasharray: 80 100;
  stroke-dashoffset: 80;
}

.icon-container.showing {
  opacity: 1;
  pointer-events: auto;
}

.icon-container.showing .check {
  -webkit-animation: check 0.3s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.2s;
          animation: check 0.3s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.2s;
}
@-webkit-keyframes check {
  from {
    stroke-dashoffset: 80;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes check {
  from {
    stroke-dashoffset: 80;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@-webkit-keyframes circle {
  from {
    stroke-dashoffset: -300;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes circle {
  from {
    stroke-dashoffset: -300;
  }
  to {
    stroke-dashoffset: 0;
  }
}
</style>
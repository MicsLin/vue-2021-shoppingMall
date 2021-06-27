<template>
    <table>
        <thead>
            <tr>
                <th colspan="5">Order</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-title">
                <td>品項</td>
                <td>數量</td>
                <td>單價</td>
                <td>小計</td>
                <td></td>
            </tr>
             <tr v-for="product in productsincart">
                <td>{{ product.name }}</td>
                <td>{{ product.amount }}</td>
                <td>{{ product.price }}</td>
                <td>{{ product.sum }}</td>
                <td>
                    <button class="button-del" @click="remove(product)">×</button>
                </td>
            </tr> 
         </tbody>
        <tfoot>
             <tr> 
                 <td></td> 
                 <td colspan="3">Total <span class="total-price">$ {{ total }}</span></td> 
                 <td></td>
            </tr>
        </tfoot> 
    </table> 
    <button class="checkout">前往付款</button>
</template>

<script>
export default {
    name:'Cart',
    props:{
        products:Array
    },
    data(){},

    methods:{
        // 在購物車裡移除單一品項 ( 把數量設置成 0 )
        remove (product) {
            product.amount = 0
            const productamount = product.amount;
            this.$emit('productamount',productamount);
        },
    },
    computed:{
        //  購物車裡的品項
        productsincart () {
            return this.products
                // 只顯示購買數量 > 0 的項目
                .filter(p => p.amount)
                // 算出每個產品的小計
                .map(p => {
                    p.sum = p.amount * p.price
                    return p
                })
        },

        // 木前購買的金額
        total () {
            return this.productsincart
                .reduce((sum, p) => (sum + p.sum), 0)
        }
    }
}
</script>

<style scoped>
table {
  margin: 20px;
  border-spacing: 0;
  border-collapse: collapse;
  background-color: #fff;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

table tr {
  border-bottom: 1px solid #f3f3f3;
}

table th,
table td {
  min-width: 2em;
  width: 15%;
  padding: 15px;
  text-align: right;
}

table th:first-child,
table td:first-child {
  width: 40%;
  text-align: left;
}

table th:last-child,
table td:last-child {
  padding-right: 10px;
}

table thead {
  color: #ef8a8b;
  font-size: 16px;
  text-align: left;
}

table thead .time {
  color: #c2c2c2;
  font-size: 14px;
  text-align: right;
}

table tbody {
  font-size: 14px;
}

table tbody .table-title {
  color: #c2c2c2;
  font-size: 12px;
}

table tbody .button-del {
  width: 30px;
  height: 30px;
  outline: 0;
  border: 0;
  padding: 0 0 .4em;
  color: #b6b6b6;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
}

table tfoot {
  color: #959595;
  font-size: 12px;
  background: #f9f9f9;
}

table tfoot .total-price {
  margin-left: 1em;
  color: #000;
  font-size: 20px;
}
.checkout {
  display: block;
  width: calc(100% - 2 * 20px);
  margin: 20px;
  outline: 0;
  border: 0;
  padding: 15px 0;
  color: #fff;
  font-size: 18px;
  text-align: center;
  background-color: #ef8a8b;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
</style>
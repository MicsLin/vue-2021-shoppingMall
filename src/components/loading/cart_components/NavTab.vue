<template>
    <nav>
        <ul class="nav__tab">
            <!-- active 改變顏色， -->
            <li :class="{ active: !isshowingcart }"
                @click="toggleTab(false)">products</li>
            <li :class="{ active: isshowingcart }"
                @click="toggleTab(true)">shopping cart</li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'NavTab',
    props:{
        isshowingcart:Boolean
    },
    methods:{
        // 切換 產品列表 / 購物車 的 tab
            toggleTab (e) {
            // "要傳給父的",值
            this.$emit('isshowingcart',e)
        },
    },
}
</script>


<style scoped>
nav {
  z-index: 100;
}

.nav__tab {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding: 5px 20px 0;
  list-style: none;
  color: #c2c2c2;
  font-size: 14px;
  line-height: 4em;
  text-align: center;
  text-transform: uppercase;
  background: #fff;
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
}

.nav__tab li {
  position: relative;
  width: 50%;
  overflow: hidden;
  cursor: pointer;
}

.nav__tab li::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: #ef8a8b;
  -webkit-transition: -webkit-transform 300ms;
  transition: -webkit-transform 300ms;
  transition: transform 300ms;
  transition: transform 300ms, -webkit-transform 300ms;
}

.nav__tab li:first-child::after {
  -webkit-transform: translate(100%, 0);
          transform: translate(100%, 0);
}

.nav__tab li:last-child::after {
  -webkit-transform: translate(-100%, 0);
          transform: translate(-100%, 0);
}

.nav__tab li.active {
  color: #ef8a8b;
}

.nav__tab li.active::after {
  -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
}
</style>
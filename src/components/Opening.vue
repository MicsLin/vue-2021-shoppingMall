<template>
    <div id="background" :style="{opacity: backgroundopacity}"></div>
    <div id="loadingBox" :style="{opacity: loadingboxopacity}">
        <div class="loading"> 
            <span></span> 
            <span></span> 
            <span></span> 
            <span></span> 
            <span></span> 
            <span></span>
            <span></span>
            <span></span> 
            <span></span> 
        </div>
    </div>
</template>


<script>
export default {
    name:'Opening',
    data(){
        return{
            hide:true,
            backgroundopacity:0,
            loadingboxopacity:1
        }
    },created(){
        // Vue裡 要用getElementBy 不能用querySelect
        // var loadingBox =document.getElementById('loadingBox')
        // var loading =document.getElementsByClassName('loading')
        // var background =document.getElementById('#background')

        // var xx =this.backgroundopacity
        // var nn =this.loadingboxopacity
        // var n=1
        // var x=0
            

        //     var gogo = window.setTimeout(() =>{
        //         let clearOpacity = window.setInterval(() =>{
        //                 if(n>0){
        //                     n=n-0.1    
        //                     x=x+0.1
        //                     nn=n
        //                     xx=x
        //                 }else{clearTimeout(clearOpacity)}
        //         },400)       
        //     },3000)
  
            
    },
    methods:{
        // changeOpacity() {
        //     // 每0.2秒改變透明度一次
        //     console.log('我是函示');
        //     var clearOpacity = window.setInterval(setOpacity,400)
        //     function setOpacity() {
        //         if(n>0){
        //             n=n-0.1    
        //             x=x+0.5
        //             loadingBox.style.opacity=n

        //             background.style.opacity=x
        //             console.log('xAAAAA');
        //         }else{clearTimeout(clearOpacity)}
        //     }   
        // }

        // tatal() {
        //     var loadingBox =document.querySelector('#loadingBox')
        //     var loading =document.querySelector('.loading')
        //     var background =document.querySelector('#background')
        //     var n=1
        //     var x=0

        //     // 透明度 三秒後開始運行
        //     var gogo = window.setTimeout(test,3000)
        //     function test() {
        //         console.log('AAAAAAAa');
        //     }



        //     function changeOpacity() {
        //         // 每0.2秒改變透明度一次
        //         var clearOpacity = window.setInterval(setOpacity,400)
        //         function setOpacity() {
        //             if(n>0){
        //                 n=n-0.1    
        //                 x=x+0.5
        //                 loadingBox.style.opacity=n

        //                 background.style.opacity=x
                        
        //             }else{clearTimeout(clearOpacity)}
        //         }   
        //     }
        // }    
            



            // 旋轉跟放大的JS
            // function rotate() {
            //     loading.animate([
            //             { transform: 'rotate(180deg)' },
            //             { transform: 'scale(5, 5)' },
            //         ],
            //         {
            //             duration: 5000,
            //             iterations: Infinity
            //         }
            //     )
            // }
        // }
    }
}
</script>

<style scoped>
      #background{
            width: 100%;
            height: 100vh;
            background-color: #6fd8d5;
            opacity: 0;
            position: absolute;
        }
        #loadingBox {
        width: 100%;
        height: 100vh;
        margin: 0;
        background-color: black; 
        opacity: 1;
        z-index: 2;

        overflow: hidden;
        /* 讓loading置中 */
        display: flex; 
        align-items: center; 
        justify-content: center; 

        
    } 
    /* #loadingBox.hidden{
        display: none;
    } */
        .loading { 
            width: 10em; 
            height: 10em;
            display:grid; 
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 0.5em; 

            /* transform: rotate(45deg); */

            animation: rotate 5s infinite; 
            animation-fill-mode: backwards;
        }
            .loading span { 
            /* --name 是css中定義變量的方式   可以直接用 var(--name) 使用 */
                background-color: var(--color); 

                animation: blinking 2s var(--delay) ease-in-out infinite; 
                animation-fill-mode: backwards;
            } 
            .loading span:nth-child(2n+2) { 
                --color: #f13f84; 
            } 
            .loading span:nth-child(4n+3) { 
                --color: #46b0ff;
            } 
            .loading span:nth-child(4n+1) {
                --color: #44bb44; 
            }
            .loading span:nth-child(7) { 
                --delay: 0s; 
            } 
            .loading span:nth-child(4n+4) {
                --delay: 0.2s;
            } 
            .loading span:nth-child(4n+1) {
                --delay: 0.4s; 
            } 
            .loading span:nth-child(4n+2) { 
                --delay: 0.6s;
            } 
            .loading span:nth-child(3) {
                --delay: 0.8s; 
            }

            /* 一開始的旋轉 */
            @keyframes blinking {
                /*旋轉一圈rotate(1turn)、縮放 scale 如果大於1就代表放大；如果小於1就代表縮小   */
                0%, 20% { 
                    transform: rotate(0deg) scale(0); 
                } 
                40%, 80% {  
                    transform: rotate(1turn) scale(1); 
                } 
                100% { 
                    transform: rotate(2turn) scale(0); 
                }
            }
            /* 兩秒後開始 放大 加 總旋轉 */
            @keyframes rotate {
                0%{
                    transform: rotate(45deg) scale(0, 0);
                }
                60%{
                    transform: rotate(45deg) scale(1, 1);
                }
                61%{
                    transform: rotate(45deg) scale(0.9, 0.9);
                }
                62%{
                    transform: rotate(45deg) scale(0.8, 0.8);
                }
                100%{
                    transform: rotate(280deg) scale(5, 5);
                }
            }
            
</style>
<template>
     <div id="menuToggle">
    <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    -->
    <input class="checkbox" type="checkbox" @click="popup(popcheck)"/>
    
    <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
    <span></span>
    <span></span>
    <span></span>
    
    <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    -->
    <ul id="menu">
      <a href="/" @click="popup"><li>首頁</li></a>     
        <a v-for="hamburgerpage in hamburgerpages" @click="popup(hamburgerpage.pagename)">
            <li>{{hamburgerpage.pagecontent}}</li>
        </a>
    </ul>
  </div>
</template>

<script>

export default {
    name:'Hamburger',
    emits:['hamburgershift'],
    props:{
        hamburgerpages:Array
    },
    data(){
        return{
            popcheck:"popcheck"
        }
    },
    methods:{
        popup(param){ 
            var menu =document.getElementById('menu')
            var checkboxes = document.querySelector('.checkbox')
            

            // 如果按的是漢堡標 讓menu消失或顯現 然後不改變主頁Content的內容
            if(param ==="popcheck"){
                if(menu.style.transform == "none"){
                    menu.style.transform="translate(-100%, 0)"
                }else{
                    menu.style.transform="none"
                }
            }else
           {    
            //    如果按的是內容超連結 讓menu消失 且改變主頁Content的內容
                let pagename = param
                this.$emit("hamburgershift",pagename)
                if(menu.style.transform == "none"){
                    menu.style.transform="translate(-100%, 0)"
                    // 讓漢堡變回原本的三條線
                    checkboxes.checked=false  
                }else{
                    menu.style.transform="none"

                }
                            
            }            
        }
    }
}
</script>

<style scoped>
#menuToggle
{
  display: block;
  position: relative;
  /* top: 50px;
  left: 50px; */
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a
{
  text-decoration: none;
  color: #232323;
  
  transition: color 0.3s ease;
}

#menuToggle a:hover
{
  color: tomato;
  cursor: pointer;
}


#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  /* 要修改漢堡顏色 */
  /* background: #cdcdcd; */
  /* background: green; */
    background-color: #6fd8d5;

  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  /* background: #232323; */
  background: green;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 300px;
  left: -100px;
  top: 11px;

  /* top:-175px; */
  /* background-color: pink; */
  /* margin: -108.5px 0 0 -50px; */
  /* padding: 50px; */
  /* padding-top: 125px; */
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{

    /* background-color: #ededed; */
    background-color:  lightgray;
      opacity: 0.8;
    text-align: center;

  padding: 10px 0;
  font-size: 22px;
}
#menu li:hover {
			font-size: 30px;
             opacity: 1;
             margin-right: 10px;
			/* background-color: transparentize($black, .8); */
		}

/*
 * And let's slide it in from the left
 */
/* #menuToggle input:checked ~ ul */
#menuToggle input:checked~ ul
{
  transform: none;
}

  @media screen and (max-width:768px){
    #menuToggle span{
      background-color:white;
    }
    #menuToggle input:checked ~ span{
      background:tomato;
    }
    #menu{
      top:17px;
    }
  }
</style>
var loadingBox =document.querySelector('#loadingBox')
var n=1

setInterval(function changeOpacity() {
    if(loadingBox>0){
    n=n-0.1
    loadingBox.style.opacity= n
    }
},3000)

function rotate() {
    loadingBox.animate([
        { transform: 'rotate(360deg)' },
        { transform: 'scale(7, 7)' },
        { transform:{opacty:0}}
    ],
        {
            duration: 3000,
            iterations: Infinity
        }
    )
}
function hide() {
    loadingBox.className.add('hidden')
}

function loading() {
    setInterval()
    rotate()
}


window.setTimeout(loading,2000)
window.setTimeout(hide,5000)
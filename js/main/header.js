// js
window.onload = function () {
const header = document.querySelector(".header")
function headerScrollCss(){
    const headerHeight = header.offsetHeight
    if (window.scrollY >= headerHeight){
        header.classList.add("active")
    }else{
        header.classList.remove("active")
    }
}
window.addEventListener("scroll",headerScrollCss)
}
// jquery
$(document).ready(function () {

})
// js
window.addEventListener("load" , function(){
  //  farmswiper 스와이퍼 기능
  const swFarmswiper = new Swiper(".sw-farmswiper", {
    speed: 3000,
    centeredSlides: true,
      slidesPerView: 4.2,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  }) 
  
// jquery
// $(document).ready(function () {

// })
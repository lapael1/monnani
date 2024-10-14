// js
window.addEventListener("load" , function(){
//  배너 스와이퍼 기능
const swBanner = new Swiper(".sw-banner", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      760: {
        slidesPerView: 1,
      },
    },
    pagination: {
      el: ".sw-banner-pg ",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
}) 
// jquery
$(document).ready(function () {});

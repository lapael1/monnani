// js
window.addEventListener("load", function () {
  // 배너 연결시키기

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
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".sw-banner-pg ",
      clickable: true,
    },
  });
  // 배너 슬라이드 멈춤 기능
  const swBannerPlay = document.querySelector(".banner-play");
  swBannerPlay.addEventListener("click", function () {
    if (swVisualPlay.classList.contains("active")) {
      swBanner.autoplay.start();
      swVisualPlay.classList.remove("active");
    } else {
      swBanner.autoplay.stop();
      swVisualPlay.classList.add("active");
    }
  });
  // 비주얼
  VISUAL_ARR.forEach(function (item) {
    //   console.log(item);
    const tag = `
      <div class="swiper-slide">
              <div class="visual-slide-page">
                <a href="${item.link}">
                  <img src="images/${item.pic}" alt="${item.name}">
                </a>
              </div>
            </div>
      `;
    html += tag;
  });
});
// jquery
$(document).ready(function () {});

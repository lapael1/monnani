window.addEventListener("load", function () {
  // farmswiperb: 우측으로 서서히 오토플레이
  const farmswiperb = new Swiper(".sw-farmswiperb", {
    slidesPerView: 1, // 한번에 보이는 슬라이드 개수
    spaceBetween: 10, // 슬라이드 간 간격
    loop: true, // 슬라이드 반복
    autoplay: {
      
      disableOnInteraction: false, // 사용자가 터치해도 자동 슬라이드 유지
    },
    speed: 50000, // 1초 동안 서서히 슬라이드 전환
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // farmswiperc: 좌측으로 서서히 오토플레이
  const farmswiperc = new Swiper(".sw-farmswiperc", {
    slidesPerView: 1, // 한번에 보이는 슬라이드 개수
    spaceBetween: 10, // 슬라이드 간 간격
    loop: true, // 슬라이드 반복
    autoplay: {
 // 3초마다 자동 슬라이드
      reverseDirection: true, // 슬라이드 방향을 좌측으로 설정
      disableOnInteraction: false, // 사용자가 터치해도 자동 슬라이드 유지
    },
    speed: 50000, // 1초 동안 서서히 슬라이드 전환
  });
});

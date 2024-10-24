window.addEventListener("load", function () {
  const swFarmswiperb = new Swiper(".sw-farmswiperb", {
    speed: 70000,  // 천천히 슬라이드 이동
    loop: true,   // 무한 반복 활성화
    autoplay: {
      delay: 0,  // 지연 시간 없이 연속적으로 슬라이드
      disableOnInteraction: false,  // 사용자가 상호작용해도 autoplay 유지
      reverseDirection: true,
    },
    slidesPerView: 'auto',  // 슬라이드 크기를 이미지 크기에 맞춰 자동 조정
    spaceBetween: 10,  // 슬라이드 간 간격
    centeredSlides: true, // 슬라이드가 항상 중앙에 배치
    freeMode: true,  // 슬라이드가 자유롭게 움직일 수 있게 설정
  });

  const swFarmswiperc = new Swiper(".sw-farmswiperc", {
    speed: 70000,  // 천천히 슬라이드 이동
    loop: true,   // 무한 반복 활성화
    autoplay: {
      delay: 0,  // 지연 시간 없이 연속적으로 슬라이드
      disableOnInteraction: false,  // 사용자가 상호작용해도 autoplay 유지
     // 이 방향은 반대 방향으로 슬라이드
    },
    slidesPerView: 'auto',  // 슬라이드 크기를 이미지 크기에 맞춰 자동 조정
    spaceBetween: 10,  // 슬라이드 간 간격
    centeredSlides: true, // 슬라이드가 항상 중앙에 배치
    freeMode: true,  // 슬라이드가 자유롭게 움직일 수 있게 설정
  });
});

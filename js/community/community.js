window.addEventListener("load", function () {
  const swProdreview = new Swiper(".sw-prodreview", {
    speed: 3000,
    // centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2.0,
        spaceBetween: 20,
      },
    },
  });
});

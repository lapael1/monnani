$(document).ready(function () {
  // 탑버튼
  $(".topbtn").click(function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  var swiper = new Swiper(".sw-visual", {
    loop: true,
    autoplay: {
      delay: 5000,
    },
    speed: 1500,
  });
});

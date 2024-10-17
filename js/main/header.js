// js
window.onload = function () {
  const header = document.querySelector(".header");
  function headerScrollCss() {
    const headerHeight = header.offsetHeight;
    if (window.scrollY >= headerHeight) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  }
  window.addEventListener("scroll", headerScrollCss);

  // 로그인
  function showInitDashboard() {
    let params = new URLSearchParams(window.location.search);
    let name = params.get("name");
    if (name) {
      document.getElementById("login-button").style.display = "none";
      document.getElementById("signup-button").style.display = "none";
      document.getElementById("login-display").style.display = "block";
      document.getElementById(
        "name-display"
      ).textContent = `${name}님 환영합니다/
`;
    }
  }
};
// jquery
$(document).ready(function () {});

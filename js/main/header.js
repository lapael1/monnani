window.addEventListener("load", function () {
  showInitDashboard();
  function showInitDashboard() {
    // URL에서 쿼리 매개변수 가져오기
    const params = new URLSearchParams(window.location.search);
    const usernameFromURL = params.get("username");

    // localStorage에 저장된 로그인된 사용자 정보 확인
    // const loggedInUser = JSON.parse(localStorage.getItem("userFind")) || {};

    // URL에서 가져온 이름이 있으면 그 값을 사용하고, 없으면 localStorage의 값을 사용
    // const username = usernameFromURL || loggedInUser.name;

    if (username) {
      // 로그인 상태일 경우
      document.getElementById("login-button").style.display = "none"; // 로그인 버튼 숨김
      document.getElementById("signup-button").style.display = "none"; // 회원가입 버튼 숨김
      document.getElementById("login-display").style.display = "block"; // 로그인 사용자 정보 표시

      // 사용자 이름을 name-display에 출력
      document.getElementById("name-display").textContent = `${username}님`;
    } else {
      // 로그인 정보가 없으면 로그인 상태 초기화 (페이지 로드 시 체크)
      document.getElementById("login-button").style.display = "block"; // 로그인 버튼 표시
      document.getElementById("signup-button").style.display = "block"; // 회원가입 버튼 표시
      document.getElementById("login-display").style.display = "none"; // 로그인 정보 숨김
    }
  }

  // 로그아웃 처리
  document.getElementById("logout").addEventListener("click", function () {
    document.getElementById("login-button").style.display = "block"; // 로그인 버튼 표시
    document.getElementById("signup-button").style.display = "block"; // 회원가입 버튼 표시
    document.getElementById("login-display").style.display = "none"; // 로그인 정보 숨김
    clearUserData();
    clearUsernameParam();
  });
  function clearUserData() {
    localStorage.removeItem("username");
  }

  function clearUsernameParam() {
    var url = new URL(window.location.href);
    url.searchParams.delete("username");
    window.history.replaceState({}, "", url.toString());
  }
});

// jquery
$(document).ready(function () {});

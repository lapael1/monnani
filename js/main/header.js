window.addEventListener("load", function () {
  showInitDashboard();

  function showInitDashboard() {
    // URL에서 쿼리 매개변수 가져오기
    const params = new URLSearchParams(window.location.search);
    const username = params.get("name"); // 여기서 name으로 변경

    // localStorage에 저장된 로그인된 사용자 정보 확인
    const loggedInUser = JSON.parse(localStorage.getItem("userFind")) || {};

    // URL에서 가져온 이름이 있으면 그 값을 사용하고, 없으면 localStorage의 값을 사용
    const displayName = username || loggedInUser.username; // 여기서 loggedInUser.username 사용

    if (displayName) {
      // 로그인 상태일 경우
      document.getElementById("login-button").style.display = "none"; // 로그인 버튼 숨김
      document.getElementById("signup-button").style.display = "none"; // 회원가입 버튼 숨김
      document.getElementById("login-display").style.display = "block"; // 로그인 사용자 정보 표시

      // 사용자 이름을 name-display에 출력
      document.getElementById("name-display").textContent = `${displayName}님`;
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
    localStorage.removeItem("userFind"); // 로그인 데이터 삭제
  }

  function clearUsernameParam() {
    var url = new URL(window.location.href);
    url.searchParams.delete("name"); // 여기서 name으로 변경
    window.history.replaceState({}, "", url.toString());
  }

  //    // 헤더 요소 선택
  // const header = document.querySelector('.header');

  // // 스크롤 이벤트 리스너 추가
  // window.addEventListener('scroll', () => {
  //   // 현재 스크롤 위치
  //   const scrollY = window.scrollY;

  //   // 헤더의 높이 (100px)
  //   const headerHeight = header.offsetHeight;

  //   // 스크롤 위치가 헤더 높이보다 크면 active 클래스 추가
  //   if (scrollY > headerHeight) {
  //     header.classList.add('active');
  //   } else {
  //     header.classList.remove('active');
  //   }
  // });
  function closeIcon() {
    var img = document.createElement("img");
  }
});

// jquery
$(document).ready(function () {});

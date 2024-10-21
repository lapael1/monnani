window.addEventListener("load", function () {
  const loginForm = this.document.getElementById("login-form");

  // 로그인 폼의 제출 이벤트
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // 폼 제출 막기
    const id = document.getElementById("login-id").value;
    const password = document.getElementById("login-pw").value;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userFind = users.find(
      (user) => user.id === id && user.password === password
    );
    if (userFind) {
      localStorage.setItem("userFind", JSON.stringify(userFind));
      const username = userFind.username;
      alert(`${username}님 반갑습니다`);
      window.location.href = `index.html?name=${encodeURIComponent(username)}`;
    } else {
      alert("로그인 정보가 일치하지 않습니다. 다시 시도해주세요.");
      loginForm.reset();
    }
  });

  // 회원가입 버튼 클릭 시 페이지 이동
  this.document
    .getElementById("signup")
    .addEventListener("click", function (e) {
      e.preventDefault(); // 기본 제출 동작 방지
      window.location.href = "signup.html"; // 회원가입 페이지로 이동
    });
});

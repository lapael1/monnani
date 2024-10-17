window.addEventListener("load", function () {
  const loginForm = this.document.getElementById("login-form");
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
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
});

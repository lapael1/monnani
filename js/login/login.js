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
      alert(`${id}`);
    }
  });
});

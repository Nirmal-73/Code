document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Dummy validation (replace with real backend logic)
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    errorMessage.textContent = "";
    // Redirect ya next page pe le ja sakte ho
  } else {
    errorMessage.textContent = "Invalid username or password.";
  }
});

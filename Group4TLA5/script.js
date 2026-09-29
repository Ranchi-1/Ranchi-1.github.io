const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const feedbackBox = document.getElementById("loginFeedback");

const btnTogglePassword = document.getElementById("btnTogglePassword");
const toggleText = document.getElementById("toggleText");


btnTogglePassword.addEventListener("click", function () {

  const isPassword = passwordInput.getAttribute("type") === "password";

  passwordInput.setAttribute("type", isPassword ? "text" : "password");
  toggleText.textContent = isPassword ? "Hide" : "Show";
});

loginForm.addEventListener("submit", function (event) {

  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  feedbackBox.className = "alert d-none";

  if (username === "admin" && password === "secret123") {
    feedbackBox.className = "alert alert-success";
    feedbackBox.textContent = "Authentication successful! Redirecting...";
  } else {
    feedbackBox.className = "alert alert-danger";
    feedbackBox.textContent = "Invalid credentials. Please try again.";
    passwordInput.value = "";
    passwordInput.focus();
  }
});
// for hiding and showing password

const password = document.getElementById("password");
const eye = document.getElementsByClassName("fa-eye")[0];
const eyeSlash = document.getElementsByClassName("fa-eye-slash")[0];

eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeSlash.style.display = "block";
  password.setAttribute("type", "text");
});

eyeSlash.addEventListener("click", () => {
  eye.style.display = "block";
  eyeSlash.style.display = "none";
  password.setAttribute("type", "password");
});

// for toggle switch
const toggle = document.getElementsByClassName("toggle-btn")[0];
const tSwitch = document.getElementsByClassName("toggle-switch")[0];
toggle.addEventListener("click", () => {
  toggle.classList.toggle("selected");
  tSwitch.classList.toggle("selected");
});

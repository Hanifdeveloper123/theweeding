/*=====================
 Password hide/show js
==========================*/

const eye = document.querySelector(".feather-eye");
const eyeoff = document.querySelector(".feather-eye-off");
const passwordField = document.getElementById("password");
eyeoff.style.display = "none";
eye.style.display = "block";

eyeoff.addEventListener("click", () => {
  eyeoff.style.display = "none";
  eye.style.display = "block";
  passwordField.setAttribute('type', 'password');
});
eye.addEventListener("click", () => {
  eye.style.display = "none";
  eyeoff.style.display = "block";
  passwordField.setAttribute('type', 'text');
});

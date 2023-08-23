/*=====================
  Confirm Password js
==========================*/

const submitBtn = document.querySelector(".submit-btn");
submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (password.value == password2.value) {
        window.location.href = "login.html";
        return true;
    }

    if (password === "" || password2 === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (password !== password2) {
        alert("Passwords do not match.");
        return false;
    }
});

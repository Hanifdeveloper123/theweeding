// form Validation // 

(function () {
    'use strict'
    const form = document.getElementById('form-validation');
    const username = document.getElementById('username');
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmpassword = document.getElementById('confirmpassword');

    //Show input error messages
    function showError(input, message) {
        const formControl = input.parentElement;
        console.log(formControl.children);
        formControl.children[1].classList.add('error');
        const small = formControl.querySelector('small');
        small.innerText = message;
        small.classList.add('error');
        small.classList.remove('success');
    }

    //show success colour
    function showSucces(input) {
        const formControl = input.parentElement;
        formControl.children[1].classList.remove('error');
        formControl.children[1].classList.add('success');
        const small = formControl.querySelector('small');
        small.classList.add('success');
        small.classList.remove('error');

    }

    //check email is valid
    function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
            showSucces(input)
        } else {
            showError(input, 'Email is not invalid');
        }
    }


    //checkRequired fields
    function checkRequired(inputArr) {
        inputArr.forEach(function (input) {
            if (input.value.trim() === '') {
                showError(input, `${getFieldName(input)} is required`)
            } else {
                showSucces(input);
            }
        });
    }


    //check input Length
    function checkLength(input, min, max) {
        if (input.value.length < min) {
            showError(input, `${getFieldName(input)} must be at least ${min} characters`);
        } else if (input.value.length > max) {
            showError(input, `${getFieldName(input)} must be les than ${max} characters`);
        } else {
            showSucces(input);
        }
    }

    //get FieldName
    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    // check passwords match
    function checkPasswordMatch(input1, input2) {
        if (input1.value !== input2.value) {
            showError(input2, 'Passwords do not match');
        }
    }
    //Event Listeners
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        checkRequired([username, email, password, confirmpassword, firstname, lastname]);
        checkLength(username, 3, 15);
        checkLength(firstname, 3, 15);
        checkLength(lastname, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordMatch(password, confirmpassword);
    });
})()

//  steps for validation //

initMultiStepForm();

function initMultiStepForm() {
    const progressNumber = document.querySelectorAll(".step").length;
    const slidePage = document.querySelector(".slide-page");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");
    const stepsNumber = pages.length;

    if (progressNumber !== stepsNumber) {
        console.warn(
            "Error, number of steps in progress bar do not match number of pages"
        );
    }

    document.documentElement.style.setProperty("--stepNumber", stepsNumber);

    let current = 1;

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", function (event) {
            event.preventDefault();

            inputsValid = validateInputs(this);
            // inputsValid = true;

            if (inputsValid) {
                slidePage.style.marginLeft = `-${(100 / stepsNumber) * current
                    }%`;
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
            }
        });
    }

    for (let i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${(100 / stepsNumber) * (current - 2)
                }%`;
            bullet[current - 2].classList.remove("active");
            progressCheck[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    submitBtn.addEventListener("click", function () {
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        // setTimeout(function () {
        //     alert("Your Form Successfully Signed up");
        //     location.reload();
        // }, 800);
    });

    function validateInputs(ths) {
        let inputsValid = true;

        const inputs =
            ths.parentElement.parentElement.querySelectorAll("input");
        for (let i = 0; i < inputs.length; i++) {
            const valid = inputs[i].checkValidity();
            if (!valid) {
                inputsValid = false;
                inputs[i].classList.add("invalid-input");
            } else {
                inputs[i].classList.remove("invalid-input");
            }
        }
        return inputsValid;
    }
}

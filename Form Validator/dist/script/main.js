/* Note: classList.add -> adds error and success togther 
so we shoud use className and put the right classes */

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    const formControl = input.parentElement;
    const label = formControl.querySelector("label");
    if (input.value.trim() === "") {
      showError(input, `${label.innerText} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkLenght(input, min, max) {
  const formControl = input.parentElement;
  const label = formControl.querySelector("label");
  if (input.value.length < min) {
    showError(input, `${label.innerText} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${label.innerText} must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLenght(username, 3, 15);
  checkLenght(password, 6, 25);
  checkLenght(password2, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});

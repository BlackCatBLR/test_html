//form validation

let nameRE = /^[A-Za-z][A-Za-z '-]{1,29}$/;
let emailRE = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/;

const allInputFields = document.querySelectorAll("input");
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const mailTick = document.getElementById("mail-tick");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById("pw-confirm");
const submitButton = document.getElementById("submit");
const form = document.forms[0];



allInputFields.forEach((inputField) => {
  inputField.oninput = function () {
    if (this.classList.contains("wrong")) {
      this.classList.remove("wrong");
    }
  };
});

emailInput.onchange = function () {
  if (emailRE.test(emailInput.value)) {
    mailTick.classList.remove("wrong");
  } else {
    mailTick.classList.add("wrong");
    this.classList.add("wrong");
  }
};

passwordInput.oninput = function () {
  this.type = "password";
  this.classList.remove("wrong");
};

passwordConfirmationInput.oninput = function () {
  this.type = "password";
  this.classList.remove("wrong");
};

console.log(form);

form.addEventListener("submit", function (e) {
  if (!nameRE.test(firstNameInput.value)) {
    e.preventDefault();
    firstNameInput.classList.add("wrong");
    firstNameInput.value = "Please enter a valid first name";
    submitButton.classList.add("wrong-submit");
  } else if (!nameRE.test(lastNameInput.value)) {
    e.preventDefault();
    lastNameInput.classList.add("wrong");
    lastNameInput.value = "Please enter a valid last name";
    submitButton.classList.add("wrong-submit");
  } else if (!emailRE.test(emailInput.value)) {
    e.preventDefault();
    mailTick.classList.add("wrong");
    emailInput.classList.add("wrong");
    emailInput.value = "Please enter a valid email address";
    submitButton.classList.add("wrong-submit");
  } else if (!passwordRE.test(passwordInput.value)) {
    e.preventDefault();
    passwordInput.classList.add("wrong");
    passwordInput.type = "text";
    submitButton.classList.add("wrong-submit");

    if (passwordInput.value.length < 8) {
      passwordInput.value = "Enter at least 8 characters";
    } else if (!/[a-z]/.test(passwordInput.value)) {
      passwordInput.value = "Enter at least 1 small letter";
    } else if (!/[A-Z]/.test(passwordInput.value)) {
      passwordInput.value = "Enter at least 1 capital letter";
    } else if (!/[0-9]/.test(passwordInput.value)) {
      passwordInput.value = "Enter at least 1 digit";
    }
  } else if (passwordConfirmationInput.value !== passwordInput.value) {
    e.preventDefault();
    passwordConfirmationInput.classList.add("wrong");
    passwordConfirmationInput.type = "text";
    passwordConfirmationInput.value = "Your Password isn't matching";
    submitButton.classList.add("wrong-submit");
  } else {
    e.preventDefault();
    submitButton.classList.remove("wrong-submit");
    alert("Your registration was successful!");
    firstNameInput.value = "";
    lastNameInput.value = "";
    passwordInput.value = "";
    passwordConfirmationInput.value = "";
    emailInput.value = "";
   	var select = document.getElementsByTagName("option");
	for (var i = 0; i < select.length; i++) {
		select[i].removeAttribute("selected");
	} 
    document.querySelector('#day [value="01"]').setAttribute("selected", true);
    document.querySelector('#month [value="January"]').setAttribute("selected", true);
    document.querySelector('#year [value="1985"]').setAttribute("selected", true);
    document.querySelector('[value="0"]').setAttribute("selected", true);
	mailTick.classList.add("wrong");
    window.stop();
  }
});

//animation visible

const h2 = document.querySelector("h2");
setTimeout(() => h2.classList.add("visible"), 1000);
const formP = document.querySelector("form>p");
setTimeout(() => formP.classList.add("visible"), 1500);
const fNameDiv = document.querySelector(".first-name");
setTimeout(() => fNameDiv.classList.add("visible"), 2000);
const lNameDiv = document.querySelector(".last-name");
setTimeout(() => lNameDiv.classList.add("visible"), 2500);
const nationality = document.querySelector(".nationality");
setTimeout(() => nationality.classList.add("visible"), 3000);
const mail = document.querySelector(".mail");
setTimeout(() => mail.classList.add("visible"), 3500);
const DOB = document.querySelector(".date-of-birth");
setTimeout(() => DOB.classList.add("visible"), 4000);
const gender = document.querySelector(".gender");
setTimeout(() => gender.classList.add("visible"), 4500);
const pwDiv = document.querySelector(".password");
setTimeout(() => pwDiv.classList.add("visible"), 5000);
const pwConfDiv = document.querySelector(".pw-confirm");
setTimeout(() => pwConfDiv.classList.add("visible"), 5500);
const loginSignUp = document.querySelector(".login-signup");
setTimeout(() => loginSignUp.classList.add("visible"), 6000);


new Vivus("Profile", {
  type: "oneByOne",
  duration: 200,
  animTimingFunction: Vivus.EASE,
});


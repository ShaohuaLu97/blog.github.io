// // Set two types of form message on switch
// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector('.form_message');

//     messageElement.textContent = message;
//     messageElement.classList.remove("form_message_success", "form_message_error");
//     messageElement.classList.add('form_message_${type}');
// }

// // Appear Input error on top
// function setInputError(inputElement, message) {
//     inputElement.classList.add("form_input_error");
//     inputElement.parentElement.querySelector(".form_input_errormessage").textContent = message;
// }

// // Clear Input error after User input data
// function clearInputError(inputElement) {
//     inputElement.classList.remove("form_input_error");
//     inputElement.parentElement.querySelector(".form_input_errormessage").textContent = "";

// }

// Name and Password from the register-form
var registerUsername = document.getElementById('registerUsername');
var registerPassword = document.getElementById('registerPassword');

// Storing input from register-form
function store() {
    localStorage.setItem(registerUsername.value, registerPassword.value);
}

// Check if input data matches the existing data
// window.localStorage.clear();
function check() {
    // input data from the login-form
    var validateName = document.getElementById('loginUsername');
    var validatePassword = document.getElementById('loginPassword');

    // store data from the register-form
    var storedUser = localStorage.getItem(validateName.value);

    // check if stored data from register-form is equal to data from login-form
    if(validatePassword.value == storedUser) {
        alert('You have successfully logged in.');
    }else {
        alert('Invalid User Name or Password.');
    }
}


// Switch between Login and Register Form
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const registerForm = document.querySelector("#register");

    document.querySelector("#linkRegister").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form_hidden");
        registerForm.classList.remove("form_hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form_hidden");
        registerForm.classList.add("form_hidden");
    });

    // // validation of Username's length
    // document.querySelectorAll(".form_input").forEach(inputElement => {
    //     inputElement.addEventListener("blur", e => {
    //         if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
    //             setInputError(inputElement, "Username must be at least 10 characters in length")
    //         }
    //     });

    //     inputElement.addEventListener("input", e => {
    //         clearInputError(inputElement);
    //     });
    // });

    // document.querySelector("loginBtn").addEventListener("click", e => {
    //     e.preventDefault();
    // })

});
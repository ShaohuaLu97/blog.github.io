// Name and Password from the register-form
var registerUsername = document.getElementById('registerUsername'),
    registerPassword = document.getElementById('registerPassword');

// Storing input from register-form
function store() {
    localStorage.setItem(registerUsername.value, registerPassword.value);
}

// Check if input data matches the existing data
// window.localStorage.clear();
function check() {
    event.preventDefault();
    // input data from the login-form
    var validateName = document.getElementById('loginUsername');
    var validatePassword = document.getElementById('loginPassword');

    // store data from the register-form
    var storedUser = localStorage.getItem(validateName.value);

    // check if stored data from register-form is equal to data from login-form
    if(validatePassword.value == storedUser) {
            window.location = "./resume.html";
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

});
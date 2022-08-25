// // Name and Password from the register-form
// var registerUsername = document.getElementById('registerUsername');
// var registerPassword = document.getElementById('registerPassword');

// // Storing input from register-form
// function store() {
//     localStorage.setItem(registerUsername.value, registerPassword.value);
// }

// // Check if input data matches the existing data
// // window.localStorage.clear();
// function check() {
//     // input data from the login-form
//     var validateName = document.getElementById('loginUsername');
//     var validatePassword = document.getElementById('loginPassword');

//     // store data from the register-form
//     var storedUser = localStorage.getItem(validateName.value);

//     // check if stored data from register-form is equal to data from login-form
//     if(validatePassword.value == storedUser) {
//         alert('You have successfully logged in.');
//     }else {
//         alert('Invalid User Name or Password.');
//     }
// }

// 1
const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

if (!indexedDB) {
  console.log("IndexedDB could not be found in this browser.");
}

// 2
const request = indexedDB.open("UserDatabase", 1);

request.onerror = function (event) {
  console.error("An error occurred with IndexedDB");
  console.error(event);
};

request.onupgradeneeded = function () {
  //1
  const db = request.result;

  //2
  const store = db.createObjectStore("users", { keyPath: "id" });

  //3
  store.createIndex("user_name", ["name"], { unique: false });

  // 4
  store.createIndex("name_password", ["name", "password"], {
    unique: false,
  });
};

request.onsuccess = function () {
  console.log("Database opened successfully");

  const db = request.result;

  // 1
  const transaction = db.transaction("users", "readwrite");

  //2
  const store = transaction.objectStore("users");
  const nameIndex = store.index("user_name");
  const namePasswordIndex = store.index("name_password");

  //3
  store.put({ id: 1, name: "White", password: "white99" });
  store.put({ id: 2, name: "Red", password: "red99" });
  store.put({ id: 3, name: "Steven", password: "steven99" });
  store.put({ id: 4, name: "Josh", password: "josh99" });

  //4
  const idQuery = store.get(4);
  const nameQuery = nameIndex.get(["Red"]);
  const namePasswordQuery = namePasswordIndex.get(["Red", "red99"]);

  // 5
  idQuery.onsuccess = function () {
    console.log("idQuery", idQuery.result);
  };
  colourQuery.onsuccess = function () {
    console.log("nameQuery", nameQuery.result);
  };
  colourMakeQuery.onsuccess = function () {
    console.log("namePasswordQuery", namePasswordQuery.result);
  };

  // 6
  transaction.oncomplete = function () {
    db.close();
  };
};

// Switch between Login and Register Form
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const registerForm = document.querySelector("#register");

  document.querySelector("#linkRegister").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.add("form_hidden");
    registerForm.classList.remove("form_hidden");
  });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form_hidden");
    registerForm.classList.add("form_hidden");
  });
});
function showForm(formId){
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}

/* Shows Password */

function showPassword(button) {

    const passwordInput = button.previousElementSibling;

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        button.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        button.textContent = "Show";
    }
}

// REGISTER
const registerForm = document.querySelector("#register-form form");

registerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = registerForm.querySelector('input[name="name"]').value;
    const email = registerForm.querySelector('input[name="email"]').value;
    const password = registerForm.querySelector('input[name="password"]').value;

if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields.");
    return;
}

    const user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account registered!");

    showForm("login-form");
});


// LOGIN
const loginForm = document.querySelector("#login-form form");

const wrong = document.querySelector(".wrong");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

const name = loginForm.querySelector('input[name="user"]').value;
const password = loginForm.querySelector('input[name="password"]').value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        wrong.textContent = "Incorrect Login";
        return;
    }

    if (name === savedUser.name && password === savedUser.password ) {

        alert("Login successful!");

        localStorage.setItem("loggedIn", "true");

        window.location.href = "../index.html";

    } else {

        wrong.textContent = "Incorrect Login";

    }
});
function showForm(formId) {

    document.querySelectorAll(".form-box").forEach(form => {
        form.classList.remove("active");
    });

    document.getElementById(formId).classList.add("active");

    // Clear "Incorrect Logins" message
    const wrong = document.querySelector(".wrong");

    if (wrong) {
        wrong.textContent = "";
    }
}
const user = JSON.parse(localStorage.getItem("user"));
const loggedIn = localStorage.getItem("loggedIn");

const heading = document.querySelector(".container h2");
const loginButton = document.querySelector(".heading a");

if (loggedIn === "true" && user) {

    // Welcome messages
    const messages = [
        `Welcome ${user.name}`,
        `Bienvenue, ${user.name}!`,
        `${user.name} أهلاً بك!`,
        `Wsp ${user.name}!`,
        `Salam ${user.name}!`,
        `欢迎, ${user.name}!`
    ];

    // Pick a random message
    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    heading.textContent = randomMessage;


    // Change Login button to Sign Out
    loginButton.textContent = "Sign Out";

    // Stop it from going to the login page
    loginButton.href = "#";

    // Sign out when clicked
    loginButton.addEventListener("click", function(event) {

        event.preventDefault();

        // Remove logged-in status
        localStorage.removeItem("loggedIn");

        // Refresh the page
        location.reload();
    });

} else {

    // User isn't logged in
    heading.textContent = "Login to Begin";

    loginButton.textContent = "Login";
    loginButton.href = "login/login.html";
}
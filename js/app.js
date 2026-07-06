// Get Elements
const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

// Show / Hide Password
togglePassword.addEventListener("click", () => {

    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }

});

// Login Validation
loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const userEmail = email.value.trim();
    const userPassword = password.value.trim();

    // Demo Login Credentials
    const demoEmail = "admin@gmail.com";
    const demoPassword = "admin123";

    if (userEmail === demoEmail && userPassword === demoPassword) {

        localStorage.setItem("loggedIn", "true");

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Email or Password");

    }

});
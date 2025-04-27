const form = document.getElementById('login-form');
const togglePassword = document.getElementById('toggle-password');
const passwordInput = document.getElementById('password');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const loginButton = document.getElementById('login-btn');
const signUpButton = document.getElementById('sign-up-btn');
const rememberMeCheckbox = document.getElementById('remember-me');
const forgotPasswordLink = document.getElementById('forgot-password');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let errors = validateForm();
    if (errors.length === 0) {
        alert("Login successful!");
        resetForm();
    } else {
        displayErrors(errors);
    }
});

function validateForm() {
    let errors = [];
    if (nameInput.value.trim() === "") {
        errors.push("Name is required.");
    }
    if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
        errors.push("Please enter a valid email.");
    }
    if (passwordInput.value.trim() === "") {
        errors.push("Password is required.");
    }
    return errors;
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function displayErrors(errors) {
    let errorMessages = errors.join('\n');
    alert(errorMessages);
}

function resetForm() {
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
}

togglePassword.addEventListener('click', function() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

loginButton.addEventListener('click', function() {
    loginButton.disabled = true;
    setTimeout(function() {
        loginButton.disabled = false;
    }, 3000);
});

signUpButton.addEventListener('click', function() {
    alert("Redirecting to the sign-up page...");
});

forgotPasswordLink.addEventListener('click', function() {
    alert("Redirecting to the password recovery page...");
});

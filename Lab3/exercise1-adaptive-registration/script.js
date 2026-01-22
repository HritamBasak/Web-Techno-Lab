function roleChanged() {
    const role = document.getElementById("role").value;
    const error = document.getElementById("error");
    error.textContent = "";

    if (role === "admin") {
        error.textContent = "Admin requires strong password (min 8 chars)";
    }
}

function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const role = document.getElementById("role").value;
    const error = document.getElementById("error");

    if (!email.endsWith("@gmail.com")) {
        error.textContent = "Email must be a gmail.com address";
        return false;
    }

    if (password !== confirm) {
        error.textContent = "Passwords do not match";
        return false;
    }

    if (role === "admin" && password.length < 8) {
        error.textContent = "Admin password must be at least 8 characters";
        return false;
    }

    return true;
}

document.querySelector('form').addEventListener('submit', function (event) {
    let isValid = true;
    let messages = [];

    // Get form elements
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value.trim();

    // Validate Name
    if (name === "") {
        isValid = false;
        messages.push("Name is required.");
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        messages.push("Please enter a valid email address.");
    }

    // Validate Password
    if (password.length < 6) {
        isValid = false;
        messages.push("Password must be at least 6 characters long.");
    }

    // Validate Phone
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        messages.push("Phone number must be 10 digits.");
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission
        alert(messages.join("\n"));
    }
});
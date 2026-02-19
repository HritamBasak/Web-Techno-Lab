const usernameInput = document.getElementById("username");
const statusSpan = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");

let isAvailable = false;

usernameInput.addEventListener("input", () => {
    const username = usernameInput.value.trim();

    if (!username) {
        statusSpan.textContent = "";
        return;
    }

    statusSpan.textContent = "Checking...";
    
    fetch("users.json")
        .then(res => res.json())
        .then(data => {
            const exists = data.some(u => u.username === username);

            if (exists) {
                statusSpan.textContent = "Username already taken";
                statusSpan.className = "taken";
                isAvailable = false;
            } else {
                statusSpan.textContent = "Username available";
                statusSpan.className = "available";
                isAvailable = true;
            }
        })
        .catch(() => {
            statusSpan.textContent = "Error checking username";
        });
});

submitBtn.addEventListener("click", () => {
    if (!isAvailable) {
        alert("Please choose an available username");
    } else {
        alert("Form submitted successfully");
    }
});

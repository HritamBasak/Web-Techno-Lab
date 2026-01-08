function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !mobile || !password) {
        alert("All fields are mandatory");
        return;
    }

    if (mobile.length !== 10) {
        alert("Mobile number must be 10 digits");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        alert("Email already registered");
        return;
    }

    users.push({ name, email, mobile });
    localStorage.setItem("users", JSON.stringify(users));

    displayUsers();
    event.target.reset();
}

function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((user, index) => {
        table.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td><button onclick="deleteUser(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

function clearAll() {
    localStorage.clear();
    displayUsers();
}

displayUsers();

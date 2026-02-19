let users = [];
function loadUsers() {
    const loading = document.getElementById("loading");
    loading.textContent = "Loading users...";

    fetch("users.json")
        .then(res => res.json())
        .then(data => {
            users = data;
            displayUsers();
            loading.textContent = "";
        })
        .catch(() => {
            loading.textContent = "Error loading users";
        });
}
function displayUsers() {
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((u, index) => {
        table.innerHTML += `
            <tr>
                <td>${u.id}</td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>
                    <button onclick="editUser(${index})">Edit</button>
                    <button onclick="deleteUser(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}
function addUser() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("All fields required");
        return;
    }

    const newUser = {
        id: Date.now(),
        name,
        email
    };

    users.push(newUser);
    displayUsers();
}
function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}
function editUser(index) {
    const newName = prompt("Enter new name:");
    const newEmail = prompt("Enter new email:");

    if (newName && newEmail) {
        users[index].name = newName;
        users[index].email = newEmail;
        displayUsers();
    }
}

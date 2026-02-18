let xmlDoc = null;
function loadBooks() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "books.xml", true);

    xhr.onload = function () {
        xmlDoc = xhr.responseXML;
        displayBooks();
    };

    xhr.send();
}
function displayBooks() {
    const books = xmlDoc.getElementsByTagName("book");
    const table = document.getElementById("bookTable");
    table.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        const id = books[i].getElementsByTagName("id")[0].textContent;
        const title = books[i].getElementsByTagName("title")[0].textContent;
        const author = books[i].getElementsByTagName("author")[0].textContent;
        const status = books[i].getElementsByTagName("status")[0].textContent;

        table.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${title}</td>
                <td>${author}</td>
                <td>${status}</td>
                <td>
                    <button onclick="toggleStatus(${i})">Toggle</button>
                    <button onclick="deleteBook(${i})">Delete</button>
                </td>
            </tr>
        `;
    }
}
function addBook() {
    if (!xmlDoc) return alert("Load books first");

    const newBook = xmlDoc.createElement("book");

    const id = xmlDoc.createElement("id");
    id.textContent = Date.now();

    const title = xmlDoc.createElement("title");
    title.textContent = "New Book";

    const author = xmlDoc.createElement("author");
    author.textContent = "Unknown";

    const status = xmlDoc.createElement("status");
    status.textContent = "Available";

    newBook.appendChild(id);
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(status);

    xmlDoc.documentElement.appendChild(newBook);

    displayBooks();
}
function toggleStatus(index) {
    const books = xmlDoc.getElementsByTagName("book");
    const statusNode = books[index].getElementsByTagName("status")[0];

    statusNode.textContent =
        statusNode.textContent === "Available" ? "Issued" : "Available";

    displayBooks();
}
function deleteBook(index) {
    const books = xmlDoc.getElementsByTagName("book");
    const bookNode = books[index];

    xmlDoc.documentElement.removeChild(bookNode);
    displayBooks();
}

let inventory = [];
function loadInventory() {
    fetch("inventory.json")
        .then(res => res.json())
        .then(data => {
            inventory = data;
            displayInventory(inventory);
        })
        .catch(() => alert("Error loading inventory"));
}
function displayInventory(data) {
    const table = document.getElementById("inventoryTable");
    const totalSpan = document.getElementById("totalValue");
    table.innerHTML = "";

    let total = 0;

    data.forEach((p, index) => {
        total += p.price * p.stock;

        table.innerHTML += `
            <tr class="${p.stock < 10 ? 'low-stock' : ''}">
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>${p.category}</td>
                <td>${p.price}</td>
                <td>${p.stock}</td>
                <td>
                    <button onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    totalSpan.textContent = total;
}
function addProduct() {
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const price = Number(document.getElementById("price").value);
    const stock = Number(document.getElementById("stock").value);

    if (!name || !category || price <= 0 || stock < 0) {
        alert("Invalid product data");
        return;
    }

    const product = {
        id: Date.now(),
        name,
        category,
        price,
        stock
    };

    inventory.push(product);
    displayInventory(inventory);
}
function deleteProduct(index) {
    inventory.splice(index, 1);
    displayInventory(inventory);
}
function searchProduct() {
    const search = document.getElementById("searchCategory").value.toLowerCase();

    const filtered = inventory.filter(p =>
        p.category.toLowerCase().includes(search)
    );

    displayInventory(filtered);
}

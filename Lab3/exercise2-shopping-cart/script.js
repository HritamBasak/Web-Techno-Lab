let cart = [];

function addItem() {
    const name = document.getElementById("productName").value;
    const price = Number(document.getElementById("price").value);
    const quantity = Number(document.getElementById("quantity").value);

    if (!name || price <= 0 || quantity <= 0) {
        alert("Enter valid product details");
        return;
    }

    cart.push({ name, price, quantity });
    displayCart();
}

function displayCart() {
    const list = document.getElementById("cartList");
    const totalSpan = document.getElementById("total");
    list.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        list.innerHTML += `
            <li>
                ${item.name} - ₹${item.price} × ${item.quantity}
                <button onclick="removeItem(${index})">Remove</button>
            </li>
        `;
    });

    totalSpan.textContent = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

function applyCoupon() {
    const code = document.getElementById("coupon").value.toUpperCase();
    let total = Number(document.getElementById("total").textContent);

    if (code === "DISCOUNT10") {
        total = total - total * 0.1;
        alert("10% discount applied");
    }

    document.getElementById("total").textContent = total;
}

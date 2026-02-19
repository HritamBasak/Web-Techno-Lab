let debounceTimer;
const searchInput = document.getElementById("search");
const list = document.getElementById("productList");
const loading = document.getElementById("loading");

searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
        searchProducts(searchInput.value.trim().toLowerCase());
    }, 400);
});
function searchProducts(query) {
    loading.textContent = "Loading...";

    fetch("products.json")
        .then(res => res.json())
        .then(data => {
            const filtered = data.filter(p =>
                p.name.toLowerCase().includes(query)
            );

            displayProducts(filtered);
            loading.textContent = "";
        })
        .catch(() => {
            loading.textContent = "Error loading products";
        });
}
function displayProducts(products) {
    list.innerHTML = "";

    if (products.length === 0) {
        list.innerHTML = "<li>No products found</li>";
        return;
    }

    products.forEach(p => {
        list.innerHTML += `<li>${p.name} — ₹${p.price}</li>`;
    });
}

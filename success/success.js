// Base code is taken from my JS assignment 1, but I have made some changes to it to make it more suitable for this project. https://github.com/SondreGundersrud/sondregundersrud.github.io/blob/main/js/pages/confirmation.js

const idEl = document.querySelector("#order-id");
const sumEl = document.querySelector("#order-summary");

const params = new URLSearchParams(location.search);
const id = params.get("id");
if (idEl) idEl.textContent = id ? `Order ID: ${id}` : "Order received";

const last = JSON.parse(localStorage.getItem("lastOrder") || "null");

if (!last) {
    sumEl.innerHTML = "<p>No recent order found.</p>";
} else {
    const lines = last.cart.map(x =>
        `<li>${x.title} × ${x.qty} — $ ${(x.price * x.qty).toFixed(2)}</li>`
    ).join("");
    sumEl.innerHTML = `
        <ul>${lines}</ul>
        <p><strong>Total:</strong> $ ${last.totals.subtotal.toFixed(2)}</p>
        <p>Thank you for shopping with Clair Collective!</p>
    `;
}
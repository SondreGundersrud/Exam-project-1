// Code taken from my js assignment, https://github.com/SondreGundersrud/sondregundersrud.github.io/blob/main/js/pages/product.js and modified to fit the project.

const container = document.querySelector("#container")
const API_URL = "https://v2.api.noroff.dev/online-shop"

async function fetchAPIProducts() {
    try {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")

        if (!id) {
            container.textContent = "No product ID provided in the URL.";
            return;
        }
        const response = await fetch(`${API_URL}/${id}`)
        const data = await response.json()
        const product = data.data

    const productDiv = document.createElement("div");
    productDiv.className = "product-details";

    const image = document.createElement("img");
    image.className = "product-image";
    image.src = product.image.url;
    image.alt = product.image.alt;

    const infoDiv = document.createElement("div");
    infoDiv.className = "product-info";

    const title = document.createElement("h2");
    title.className = "product-title";
    title.textContent = product.title;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = `$ ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

    const buyButton = document.createElement("button");
    buyButton.className = "ctaButton";
    buyButton.textContent = "Add to Cart";
    buyButton.addEventListener("click", () => {
        if (!window.Cart) return console.error("Cart not available");
    window.Cart.addToCart({
        id: product.id,
        title: product.title,
        price: Number(product.price),
        image: product?.image?.url ?? product?.images?.[0]?.url ?? ""
        });
    buyButton.textContent = "Added to cart!";
    setTimeout(() => (buyButton.textContent = "Add to Cart"), 3000);
    });

    const backButton = document.createElement("button");
    backButton.className = "ctaButton";
    backButton.textContent = "← Back to products";
    backButton.addEventListener("click", () => history.back());

    infoDiv.append(title, description, price, backButton, buyButton);
    productDiv.append(image, infoDiv);
    detailedContainer.appendChild(productDiv);
    } catch (error) {
    console.error("Error while fetching product:", error);
    }
}

// Scroll to top button functionality taken from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp and modified to fit the project.
let topButton = document.getElementById("toTopBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener("DOMContentLoaded", () => {
    window.Cart?.updateCartCount?.();
});

fetchAPIProducts()

    // User Stories:
    // As a user, I want to see a responsive layout showing the product's title, description, price, discounted price (if applicable), rating, reviews, and tags fetched from the API
    // As a user, I want each specific product page to have a "share" icon with a shareable URL (including a query string or hash parameter containing the product ID), so I can share the product with others easily
    // As the user, when logged in, I want an "Add to Cart" button on the product page, so I can add products to my shopping cart
//This base is added from my own js assignment, https://github.com/SondreGundersrud/sondregundersrud.github.io/blob/main/js/pages/home.js

const container = document.querySelector("#container");
const API_URL = "https://v2.api.noroff.dev/online-shop";
const categorySelect = document.querySelector("#category");

let allProducts = [];

async function fetchAPIProducts() {
try {
    const response = await fetch(API_URL);
    const data = await response.json();
    allProducts = Array.isArray(data?.data) ? data.data : data;
    const previewProducts = allProducts;
    render(allProducts);
    categorySelect.addEventListener("change", applyFilters);
} catch (error) {
    container.textContent = "Could not load products at this time.";
    console.error("Error while fetching products:", error.message);
  }
}

function render(list) {
  container.innerHTML = "";
  list.forEach((product) => {
    const box = document.createElement("div");
    const image = document.createElement("img");
    const content = document.createElement("div");
    const title = document.createElement("h2");
    const price = document.createElement("p");
    const link = document.createElement("a");

    box.className = "box";
    image.className = "box-image";
    content.className = "box-content";
    title.className = "box-title";
    price.className = "box-price";

    image.src = product?.image?.url ?? product?.images?.[0]?.url ?? "";
    image.alt = product?.image?.alt ?? product?.title ?? "product";
    title.textContent = product.title;
    price.textContent = `$ ${Number(product.price).toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
    link.href = `index.html?id=${product.id}`;

    content.appendChild(title);
    content.appendChild(price);
    box.appendChild(image);
    box.appendChild(content);
    link.appendChild(box);
    container.appendChild(link);
  });
}

function applyFilters() {
  const c = categorySelect.value.toLowerCase();
  const norm = (v) => (v ?? "").toString().toLowerCase();

  const filtered = allProducts.filter((p) => {
    const category = norm(p.category);
    const tags = Array.isArray(p.tags) ? p.tags.map(norm) : [];
    const categoryMatch =
      c === "all" ||
      category === c ||
      tags.includes(c); 

    return categoryMatch;
  });

  if (filtered.length > 0) {
      render(filtered);
  } else {
      container.innerHTML = "<p>No products found for the selected category.</p>";
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

window.Cart?.updateCartCount?.();

fetchAPIProducts();
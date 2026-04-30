const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});

// Code for hamburger menu was taken from https://www.youtube.com/watch?v=aNDqzlAKmZc and modified to fit the project. Link to the GitHub repo: https://github.com/treehouse/ham-menu . Accessed 30.04.2026.
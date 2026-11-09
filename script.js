// Smooth page loading
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation clicked:", link.textContent);
    });
});

// Contact button
const contactButton = document.querySelector(".btn");

if (contactButton) {
    contactButton.addEventListener("click", () => {
        console.log("Opening contact section");
    });
}

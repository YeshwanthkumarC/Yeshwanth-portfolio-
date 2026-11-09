// Smooth fade-in animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Button click effect
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", () => {
        alert("📧 Contact section will be added soon!");
    });
}

// Reveal animation while scrolling
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, section").forEach((el) => {
    observer.observe(el);
});

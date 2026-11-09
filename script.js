// Smooth scrolling for navigation links
document.querySelectorAll('nav a, .btn').forEach(link => {
    link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Simple page loading effect
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

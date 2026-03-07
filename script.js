// Simple fade-in effect on scroll
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.grid-item').forEach(item => {
    item.style.opacity = "0";
    item.style.transition = "opacity 1s ease-out";
    observer.observe(item);
});

// CSS to support the script
document.querySelectorAll('.grid-item').forEach(item => {
    item.classList.add('fade-in');
});

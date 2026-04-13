// script.js
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
        header.style.padding = '10px 8%';
    } else {
        header.style.background = 'rgba(0,0,0,0.8)';
        header.style.padding = '20px 8%';
    }
});

// Example: Navigation click handler (can be expanded for AJAX)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        console.log(`Navigating to: ${this.innerText}`);
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 80) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.padding = '15px 8%';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'transparent';
        header.style.padding = '25px 8%';
        header.style.boxShadow = 'none';
    }
});

// Scroll Reveal Logic
const revealElements = () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(window_el => {
        const windowHeight = window.innerHeight;
        const revealTop = window_el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            window_el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealElements);
// Trigger once on load
revealElements();
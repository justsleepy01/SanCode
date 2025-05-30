document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const themeSwitch = document.querySelector('.theme-switch input');
    const body = document.body;
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        themeSwitch.checked = currentTheme === 'dark-mode';
        updateThemeLabel();
    }
    
    // Theme switch event
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
        updateThemeLabel();
    });
    
    function updateThemeLabel() {
        const labels = document.querySelectorAll('.theme-switch-label');
        labels.forEach(label => {
            label.textContent = body.classList.contains('dark-mode') ? 'Dark Mode' : 'Light Mode';
        });
    }
    
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message!');
            this.reset();
        });
    }
});
// Add this to your existing JavaScript
function rgbHeaderFallback() {
    const header = document.querySelector('header h1');
    if (!header) return;
    
    // Check if animation is working
    const animationCheck = window.getComputedStyle(header).animationName;
    
    if (animationCheck === 'none' || !animationCheck) {
        // CSS animation failed - use JS fallback
        let hue = 0;
        function updateColor() {
            hue = (hue + 1) % 360;
            header.style.color = `hsl(${hue}, 100%, 50%)`;
            requestAnimationFrame(updateColor);
        }
        updateColor();
    }
}

document.addEventListener('DOMContentLoaded', rgbHeaderFallback);
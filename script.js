document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons
    const aboutBtn = document.getElementById('aboutBtn');
    const projectsBtn = document.getElementById('projectsBtn');
    const contactBtn = document.getElementById('contactBtn');
    
    // Sections
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    
    // Interactive buttons
    const funFactBtn = document.getElementById('funFactBtn');
    const funFact = document.getElementById('funFact');
    const emailBtn = document.getElementById('emailBtn');
    const email = document.getElementById('email');
    
    // Navigation functionality
    aboutBtn.addEventListener('click', function() {
        aboutSection.classList.remove('hidden');
        projectsSection.classList.add('hidden');
        contactSection.classList.add('hidden');
    });
    
    projectsBtn.addEventListener('click', function() {
        aboutSection.classList.add('hidden');
        projectsSection.classList.remove('hidden');
        contactSection.classList.add('hidden');
    });
    
    contactBtn.addEventListener('click', function() {
        aboutSection.classList.add('hidden');
        projectsSection.classList.add('hidden');
        contactSection.classList.remove('hidden');
    });
    
    // Interactive elements
    funFactBtn.addEventListener('click', function() {
        if (funFact.classList.contains('hidden')) {
            funFact.classList.remove('hidden');
            funFactBtn.textContent = 'Hide Fun Fact';
        } else {
            funFact.classList.add('hidden');
            funFactBtn.textContent = 'Show Fun Fact';
        }
    });
    
    emailBtn.addEventListener('click', function() {
        if (email.classList.contains('hidden')) {
            email.classList.remove('hidden');
            emailBtn.textContent = 'Hide Email';
        } else {
            email.classList.add('hidden');
            emailBtn.textContent = 'Reveal Email';
        }
    });
    
    // Add animation to interactive buttons
    const interactiveButtons = document.querySelectorAll('.interactive-btn');
    interactiveButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
        });
        
        button.addEventListener('mouseout', function() {
            this.style.boxShadow = 'none';
        });
    });
});document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.global-overlay');
    const moreBtn = document.getElementById('more-transparent');
    const lessBtn = document.getElementById('less-transparent');
    
    // Set initial opacity (50%)
    let currentOpacity = 0.5;
    overlay.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    
    // Increase transparency
    moreBtn.addEventListener('click', function() {
        currentOpacity = Math.min(currentOpacity + 0.1, 0.9);
        overlay.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    });
    
    // Decrease transparency
    lessBtn.addEventListener('click', function() {
        currentOpacity = Math.max(currentOpacity - 0.1, 0.1);
        overlay.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    });
    
    // Dynamic opacity on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const newOpacity = 0.5 + (scrollPosition / 2000);
        overlay.style.backgroundColor = `rgba(0, 0, 0, ${Math.min(newOpacity, 0.8)})`;
    });
});
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

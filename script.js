document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons
    const aboutBtn = document.getElementById('aboutBtn');
    const projectsBtn = document.getElementById('projectsBtn');
    const contactBtn = document.getElementById('contactBtn');
    
    // Sections
    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');
    
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
});
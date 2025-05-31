document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.querySelector('.theme-switch input');
    const body = document.body;
    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        themeSwitch.checked = currentTheme === 'dark-mode';
        updateThemeLabel();
    }
    
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
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            this.reset();
        });
    }
});
function rgbHeaderFallback() {
    const header = document.querySelector('header h1');
    if (!header) return;

    const animationCheck = window.getComputedStyle(header).animationName;
    
    if (animationCheck === 'none' || !animationCheck) {
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
const tiltCard = document.querySelector('.tilt-card');
if (tiltCard) {
  tiltCard.addEventListener('mousemove', (e) => {
    const cardWidth = tiltCard.offsetWidth;
    const cardHeight = tiltCard.offsetHeight;
    const centerX = tiltCard.offsetLeft + cardWidth/2;
    const centerY = tiltCard.offsetTop + cardHeight/2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / cardHeight * -10).toFixed(2);
    const rotateY = (mouseX / cardWidth * 10).toFixed(2);
    
    tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    tiltCard.querySelector('.tilt-card-image img').style.transform = 'scale(1.05)';
  });
  
  tiltCard.addEventListener('mouseleave', () => {
    tiltCard.style.transform = 'rotateX(0) rotateY(0)';
    tiltCard.querySelector('.tilt-card-image img').style.transform = 'scale(1)';
  });
}
document.querySelector('.contact-link').addEventListener('click', function(e) {
  e.preventDefault();
  setTimeout(() => {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }, 1500);
  this.textContent = 'Preparing contact form...';
  this.style.backgroundColor = '#4CAF50';
});
// Add festive lights around the recipe card
document.addEventListener('DOMContentLoaded', function() {
    const recipeCard = document.querySelector('.recipe-card');
    const numberOfLights = 20;

    // Create festival lights
    for (let i = 0; i < numberOfLights; i++) {
        const light = document.createElement('div');
        light.className = 'festival-light';
        
        // Position lights around the card
        const angle = (i / numberOfLights) * Math.PI * 2;
        const radius = Math.min(recipeCard.offsetWidth, recipeCard.offsetHeight) / 2;
        
        light.style.left = `${50 + Math.cos(angle) * 48}%`;
        light.style.top = `${50 + Math.sin(angle) * 48}%`;
        
        // Random delay for twinkling effect
        light.style.animationDelay = `${Math.random() * 2}s`;
        
        recipeCard.appendChild(light);
    }

    // Add hover effects to recipe sections
    const sections = document.querySelectorAll('.recipe-section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add festive rangoli pattern to ingredients and instructions
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#D4AF37';
            this.style.transition = 'color 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.color = '';
        });
    });

    // Add sparkle effect on h1 hover
    const title = document.querySelector('h1');
    title.addEventListener('mouseenter', createSparkles);
    title.addEventListener('mouseleave', removeSparkles);
});

function createSparkles() {
    const title = document.querySelector('h1');
    for (let i = 0; i < 10; i++) {
        const sparkle = document.createElement('span');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: #D4AF37;
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: sparkleAnim 1s ease-in-out;
            pointer-events: none;
        `;
        title.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

function removeSparkles() {
    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach(sparkle => sparkle.remove());
}

// Add CSS animation for sparkles
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleAnim {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1) rotate(180deg); opacity: 1; }
        100% { transform: scale(0) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Add smooth scroll behavior for better navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
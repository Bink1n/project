// Image Carousel Functionality
class ImageCarousel {
    constructor(carouselElement) {
        this.carousel = carouselElement;
        this.slides = carouselElement.querySelectorAll('.carousel-slide');
        this.dots = carouselElement.querySelectorAll('.carousel-dot');
        this.prevBtn = carouselElement.querySelector('.carousel-prev');
        this.nextBtn = carouselElement.querySelector('.carousel-next');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 3000; // 3 seconds
        
        this.init();
    }
    
    init() {
        // Show first slide
        this.showSlide(0);
        
        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        // Auto-play
        this.startAutoPlay();
        
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
    }
    
    showSlide(index) {
        // Remove active class from all
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current
        this.slides[index].classList.add('active');
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        let next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }
    
    prevSlide() {
        let prev = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prev);
    }
    
    goToSlide(index) {
        this.showSlide(index);
    }
    
    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Initialize all carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.image-carousel');
    carousels.forEach(carousel => {
        new ImageCarousel(carousel);
    });
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Create multiple floating hearts dynamically
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝'];
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.animationDuration = (15 + Math.random() * 15) + 's';
        heart.style.fontSize = (15 + Math.random() * 15) + 'px';
        heart.style.opacity = 0.05 + Math.random() * 0.1;
        heartsContainer.appendChild(heart);
    }
}

// Create floating butterflies
function createFloatingButterflies() {
    const heartsContainer = document.querySelector('.hearts');
    const butterflyEmojis = ['🦋', '🦋'];
    const butterflyCount = 8;
    
    for (let i = 0; i < butterflyCount; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'floating-butterfly';
        butterfly.textContent = butterflyEmojis[Math.floor(Math.random() * butterflyEmojis.length)];
        butterfly.style.left = Math.random() * 100 + '%';
        butterfly.style.top = Math.random() * 100 + '%';
        butterfly.style.animationDelay = Math.random() * 8 + 's';
        butterfly.style.animationDuration = (20 + Math.random() * 10) + 's';
        butterfly.style.fontSize = (18 + Math.random() * 12) + 'px';
        butterfly.style.opacity = 0.06 + Math.random() * 0.08;
        heartsContainer.appendChild(butterfly);
    }
}

// Create floating stars/sparkles
function createFloatingStars() {
    const heartsContainer = document.querySelector('.hearts');
    const starEmojis = ['✨', '⭐', '💫', '🌟'];
    const starCount = 12;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'floating-star';
        star.textContent = starEmojis[Math.floor(Math.random() * starEmojis.length)];
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 12 + 's';
        star.style.animationDuration = (18 + Math.random() * 12) + 's';
        star.style.fontSize = (12 + Math.random() * 10) + 'px';
        star.style.opacity = 0.04 + Math.random() * 0.08;
        heartsContainer.appendChild(star);
    }
}

// Create floating flowers
function createFloatingFlowers() {
    const heartsContainer = document.querySelector('.hearts');
    const flowerEmojis = ['🌸', '🌺', '🌷', '🌹', '💐'];
    const flowerCount = 10;
    
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('div');
        flower.className = 'floating-flower';
        flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = Math.random() * 100 + '%';
        flower.style.animationDelay = Math.random() * 10 + 's';
        flower.style.animationDuration = (22 + Math.random() * 12) + 's';
        flower.style.fontSize = (14 + Math.random() * 12) + 'px';
        flower.style.opacity = 0.05 + Math.random() * 0.09;
        heartsContainer.appendChild(flower);
    }
}

// Create floating clouds
function createFloatingClouds() {
    const heartsContainer = document.querySelector('.hearts');
    const cloudEmojis = ['☁️', '⛅'];
    const cloudCount = 6;
    
    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'floating-cloud';
        cloud.textContent = cloudEmojis[Math.floor(Math.random() * cloudEmojis.length)];
        cloud.style.left = Math.random() * 100 + '%';
        cloud.style.top = Math.random() * 80 + '%';
        cloud.style.animationDelay = Math.random() * 15 + 's';
        cloud.style.animationDuration = (25 + Math.random() * 15) + 's';
        cloud.style.fontSize = (20 + Math.random() * 15) + 'px';
        cloud.style.opacity = 0.03 + Math.random() * 0.05;
        heartsContainer.appendChild(cloud);
    }
}

// Add CSS for all floating elements
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: absolute;
        pointer-events: none;
        animation: floatHeart 20s infinite ease-in-out;
        z-index: 1;
    }
    
    .floating-butterfly {
        position: absolute;
        pointer-events: none;
        animation: floatButterfly 25s infinite ease-in-out;
        z-index: 1;
    }
    
    .floating-star {
        position: absolute;
        pointer-events: none;
        animation: floatStar 20s infinite ease-in-out;
        z-index: 1;
    }
    
    .floating-flower {
        position: absolute;
        pointer-events: none;
        animation: floatFlower 24s infinite ease-in-out;
        z-index: 1;
    }
    
    .floating-cloud {
        position: absolute;
        pointer-events: none;
        animation: floatCloud 30s infinite linear;
        z-index: 1;
    }
    
    @keyframes floatHeart {
        0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
        }
        25% {
            transform: translateY(-40px) rotate(5deg) scale(1.1);
        }
        50% {
            transform: translateY(-20px) rotate(-5deg) scale(0.9);
        }
        75% {
            transform: translateY(-50px) rotate(3deg) scale(1.05);
        }
    }
    
    @keyframes floatButterfly {
        0%, 100% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(30px, -50px) rotate(10deg);
        }
        50% {
            transform: translate(-20px, -30px) rotate(-10deg);
        }
        75% {
            transform: translate(40px, -60px) rotate(15deg);
        }
    }
    
    @keyframes floatStar {
        0%, 100% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0.04;
        }
        50% {
            transform: translateY(-30px) scale(1.3) rotate(180deg);
            opacity: 0.12;
        }
    }
    
    @keyframes floatFlower {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        33% {
            transform: translateY(-35px) rotate(120deg);
        }
        66% {
            transform: translateY(-15px) rotate(240deg);
        }
    }
    
    @keyframes floatCloud {
        0% {
            transform: translateX(-100px);
        }
        100% {
            transform: translateX(calc(100vw + 100px));
        }
    }
    
    /* Mobile optimizations for floating elements */
    @media (max-width: 768px) {
        .floating-heart,
        .floating-butterfly,
        .floating-star,
        .floating-flower,
        .floating-cloud {
            font-size: 12px !important;
            opacity: 0.06 !important;
        }
    }
`;
document.head.appendChild(style);

// Initialize all floating elements
createFloatingHearts();
createFloatingButterflies();
createFloatingStars();
createFloatingFlowers();
createFloatingClouds();

// Smooth scroll animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Remove parallax effect to prevent scrolling issues
// The hero section now scrolls normally with the page

// Add hover effect sound (optional - can be enabled later)
const memoryButtons = document.querySelectorAll('.memory-btn');
memoryButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Intersection Observer for card animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all memory cards
const cards = document.querySelectorAll('.memory-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.8s ease ${index * 0.2}s`;
    observer.observe(card);
});

// Add sparkle effect on button click
memoryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Create multiple sparkles
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('span');
                sparkle.textContent = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.left = (e.offsetX + (Math.random() - 0.5) * 40) + 'px';
                sparkle.style.top = (e.offsetY + (Math.random() - 0.5) * 40) + 'px';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.animation = 'sparkle 1s ease-out forwards';
                sparkle.style.zIndex = '1000';
                button.style.position = 'relative';
                button.appendChild(sparkle);
                
                setTimeout(() => sparkle.remove(), 1000);
            }, i * 100);
        }
    });
});

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -150%) scale(1.5) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Easter egg: Heart explosion on logo click
const logo = document.querySelector('.navbar h2');
let clickCount = 0;

logo.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        createHeartExplosion();
        clickCount = 0;
    }
});

function createHeartExplosion() {
    const explosionEmojis = ['❤️', '💕', '💖', '💗', '💝', '🌹', '💐', '✨'];
    
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.textContent = explosionEmojis[Math.floor(Math.random() * explosionEmojis.length)];
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = (20 + Math.random() * 20) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        const angle = (Math.PI * 2 * i) / 40;
        const velocity = 5 + Math.random() * 10;
        
        document.body.appendChild(heart);
        
        let x = 0;
        let y = 0;
        let opacity = 1;
        
        const animate = () => {
            x += Math.cos(angle) * velocity;
            y += Math.sin(angle) * velocity + 2;
            opacity -= 0.02;
            
            heart.style.transform = `translate(${x}px, ${y}px) rotate(${x * 2}deg)`;
            heart.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                heart.remove();
            }
        };
        
        animate();
    }
}

// Random floating element spawner
setInterval(() => {
    if (Math.random() > 0.7) {
        createRandomFloatingElement();
    }
}, 5000);

function createRandomFloatingElement() {
    const elements = ['💕', '✨', '🌸', '🦋'];
    const element = document.createElement('div');
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.position = 'fixed';
    element.style.left = Math.random() * 100 + '%';
    element.style.top = '100%';
    element.style.fontSize = (15 + Math.random() * 15) + 'px';
    element.style.pointerEvents = 'none';
    element.style.zIndex = '1';
    element.style.opacity = '0.1';
    
    document.body.appendChild(element);
    
    let y = 0;
    let opacity = 0.1;
    
    const animate = () => {
        y -= 2;
        opacity -= 0.002;
        
        element.style.transform = `translateY(${y}px) rotate(${-y / 2}deg)`;
        element.style.opacity = opacity;
        
        if (opacity > 0 && y > -window.innerHeight - 100) {
            requestAnimationFrame(animate);
        } else {
            element.remove();
        }
    };
    
    animate();
}

// Add cursor trail effect (disabled on mobile)
if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) {
            const trail = document.createElement('div');
            trail.textContent = '💖';
            trail.style.position = 'fixed';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.style.fontSize = '12px';
            trail.style.pointerEvents = 'none';
            trail.style.zIndex = '5';
            trail.style.opacity = '0.3';
            trail.style.transition = 'all 1s ease';
            
            document.body.appendChild(trail);
            
            setTimeout(() => {
                trail.style.transform = 'translateY(-50px) scale(0)';
                trail.style.opacity = '0';
            }, 10);
            
            setTimeout(() => trail.remove(), 1000);
        }
    });
}

console.log('❤️ Every memory matters. Made with love. ❤️');
console.log('💕 Tip: Click the logo 5 times for a surprise! 💕');
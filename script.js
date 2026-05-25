// Comic Creation Command Center - Interactivity Script

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation active state
    initializeNavigation();
    
    // Add smooth scrolling
    initializeSmoothScroll();
    
    // Add animation triggers
    observeElements();
    
    // Initialize interactive features
    initializeCards();
});

// Navigation Active State
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Intersection Observer for animations
function observeElements() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.8s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        observer.observe(section);
    });
}

// Card Hover Effects
function initializeCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Board button analytics
const boardButton = document.querySelector('.board-button');
if (boardButton) {
    boardButton.addEventListener('click', function(e) {
        console.log('📋 Navigating to Milanote board for comic creation project');
        // You could add analytics tracking here
    });
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Press 'o' for Overview
    if (e.key === 'o' && e.ctrlKey) {
        e.preventDefault();
        document.querySelector('#overview').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'w' for Workflow
    if (e.key === 'w' && e.ctrlKey) {
        e.preventDefault();
        document.querySelector('#workflow').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'r' for Resources
    if (e.key === 'r' && e.ctrlKey) {
        e.preventDefault();
        document.querySelector('#resources').scrollIntoView({ behavior: 'smooth' });
    }
});

// Parallax effect on background (optional)
window.addEventListener('scroll', function() {
    const bgEffect = document.querySelector('.background-effect');
    if (bgEffect) {
        const scrolled = window.pageYOffset;
        bgEffect.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add a loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    console.log('🎨 Comic Creation Command Center loaded successfully!');
});

// Console Easter Egg
console.log('%c⚔️ Welcome to the Comic Creation Command Center ⚔️', 'color: #c9a961; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #6a3fa0;');
console.log('%cSummon your darkest fantasies with AI collaboration', 'color: #a0a0a0; font-style: italic;');

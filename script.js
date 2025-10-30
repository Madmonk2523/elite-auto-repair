// ===== GLOBAL VARIABLES =====
let isLoading = true;
let currentSection = 'home';

// ===== DOM CONTENT LOADED =====
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ===== ENTERPRISE WEBSITE INITIALIZATION =====
function initializeWebsite() {
    // Instant load - no loading screen delay
    isLoading = false;
    
    // Initialize all enterprise components
    initializeNavigation();
    initializeAdvancedScrollEffects();
    initializeFormValidation();
    initializeMobileMenu();
    initializeAdvancedAnimations();
    initializeParallaxEffects();
    initializeCustomCursor();
    initializeIntersectionObservers();
    initializeCounterAnimations();
    initializeAdvancedInteractions();
    
    // Enterprise smooth scrolling with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                smoothScrollTo(target, 800);
            }
        });
    });
    
    // Initialize performance monitoring
    initializePerformanceMonitoring();
}

// ===== ADVANCED SMOOTH SCROLLING =====
function smoothScrollTo(target, duration = 1000) {
    const targetPosition = target.offsetTop - 90; // Account for fixed navbar
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
    });
    
    // Active nav link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== MOBILE MENU =====
function initializeMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// ===== SMOOTH SCROLLING =====
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ===== ADVANCED SCROLL EFFECTS =====
function initializeAdvancedScrollEffects() {
    // Parallax scrolling for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;
        });
        
        // Update navbar on scroll
        updateNavbarOnScroll();
    });
}

function initializeIntersectionObservers() {
    // Advanced intersection observer with multiple thresholds
    const observerOptions = {
        threshold: [0, 0.1, 0.5, 0.75, 1],
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, delay);
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.service-card, .testimonial-card, .feature, .contact-item, .stat').forEach(el => {
        observer.observe(el);
    });
}

// ===== PARALLAX EFFECTS =====
function initializeParallaxEffects() {
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    function updateParallax() {
        const scrollTop = window.pageYOffset;
        
        // Parallax background elements
        document.querySelectorAll('.parallax-bg').forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        // Parallax content elements
        document.querySelectorAll('.parallax-content').forEach(element => {
            const speed = element.dataset.speed || 0.2;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', requestTick);
}

// ===== CUSTOM CURSOR =====
function initializeCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'custom-cursor-follower';
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Cursor interactions
    document.querySelectorAll('a, button, .service-card, .testimonial-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorFollower.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorFollower.classList.remove('cursor-hover');
        });
    });
}

function initializeAdvancedAnimations() {
    // Staggered animations for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.15}s`;
        element.classList.add('fade-in-up');
    });
    
    // Advanced text animations
    initializeTextAnimations();
    
    // Floating animations for decorative elements
    initializeFloatingAnimations();
}

function initializeTextAnimations() {
    // Split text into spans for individual letter animations
    const animatedTexts = document.querySelectorAll('.animate-text');
    animatedTexts.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.animationDelay = `${index * 0.05}s`;
            span.classList.add('char-animate');
            element.appendChild(span);
        });
    });
}

function initializeFloatingAnimations() {
    // Add floating animation to decorative elements
    const floatingElements = document.querySelectorAll('.service-icon, .feature-icon');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        element.classList.add('floating');
    });
}

// ===== COUNTER ANIMATIONS =====
function initializeCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        const suffix = element.textContent.match(/[^0-9]+$/)?.[0] || '';
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// ===== ADVANCED INTERACTIONS =====
function initializeAdvancedInteractions() {
    // 3D tilt effect for cards
    initializeTiltEffects();
    
    // Advanced hover effects
    initializeHoverEffects();
    
    // Magnetic buttons
    initializeMagneticButtons();
}

function initializeTiltEffects() {
    const tiltElements = document.querySelectorAll('.service-card, .testimonial-card');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

function initializeHoverEffects() {
    // Advanced ripple effect
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function initializeMagneticButtons() {
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px)';
        });
    });
}

// ===== BOOKING MODAL =====
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add click outside to close
        setTimeout(() => {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeBookingModal();
                }
            });
        }, 100);
    }
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ===== SERVICE MODALS =====
function openServiceModal(serviceType) {
    const serviceInfo = {
        brake: {
            title: 'Brake System Services',
            description: 'Our comprehensive brake services ensure your safety on the road with precision diagnostics and premium parts.',
            features: [
                'Complete brake system inspection',
                'Brake pad and rotor replacement',
                'Brake fluid flush and replacement',
                'ABS system diagnostics',
                'Emergency brake adjustment',
                'Brake line inspection and repair'
            ],
            pricing: 'Starting at $89 - Free inspection with service'
        },
        oil: {
            title: 'Premium Oil Change Services',
            description: 'Keep your engine running smoothly with our professional oil change services using premium synthetic oils.',
            features: [
                'Full synthetic oil options',
                'Conventional and blend oils available',
                'Oil filter replacement',
                '15-point vehicle inspection',
                'Fluid level checks and top-offs',
                'Battery and belts inspection'
            ],
            pricing: 'Starting at $49 - Includes multi-point inspection'
        },
        tire: {
            title: 'Complete Tire Services',
            description: 'Professional tire services from installation to repair, ensuring optimal performance and safety.',
            features: [
                'Tire installation and balancing',
                'Wheel alignment service',
                'Tire rotation and inspection',
                'Flat tire repair',
                'TPMS sensor service',
                'Tire pressure optimization'
            ],
            pricing: 'Starting at $129 - Free tire inspection'
        },
        engine: {
            title: 'Engine Diagnostics & Repair',
            description: 'Advanced computer diagnostics and engine services to keep your vehicle running at peak performance.',
            features: [
                'Computer diagnostic scanning',
                'Check engine light diagnosis',
                'Performance optimization',
                'Emissions testing and repair',
                'Tune-up services',
                'Engine repair and maintenance'
            ],
            pricing: 'Starting at $149 - Includes comprehensive diagnostic report'
        },
        electrical: {
            title: 'Electrical System Services',
            description: 'Complete electrical system diagnosis and repair for all your vehicle\'s electrical components.',
            features: [
                'Battery testing and replacement',
                'Alternator diagnosis and repair',
                'Starter motor service',
                'Electrical wiring inspection',
                'Fuse and relay replacement',
                'Lighting system repair'
            ],
            pricing: 'Starting at $99 - Free electrical system check'
        },
        climate: {
            title: 'Climate Control Services',
            description: 'Stay comfortable year-round with our professional A/C and heating system services.',
            features: [
                'A/C system recharge',
                'Compressor diagnosis and repair',
                'Heating system service',
                'Cabin air filter replacement',
                'Refrigerant leak detection',
                'Climate control diagnostics'
            ],
            pricing: 'Starting at $119 - Includes system performance test'
        }
    };
    
    const service = serviceInfo[serviceType];
    if (service) {
        // Create and show service modal (simplified for this example)
        alert(`${service.title}\n\n${service.description}\n\n${service.pricing}\n\nCall (631) 555-0923 to schedule your service!`);
    }
}

// ===== FORM VALIDATION =====
function initializeFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add input animation effects
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('focused');
            });
            
            input.addEventListener('blur', function() {
                if (!this.value) {
                    this.parentElement.classList.remove('focused');
                }
            });
            
            // Initialize labels for pre-filled inputs
            if (input.value) {
                input.parentElement.classList.add('focused');
            }
        });
        
        contactForm.addEventListener('submit', handleFormSubmission);
    }
}

function handleFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    
    // Basic validation
    if (!validateForm(formObject)) {
        return;
    }
    
    // Show success message
    showNotification('Thank you! Your service request has been submitted. We\'ll contact you within 24 hours.', 'success');
    
    // Reset form
    e.target.reset();
    
    // Remove focused class from form groups
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('focused');
    });
}

function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.phone || formData.phone.length < 10) {
        errors.push('Please enter a valid phone number');
    }
    
    if (!formData.service) {
        errors.push('Please select a service');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== NOTIFICATIONS =====
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 3000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
        display: flex;
        align-items: center;
        gap: 1rem;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNavLink();
}, 100));

// ===== LEGACY SUPPORT =====
// Fallback for older browsers
function bookNow() {
    openBookingModal();
}

// ===== PERFORMANCE MONITORING =====
function initializePerformanceMonitoring() {
    // Monitor FPS
    let fps = 0;
    let lastTime = performance.now();
    
    function countFPS() {
        const currentTime = performance.now();
        fps = Math.round(1000 / (currentTime - lastTime));
        lastTime = currentTime;
        requestAnimationFrame(countFPS);
    }
    countFPS();
    
    // Log performance metrics
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('🚀 Elite Auto Repair - Performance Metrics:');
        console.log(`⚡ Page Load: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        console.log(`🎨 DOM Ready: ${Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart)}ms`);
        console.log(`📊 Current FPS: ${fps}`);
    });
}

// ===== ENTERPRISE ANIMATIONS & EFFECTS =====
const enterpriseStyles = document.createElement('style');
enterpriseStyles.textContent = `
    /* Custom Cursor */
    .custom-cursor {
        position: fixed;
        width: 10px;
        height: 10px;
        background: var(--primary-red);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
    }
    
    .custom-cursor-follower {
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid var(--primary-red);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        opacity: 0.5;
    }
    
    .custom-cursor.cursor-hover {
        transform: scale(2);
        background: var(--accent-gold);
    }
    
    .custom-cursor-follower.cursor-hover {
        transform: scale(1.5);
        border-color: var(--accent-gold);
    }
    
    /* Advanced Animations */
    .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .char-animate {
        display: inline-block;
        opacity: 0;
        transform: translateY(20px);
        animation: charFadeIn 0.5s ease-out forwards;
    }
    
    @keyframes charFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .floating {
        animation: floating 3s ease-in-out infinite;
    }
    
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    /* Ripple Effect */
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleAnimation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes rippleAnimation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    /* Advanced Hover States */
    .service-card {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    
    .service-card:hover {
        transform: translateY(-15px) scale(1.02);
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
    }
    
    /* Scroll Animations */
    .animate-in {
        animation: slideInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    /* Glass Morphism Effects */
    .glass {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    /* Advanced Gradients */
    .gradient-text {
        background: linear-gradient(135deg, var(--primary-red), var(--accent-gold));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    /* Loading Optimizations */
    * {
        transform: translateZ(0);
        backface-visibility: hidden;
    }
    
    /* Notification Styles */
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        font-size: 1.2rem;
        opacity: 0.8;
        transition: opacity 0.2s;
    }
    
    .notification-close:hover {
        opacity: 1;
    }
    
    /* Mobile Optimizations */
    @media (max-width: 768px) {
        .custom-cursor,
        .custom-cursor-follower {
            display: none;
        }
        
        .service-card:hover {
            transform: none;
        }
    }
`;
document.head.appendChild(enterpriseStyles);

// ===== ACCESSIBILITY IMPROVEMENTS =====
// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes modals
    if (e.key === 'Escape') {
        closeBookingModal();
    }
    
    // Enter key on buttons
    if (e.key === 'Enter' && e.target.classList.contains('service-btn')) {
        e.target.click();
    }
});

// Focus management for accessibility
document.querySelectorAll('button, a, input, select, textarea').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #C41E3A';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// ===== ANALYTICS & TRACKING =====
function trackUserInteraction(action, element) {
    // This would integrate with Google Analytics or other tracking services
    console.log(`User interaction: ${action} on ${element}`);
    
    // Example: gtag('event', action, { element: element });
}

// Track button clicks
document.querySelectorAll('button, .btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        trackUserInteraction('click', this.textContent.trim());
    });
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ===== INITIALIZATION COMPLETE =====
console.log('Elite Auto Repair website initialized successfully');
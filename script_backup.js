// Elite Auto Repair - Premium JavaScript// ============================// ============================// ============================// ============================// ===== GLOBAL VARIABLES =====

// Counter Animations & Interactive Features

// ELITE AUTO REPAIR - PREMIUM JAVASCRIPT

console.log('🚀 Elite Auto Repair JavaScript Loading...');

// EPIC Counter Animations that ACTUALLY WORK!// ELITE AUTO REPAIR - PREMIUM JAVASCRIPT

// Initialize when DOM is loaded

document.addEventListener('DOMContentLoaded', function() {// ============================

    console.log('✨ DOM Loaded - Starting initialization...');

    initializeWebsite();// $10,000 Professional Website with EPIC Counter Animations!// ELITE AUTO REPAIR - PREMIUM JAVASCRIPT

});

console.log('🚀 Elite Auto Repair JavaScript Loading...');

// Main initialization function

function initializeWebsite() {// ============================

    console.log('🎯 Initializing Premium Website...');

    // Global Variables

    initializeNavigation();

    initializeMobileMenu();let isLoading = false;// $10,000 Professional Website// ELITE AUTO REPAIR - PREMIUM JAVASCRIPTlet isLoading = true;

    initializeCounterAnimations();

    initializeHeroAnimations();let currentSection = 'home';

    initializeScrollEffects();

    initializeIntersectionObserver();// Global Variables

    initializeSmoothScrolling();

    initializeServiceCards();// DOM Content Loaded - Initialize Everything

    initializeFormValidation();

    document.addEventListener('DOMContentLoaded', function() {let isLoading = false;// ============================

    // Mark as loaded
    setTimeout(() => {
        document.body.classList.add('loaded');
        console.log('🎉 Website fully loaded!');
    }, 500);
}

// Counter Animations - The EPIC ones that actually work!

function initializeCounterAnimations() {

    console.log('🎯 Initializing EPIC Counter Animations...');// ============================

    

    const counters = document.querySelectorAll('.stat-number');// MAIN INITIALIZATION// DOM Content Loaded - Initialize Everything

    console.log(`Found ${counters.length} counters to animate`);

    // ============================

    if (counters.length === 0) {

        console.warn('⚠️ No counters found! Check your HTML structure.');function initializeWebsite() {document.addEventListener('DOMContentLoaded', function() {// Global Variables

        return;

    }    console.log('✨ Initializing Premium Website...');

    

    counters.forEach((counter, index) => {        console.log('🚀 Elite Auto Repair - Loading Premium Website...');

        const dataCount = counter.getAttribute('data-count');

        const target = parseInt(dataCount);    // Initialize all components in order

        

        console.log(`Counter ${index + 1}: target=${target}`);    initializeNavigation();    initializeWebsite();let isLoading = false;// ============================

        

        if (isNaN(target) || target <= 0) {    initializeMobileMenu();

            console.warn(`⚠️ Invalid target for counter ${index + 1}: ${target}`);

            return;    initializeCounterAnimations(); // Initialize counters first});

        }

            initializeHeroAnimations();    // Then start hero animations

        // Set initial state

        counter.textContent = '0';    initializeScrollEffects();let currentSection = 'home';

        counter.hasAnimated = false;

            initializeIntersectionObserver();

        // Create animation function

        const animateCounter = () => {    initializeFormValidation();// ============================

            if (counter.hasAnimated) return;

                initializeModals();

            console.log(`🚀 Animating counter ${index + 1} to ${target}`);

            counter.hasAnimated = true;    initializeSmoothScrolling();// MAIN INITIALIZATION// ===== DOM CONTENT LOADED =====

            

            let currentValue = 0;    initializeServiceCards();

            const duration = 2000;

            const startTime = performance.now();    // ============================

            

            const updateCounter = (timestamp) => {    // Mark as loaded

                const elapsed = timestamp - startTime;

                const progress = Math.min(elapsed / duration, 1);    setTimeout(() => {function initializeWebsite() {// DOM Content Loaded - Initialize Everything

                const easeOut = 1 - Math.pow(1 - progress, 3);

                        document.body.classList.add('loaded');

                currentValue = Math.floor(easeOut * target);

                counter.textContent = currentValue.toString();        console.log('🎉 Website fully loaded!');    // Initialize all components

                

                // Color effects    }, 500);

                if (progress < 0.3) {

                    counter.style.color = '#FFD700';}    initializeNavigation();document.addEventListener('DOMContentLoaded', function() {// Global Variablesdocument.addEventListener('DOMContentLoaded', function() {

                } else if (progress < 0.7) {

                    counter.style.color = '#FFFFFF';

                } else {

                    counter.style.color = '#D4AF37';// ============================    initializeMobileMenu();

                }

                // EPIC COUNTER ANIMATIONS - FIXED VERSION!

                if (progress < 1) {

                    requestAnimationFrame(updateCounter);// ============================    initializeHeroAnimations();    console.log('🚀 Elite Auto Repair - Loading Premium Website...');

                } else {

                    // Animation completefunction initializeCounterAnimations() {

                    counter.textContent = target.toString();

                    counter.style.color = '#D4AF37';    console.log('🎯 Initializing EPIC Counter Animations...');    initializeScrollEffects();

                    counter.style.transform = 'scale(1.1)';

                    counter.style.textShadow = '0 0 20px #FFD700';    

                    

                    setTimeout(() => {    const counters = document.querySelectorAll('.stat-number');    initializeCounterAnimations();    initializeWebsite();let isLoading = false;    initializeWebsite();

                        counter.style.transform = 'scale(1)';

                        counter.style.textShadow = '0 2px 10px rgba(212, 175, 55, 0.5)';    console.log(`Found ${counters.length} counters to animate`);

                    }, 300);

                            initializeIntersectionObserver();

                    console.log(`✅ Counter ${index + 1} animation complete!`);

                }    if (counters.length === 0) {

            };

                    console.warn('⚠️ No counters found! Check your HTML structure.');    initializeFormValidation();});

            requestAnimationFrame(updateCounter);

        };        return;

        

        counter.animateCounter = animateCounter;    }    initializeModals();

    });

}    



// Start all counter animations with stagger    counters.forEach((counter, index) => {    initializeSmoothScrolling();let currentSection = 'home';});

function startAllCounterAnimations() {

    console.log('🎬 Starting ALL counter animations...');        const dataCount = counter.getAttribute('data-count');

    

    const counters = document.querySelectorAll('.stat-number');        const target = parseInt(dataCount);    initializeServiceCards();

    counters.forEach((counter, index) => {

        if (counter.animateCounter) {        

            setTimeout(() => {

                counter.animateCounter();        console.log(`Counter ${index + 1}: data-count="${dataCount}", parsed target=${target}`);    // ============================

            }, index * 300);

        }        

    });

}        if (isNaN(target) || target <= 0) {    // Mark as loaded



// Hero animations sequence            console.warn(`⚠️ Invalid target for counter ${index + 1}: ${target}`);

function initializeHeroAnimations() {

    console.log('🎭 Initializing Hero Animations...');            return;    setTimeout(() => {// MAIN INITIALIZATIONlet scrollPosition = 0;

    

    const heroElements = [        }

        '.hero-title',

        '.hero-description',                 document.body.classList.add('loaded');

        '.hero-buttons',

        '.hero-stats'        // Set initial state

    ];

            counter.textContent = '0';        console.log('✨ Website fully loaded and animated!');// ============================

    heroElements.forEach((selector, index) => {

        const element = document.querySelector(selector);        counter.style.color = '#D4AF37';

        if (element) {

            setTimeout(() => {        counter.hasAnimated = false;    }, 500);

                element.style.opacity = '1';

                element.style.transform = 'translateY(0)';        

                

                // Start counters when stats are visible        // Create the animation function}function initializeWebsite() {let isScrolling = false;// ===== ENTERPRISE WEBSITE INITIALIZATION =====

                if (selector === '.hero-stats') {

                    setTimeout(() => {        const animateCounter = () => {

                        startAllCounterAnimations();

                    }, 500);            if (counter.hasAnimated) {

                }

            }, 300 + (index * 300));                console.log(`Counter ${index + 1} already animated, skipping...`);

        }

    });                return;// ============================    // Initialize all components

}

            }

// Navigation system

function initializeNavigation() {            // NAVIGATION SYSTEM

    const navbar = document.getElementById('navbar');

    const navLinks = document.querySelectorAll('.nav-link');            console.log(`🚀 Starting animation for counter ${index + 1} to ${target}`);

    

    if (!navbar) return;            counter.hasAnimated = true;// ============================    initializeNavigation();function initializeWebsite() {

    

    // Scroll effect            

    window.addEventListener('scroll', throttle(() => {

        if (window.scrollY > 50) {            let currentValue = 0;function initializeNavigation() {

            navbar.classList.add('scrolled');

        } else {            const duration = 2000; // 2 seconds

            navbar.classList.remove('scrolled');

        }            const startTime = performance.now();    const navbar = document.getElementById('navbar');    initializeMobileMenu();

        updateActiveNavLink();

    }, 10));            

    

    // Click handlers            // Add glow effect during animation    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {

        link.addEventListener('click', function(e) {            counter.style.textShadow = '0 0 20px #D4AF37';

            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('active'));            counter.style.transition = 'all 0.3s ease';        initializeHeroAnimations();// DOM Content Loaded - Initialize Everything    // Instant load - no loading screen delay

            this.classList.add('active');

                        

            const targetId = this.getAttribute('href');

            const targetElement = document.querySelector(targetId);            const updateCounter = (timestamp) => {    if (!navbar) return;

            if (targetElement) {

                smoothScrollToElement(targetElement);                const elapsed = timestamp - startTime;

            }

        });                const progress = Math.min(elapsed / duration, 1);        initializeScrollEffects();

    });

                    

    console.log('✅ Navigation initialized');

}                // Smooth easing function    // Navbar scroll effect



// Update active nav link                const easeOut = 1 - Math.pow(1 - progress, 3);

function updateActiveNavLink() {

    const sections = document.querySelectorAll('section[id]');                currentValue = Math.floor(easeOut * target);    window.addEventListener('scroll', throttle(() => {    initializeCounterAnimations();document.addEventListener('DOMContentLoaded', function() {    isLoading = false;

    const navLinks = document.querySelectorAll('.nav-link');

                    

    let current = '';

    const scrollPos = window.scrollY + 100;                // Update the display        const scrollY = window.scrollY;

    

    sections.forEach(section => {                counter.textContent = currentValue.toString();

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;                            initializeIntersectionObserver();

        

        if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {                // Color transitions during animation

            current = section.getAttribute('id');

        }                if (progress < 0.3) {        if (scrollY > 50) {

    });

                        counter.style.color = '#FFD700'; // Bright gold

    navLinks.forEach(link => {

        link.classList.remove('active');                } else if (progress < 0.7) {            navbar.classList.add('scrolled');    initializeFormValidation();    initializeWebsite();    

        if (link.getAttribute('href') === `#${current}`) {

            link.classList.add('active');                    counter.style.color = '#FFFFFF'; // White

        }

    });                } else {        } else {

}

                    counter.style.color = '#D4AF37'; // Final gold

// Mobile menu

function initializeMobileMenu() {                }            navbar.classList.remove('scrolled');    initializeModals();

    const hamburger = document.getElementById('hamburger');

    const mobileMenu = document.getElementById('mobile-menu');                

    

    if (!hamburger || !mobileMenu) return;                if (progress < 1) {        }

    

    hamburger.addEventListener('click', function() {                    requestAnimationFrame(updateCounter);

        hamburger.classList.toggle('active');

        mobileMenu.classList.toggle('active');                } else {            initializeSmoothScrolling();});    // Initialize all enterprise components

        document.body.classList.toggle('menu-open');

    });                    // Animation complete!

    

    // Close on link click                    counter.textContent = target.toString();        updateActiveNavLink();

    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    mobileLinks.forEach(link => {                    counter.style.color = '#D4AF37';

        link.addEventListener('click', function() {

            hamburger.classList.remove('active');                        }, 10));    initializeServiceCards();

            mobileMenu.classList.remove('active');

            document.body.classList.remove('menu-open');                    // Epic finale effect

        });

    });                    counter.style.transform = 'scale(1.2)';    

    

    console.log('✅ Mobile menu initialized');                    counter.style.textShadow = '0 0 30px #FFD700';

}

                        // Navigation click handlers        initializeNavigation();

// Scroll effects

function initializeScrollEffects() {                    setTimeout(() => {

    window.addEventListener('scroll', throttle(() => {

        updateScrollProgress();                        counter.style.transform = 'scale(1)';    navLinks.forEach(link => {

        

        // Parallax for hero                        counter.style.textShadow = '0 2px 10px rgba(212, 175, 55, 0.5)';

        const heroBackground = document.querySelector('.hero-background');

        if (heroBackground && window.scrollY < window.innerHeight) {                    }, 300);        link.addEventListener('click', function(e) {    // Mark as loaded

            heroBackground.style.transform = `translateY(${window.scrollY * 0.3}px)`;

        }                    

    }, 10));

                        console.log(`✅ Counter ${index + 1} animation complete!`);            e.preventDefault();

    console.log('✅ Scroll effects initialized');

}                }



// Scroll progress bar            };                setTimeout(() => {// ============================    initializeAdvancedScrollEffects();

function updateScrollProgress() {

    const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;            

    

    let progressBar = document.querySelector('.scroll-progress');            requestAnimationFrame(updateCounter);            // Remove active from all

    if (!progressBar) {

        progressBar = document.createElement('div');        };

        progressBar.className = 'scroll-progress';

        progressBar.style.cssText = `                    navLinks.forEach(l => l.classList.remove('active'));        document.body.classList.add('loaded');

            position: fixed;

            top: 0;        // Store the animation function

            left: 0;

            width: 0%;        counter.animateCounter = animateCounter;            

            height: 4px;

            background: linear-gradient(90deg, #D4AF37, #FFD700);        

            z-index: 9999;

            transition: width 0.3s ease;        console.log(`✅ Counter ${index + 1} initialized and ready`);            // Add active to clicked        console.log('✨ Website fully loaded and animated!');// MAIN INITIALIZATION    initializeFormValidation();

        `;

        document.body.appendChild(progressBar);    });

    }

    }            this.classList.add('active');

    progressBar.style.width = `${Math.min(progress, 100)}%`;

}



// Intersection Observer for animations// Function to start all counter animations                }, 500);

function initializeIntersectionObserver() {

    const observer = new IntersectionObserver((entries) => {function startAllCounterAnimations() {

        entries.forEach(entry => {

            if (entry.isIntersecting) {    console.log('🎬 Starting ALL counter animations...');            // Smooth scroll to target

                entry.target.classList.add('animate-on-scroll');

                    

                // Re-animate counters if scrolled back into view

                if (entry.target.classList.contains('hero-stats')) {    const counters = document.querySelectorAll('.stat-number');            const targetId = this.getAttribute('href');}// ============================    initializeMobileMenu();

                    const counters = entry.target.querySelectorAll('.stat-number');

                    const hasUnanimated = Array.from(counters).some(c => !c.hasAnimated);    

                    

                    if (hasUnanimated) {    counters.forEach((counter, index) => {            const targetElement = document.querySelector(targetId);

                        setTimeout(() => {

                            startAllCounterAnimations();        if (counter.animateCounter) {

                        }, 300);

                    }            // Stagger the animations for dramatic effect            

                }

            }            setTimeout(() => {

        });

    }, {                console.log(`🎯 Triggering counter ${index + 1}`);            if (targetElement) {

        threshold: 0.1,

        rootMargin: '0px 0px -50px 0px'                counter.animateCounter();

    });

                }, index * 300); // 300ms delay between each                smoothScrollToElement(targetElement);// ============================function initializeWebsite() {    initializeAdvancedAnimations();

    const elementsToObserve = document.querySelectorAll('.hero-stats, .services-grid, .testimonials-grid');

    elementsToObserve.forEach(el => observer.observe(el));        }

    

    console.log('✅ Intersection observer initialized');    });            }

}

}

// Smooth scrolling

function initializeSmoothScrolling() {        });// NAVIGATION SYSTEM

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {// ============================

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));// HERO ANIMATIONS    });

            if (target) {

                smoothScrollToElement(target);// ============================

            }

        });function initializeHeroAnimations() {}// ============================    console.log('🚀 Elite Auto Repair - Premium Website Loading...');    initializeParallaxEffects();

    });

        console.log('🎭 Initializing Hero Animations...');

    console.log('✅ Smooth scrolling initialized');

}    



// Smooth scroll function    // Add loading state styles

function smoothScrollToElement(target, duration = 1000, offset = 90) {

    const targetPosition = target.offsetTop - offset;    const style = document.createElement('style');// Update active nav link based on scroll positionfunction initializeNavigation() {

    const startPosition = window.pageYOffset;

    const distance = targetPosition - startPosition;    style.textContent = `

    let startTime = null;

            body:not(.loaded) .hero-title,function updateActiveNavLink() {

    function animation(currentTime) {

        if (startTime === null) startTime = currentTime;        body:not(.loaded) .hero-description,

        const timeElapsed = currentTime - startTime;

        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);        body:not(.loaded) .hero-buttons,    const sections = document.querySelectorAll('section[id]');    const navbar = document.getElementById('navbar');        initializeIntersectionObservers();

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);        body:not(.loaded) .hero-stats {

    }

                opacity: 0;    const navLinks = document.querySelectorAll('.nav-link');

    function easeInOutCubic(t, b, c, d) {

        t /= d / 2;            transform: translateY(30px);

        if (t < 1) return c / 2 * t * t * t + b;

        t -= 2;            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);        const navLinks = document.querySelectorAll('.nav-link');

        return c / 2 * (t * t * t + 2) + b;

    }        }

    

    requestAnimationFrame(animation);    `;    let current = '';

}

    document.head.appendChild(style);

// Service cards

function initializeServiceCards() {        const scrollPos = window.scrollY + 100;        // Initialize all components    initializeCounterAnimations();

    const serviceCards = document.querySelectorAll('.service-card');

        // Get hero elements

    serviceCards.forEach(card => {

        card.addEventListener('mouseenter', function() {    const heroTitle = document.querySelector('.hero-title');    

            this.style.transform = 'translateY(-10px) scale(1.02)';

            this.style.boxShadow = '0 25px 50px rgba(212, 175, 55, 0.3)';    const heroDescription = document.querySelector('.hero-description');

        });

            const heroButtons = document.querySelector('.hero-buttons');    sections.forEach(section => {    if (!navbar) return;

        card.addEventListener('mouseleave', function() {

            this.style.transform = '';    const heroStats = document.querySelector('.hero-stats');

            this.style.boxShadow = '';

        });            const sectionTop = section.offsetTop;

    });

        // Animate hero elements in sequence

    console.log('✅ Service cards initialized');

}    setTimeout(() => {        const sectionHeight = section.clientHeight;        initializeNavigation();    initializeAdvancedInteractions();



// Form validation        if (heroTitle) {

function initializeFormValidation() {

    const contactForm = document.getElementById('contactForm');            heroTitle.style.opacity = '1';        

    

    if (contactForm) {            heroTitle.style.transform = 'translateY(0)';

        contactForm.addEventListener('submit', function(e) {

            e.preventDefault();            console.log('✅ Hero title animated');        if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {    // Navbar scroll effect

            showNotification('Thank you! Your message has been received.', 'success');

        });        }

    }

        }, 300);            current = section.getAttribute('id');

    console.log('✅ Form validation initialized');

}    



// Notification system    setTimeout(() => {        }    window.addEventListener('scroll', throttle(() => {    initializeMobileMenu();    

function showNotification(message, type = 'info') {

    const notification = document.createElement('div');        if (heroDescription) {

    notification.style.cssText = `

        position: fixed;            heroDescription.style.opacity = '1';    });

        top: 20px;

        right: 20px;            heroDescription.style.transform = 'translateY(0)';

        padding: 1rem 1.5rem;

        border-radius: 12px;            console.log('✅ Hero description animated');            const scrollY = window.scrollY;

        color: white;

        font-weight: 600;        }

        z-index: 10000;

        transform: translateX(400px);    }, 600);    // Update nav links

        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);    

        backdrop-filter: blur(10px);

        max-width: 350px;    setTimeout(() => {    navLinks.forEach(link => {            initializeHeroAnimations();    // Enterprise smooth scrolling with easing

    `;

            if (heroButtons) {

    switch (type) {

        case 'success':            heroButtons.style.opacity = '1';        link.classList.remove('active');

            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';

            break;            heroButtons.style.transform = 'translateY(0)';

        case 'error':

            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';            console.log('✅ Hero buttons animated');        if (link.getAttribute('href') === `#${current}`) {        if (scrollY > 50) {

            break;

        default:        }

            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';

    }    }, 900);            link.classList.add('active');

    

    notification.textContent = message;    

    document.body.appendChild(notification);

        setTimeout(() => {        }            navbar.classList.add('scrolled');    initializeScrollEffects();    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    setTimeout(() => {

        notification.style.transform = 'translateX(0)';        if (heroStats) {

    }, 10);

                heroStats.style.opacity = '1';    });

    setTimeout(() => {

        notification.style.transform = 'translateX(400px)';            heroStats.style.transform = 'translateY(0)';

        setTimeout(() => {

            notification.remove();            console.log('✅ Hero stats visible');}        } else {

        }, 400);

    }, 5000);            

}

            // Start the epic counter animations!

// Utility functions

function throttle(func, limit) {            setTimeout(() => {

    let inThrottle;

    return function() {                console.log('🚀 STARTING EPIC COUNTER ANIMATIONS!');// ============================            navbar.classList.remove('scrolled');    initializeCounterAnimations();        anchor.addEventListener('click', function (e) {

        const args = arguments;

        const context = this;                startAllCounterAnimations();

        if (!inThrottle) {

            func.apply(context, args);            }, 500);// MOBILE MENU

            inThrottle = true;

            setTimeout(() => inThrottle = false, limit);        }

        }

    }    }, 1200);// ============================        }

}

}

// Modal functions

function openBookingModal() {function initializeMobileMenu() {

    const modal = document.getElementById('bookingModal');

    if (modal) {// ============================

        modal.style.display = 'block';

        document.body.style.overflow = 'hidden';// NAVIGATION SYSTEM    const hamburger = document.getElementById('hamburger');            initializeIntersectionObserver();            e.preventDefault();

    }

}// ============================



function closeBookingModal() {function initializeNavigation() {    const mobileMenu = document.getElementById('mobile-menu');

    const modal = document.getElementById('bookingModal');

    if (modal) {    const navbar = document.getElementById('navbar');

        modal.style.display = 'none';

        document.body.style.overflow = '';    const navLinks = document.querySelectorAll('.nav-link');    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');        updateActiveNavLink();

    }

}    



function openServiceModal(serviceType) {    if (!navbar) {    

    showNotification(`Learn more about our ${serviceType} services! Call us at (646) 989-0274`, 'info');

}        console.warn('⚠️ Navbar not found');



function scrollToSection(sectionId) {        return;    if (!hamburger || !mobileMenu) return;    }, 10));    initializeFormValidation();            const target = document.querySelector(this.getAttribute('href'));

    const element = document.getElementById(sectionId);

    if (element) {    }

        smoothScrollToElement(element);

    }        

}

    // Navbar scroll effect

// Export functions for global use

window.openBookingModal = openBookingModal;    window.addEventListener('scroll', throttle(() => {    // Toggle mobile menu    

window.closeBookingModal = closeBookingModal;

window.openServiceModal = openServiceModal;        const scrollY = window.scrollY;

window.scrollToSection = scrollToSection;

window.startAllCounterAnimations = startAllCounterAnimations;            hamburger.addEventListener('click', function() {



console.log('✅ Elite Auto Repair JavaScript Loaded Successfully!');        if (scrollY > 50) {

            navbar.classList.add('scrolled');        hamburger.classList.toggle('active');    // Navigation click handlers    initializeModals();            if (target) {

        } else {

            navbar.classList.remove('scrolled');        mobileMenu.classList.toggle('active');

        }

                document.body.classList.toggle('menu-open');    navLinks.forEach(link => {

        updateActiveNavLink();

    }, 10));        

    

    // Navigation click handlers        // Animate hamburger        link.addEventListener('click', function(e) {    initializeSmoothScrolling();                smoothScrollTo(target, 800);

    navLinks.forEach(link => {

        link.addEventListener('click', function(e) {        const spans = hamburger.querySelectorAll('span');

            e.preventDefault();

                    if (hamburger.classList.contains('active')) {            e.preventDefault();

            // Remove active from all

            navLinks.forEach(l => l.classList.remove('active'));            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';

            

            // Add active to clicked            spans[1].style.opacity = '0';                initializeLoadingStates();            }

            this.classList.add('active');

                        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';

            // Smooth scroll to target

            const targetId = this.getAttribute('href');        } else {            // Remove active from all

            const targetElement = document.querySelector(targetId);

                        spans[0].style.transform = '';

            if (targetElement) {

                smoothScrollToElement(targetElement);            spans[1].style.opacity = '';            navLinks.forEach(l => l.classList.remove('active'));    initializeServiceCards();        });

            }

        });            spans[2].style.transform = '';

    });

            }            

    console.log('✅ Navigation initialized');

}    });



// Update active nav link based on scroll position                // Add active to clicked        });

function updateActiveNavLink() {

    const sections = document.querySelectorAll('section[id]');    // Close menu on link click

    const navLinks = document.querySelectorAll('.nav-link');

        mobileNavLinks.forEach(link => {            this.classList.add('active');

    let current = '';

    const scrollPos = window.scrollY + 100;        link.addEventListener('click', function() {

    

    sections.forEach(section => {            hamburger.classList.remove('active');                // Add premium loading effect    

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;            mobileMenu.classList.remove('active');

        

        if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {            document.body.classList.remove('menu-open');            // Smooth scroll to target

            current = section.getAttribute('id');

        }            

    });

                const spans = hamburger.querySelectorAll('span');            const targetId = this.getAttribute('href');    setTimeout(() => {    // Initialize performance monitoring

    // Update nav links

    navLinks.forEach(link => {            spans[0].style.transform = '';

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {            spans[1].style.opacity = '';            const targetElement = document.querySelector(targetId);

            link.classList.add('active');

        }            spans[2].style.transform = '';

    });

}        });                    document.body.classList.add('loaded');    initializePerformanceMonitoring();



// ============================    });

// MOBILE MENU

// ============================}            if (targetElement) {

function initializeMobileMenu() {

    const hamburger = document.getElementById('hamburger');

    const mobileMenu = document.getElementById('mobile-menu');

    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');// ============================                smoothScrollToElement(targetElement);        console.log('✨ Website fully loaded and animated');}

    

    if (!hamburger || !mobileMenu) return;// HERO ANIMATIONS

    

    hamburger.addEventListener('click', function() {// ============================            }

        hamburger.classList.toggle('active');

        mobileMenu.classList.toggle('active');function initializeHeroAnimations() {

        document.body.classList.toggle('menu-open');

            // Add loading state styles        });    }, 500);

        const spans = hamburger.querySelectorAll('span');

        if (hamburger.classList.contains('active')) {    const style = document.createElement('style');

            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';

            spans[1].style.opacity = '0';    style.textContent = `    });

            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';

        } else {        body:not(.loaded) .hero-title,

            spans[0].style.transform = '';

            spans[1].style.opacity = '';        body:not(.loaded) .hero-description,}}// ===== ADVANCED SMOOTH SCROLLING =====

            spans[2].style.transform = '';

        }        body:not(.loaded) .hero-buttons,

    });

            body:not(.loaded) .hero-stats {

    mobileNavLinks.forEach(link => {

        link.addEventListener('click', function() {            opacity: 0;

            hamburger.classList.remove('active');

            mobileMenu.classList.remove('active');            transform: translateY(30px);// Update active nav link based on scroll positionfunction smoothScrollTo(target, duration = 1000) {

            document.body.classList.remove('menu-open');

                        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

            const spans = hamburger.querySelectorAll('span');

            spans[0].style.transform = '';        }function updateActiveNavLink() {

            spans[1].style.opacity = '';

            spans[2].style.transform = '';    `;

        });

    });    document.head.appendChild(style);    const sections = document.querySelectorAll('section[id]');// ============================    const targetPosition = target.offsetTop - 90; // Account for fixed navbar

    

    console.log('✅ Mobile menu initialized');    

}

    // Animate hero elements on load    const navLinks = document.querySelectorAll('.nav-link');

// ============================

// SCROLL EFFECTS    const heroTitle = document.querySelector('.hero-title');

// ============================

function initializeScrollEffects() {    const heroDescription = document.querySelector('.hero-description');    // NAVIGATION SYSTEM    const startPosition = window.pageYOffset;

    window.addEventListener('scroll', throttle(() => {

        const scrollY = window.scrollY;    const heroButtons = document.querySelector('.hero-buttons');

        

        // Update scroll progress    const heroStats = document.querySelector('.hero-stats');    let current = '';

        updateScrollProgress();

            

        // Parallax effects

        const heroBackground = document.querySelector('.hero-background');    setTimeout(() => {    const scrollPos = window.scrollY + 100;// ============================    const distance = targetPosition - startPosition;

        if (heroBackground && scrollY < window.innerHeight) {

            heroBackground.style.transform = `translateY(${scrollY * 0.3}px)`;        if (heroTitle) {

        }

    }, 10));            heroTitle.style.opacity = '1';    

    

    console.log('✅ Scroll effects initialized');            heroTitle.style.transform = 'translateY(0)';

}

        }    sections.forEach(section => {function initializeNavigation() {    let startTime = null;

// Update scroll progress bar

function updateScrollProgress() {    }, 300);

    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

                const sectionTop = section.offsetTop;

    let progressBar = document.querySelector('.scroll-progress');

    if (!progressBar) {    setTimeout(() => {

        progressBar = document.createElement('div');

        progressBar.className = 'scroll-progress';        if (heroDescription) {        const sectionHeight = section.clientHeight;    const navbar = document.getElementById('navbar');

        progressBar.style.cssText = `

            position: fixed;            heroDescription.style.opacity = '1';

            top: 0;

            left: 0;            heroDescription.style.transform = 'translateY(0)';        

            width: 0%;

            height: 4px;        }

            background: linear-gradient(90deg, #D4AF37, #FFD700);

            z-index: 9999;    }, 600);        if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {    const navLinks = document.querySelectorAll('.nav-link');    function animation(currentTime) {

            transition: width 0.3s ease;

        `;    

        document.body.appendChild(progressBar);

    }    setTimeout(() => {            current = section.getAttribute('id');

    

    progressBar.style.width = `${Math.min(scrollProgress, 100)}%`;        if (heroButtons) {

}

            heroButtons.style.opacity = '1';        }            if (startTime === null) startTime = currentTime;

// ============================

// INTERSECTION OBSERVER            heroButtons.style.transform = 'translateY(0)';

// ============================

function initializeIntersectionObserver() {        }    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {    }, 900);

            if (entry.isIntersecting) {

                entry.target.classList.add('animate-on-scroll');            // Navbar scroll effect with premium animations        const timeElapsed = currentTime - startTime;

                

                // Special handling for stats when scrolled back into view    setTimeout(() => {

                if (entry.target.classList.contains('hero-stats')) {

                    console.log('🎯 Stats section in view - checking if counters need re-animation');        if (heroStats) {    // Update nav links

                    const counters = entry.target.querySelectorAll('.stat-number');

                    const hasUnanimated = Array.from(counters).some(c => !c.hasAnimated);            heroStats.style.opacity = '1';

                    

                    if (hasUnanimated) {            heroStats.style.transform = 'translateY(0)';    navLinks.forEach(link => {    window.addEventListener('scroll', throttle(() => {        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);

                        setTimeout(() => {

                            startAllCounterAnimations();            // Start epic counter animations immediately when stats appear!

                        }, 300);

                    }            setTimeout(() => {        link.classList.remove('active');

                }

                                startEpicCounterAnimations();

                // Service cards animation

                if (entry.target.classList.contains('services-grid')) {            }, 300);        if (link.getAttribute('href') === `#${current}`) {        const scrollY = window.scrollY;        window.scrollTo(0, run);

                    const cards = entry.target.querySelectorAll('.service-card');

                    cards.forEach((card, index) => {        }

                        setTimeout(() => {

                            card.style.opacity = '1';    }, 1200);            link.classList.add('active');

                            card.style.transform = 'translateY(0)';

                        }, index * 100);}

                    });

                }        }                if (timeElapsed < duration) requestAnimationFrame(animation);

                

                // Testimonial cards animation// ============================

                if (entry.target.classList.contains('testimonials-grid')) {

                    const cards = entry.target.querySelectorAll('.testimonial-card');// EPIC COUNTER ANIMATIONS - THE STAR OF THE SHOW!     });

                    cards.forEach((card, index) => {

                        setTimeout(() => {// ============================

                            card.style.opacity = '1';

                            card.style.transform = 'translateY(0)';function initializeCounterAnimations() {}        // Add/remove scrolled class with smooth transition    }

                        }, index * 150);

                    });    const counters = document.querySelectorAll('.stat-number');

                }

            }    

        });

    }, {    counters.forEach(counter => {

        threshold: 0.1,

        rootMargin: '0px 0px -50px 0px'        const target = parseInt(counter.getAttribute('data-count')) || parseInt(counter.textContent) || 0;// ============================        if (scrollY > 50) {

    });

            

    // Observe elements

    const elementsToObserve = document.querySelectorAll([        if (target === 0) return;// MOBILE MENU

        '.hero-stats',

        '.services-grid',        

        '.testimonials-grid',

        '.about-content',        // ALWAYS start at 0 for epic counting effect!// ============================            navbar.classList.add('scrolled');    function easeInOutCubic(t, b, c, d) {

        '.contact-content'

    ].join(','));        counter.textContent = '0';

    

    elementsToObserve.forEach(el => observer.observe(el));        counter.originalValue = target;function initializeMobileMenu() {

    

    console.log('✅ Intersection observer initialized');        counter.hasAnimated = false;

}

            const hamburger = document.getElementById('hamburger');        } else {        t /= d / 2;

// ============================

// SMOOTH SCROLLING        const animateCounter = () => {

// ============================

function initializeSmoothScrolling() {            if (counter.hasAnimated) return; // Prevent re-animation    const mobileMenu = document.getElementById('mobile-menu');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {            

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));            counter.hasAnimated = true;    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');            navbar.classList.remove('scrolled');        if (t < 1) return c / 2 * t * t * t + b;

            if (target) {

                smoothScrollToElement(target);            let currentValue = 0;

            }

        });            const duration = 2500; // 2.5 second epic animation    

    });

                const startTime = performance.now();

    console.log('✅ Smooth scrolling initialized');

}                if (!hamburger || !mobileMenu) return;        }        t -= 2;



function smoothScrollToElement(target, duration = 1000, offset = 90) {            // Add epic glow effect during animation

    const targetPosition = target.offsetTop - offset;

    const startPosition = window.pageYOffset;            counter.style.textShadow = '0 0 20px #D4AF37';    

    const distance = targetPosition - startPosition;

    let startTime = null;            counter.style.transition = 'all 0.3s ease';

    

    function animation(currentTime) {                // Toggle mobile menu                return c / 2 * (t * t * t + 2) + b;

        if (startTime === null) startTime = currentTime;

        const timeElapsed = currentTime - startTime;            const updateCounter = (timestamp) => {

        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);                const elapsed = timestamp - startTime;    hamburger.addEventListener('click', function() {

        if (timeElapsed < duration) requestAnimationFrame(animation);

    }                const progress = Math.min(elapsed / duration, 1);

    

    function easeInOutCubic(t, b, c, d) {                        hamburger.classList.toggle('active');        // Update active navigation link    }

        t /= d / 2;

        if (t < 1) return c / 2 * t * t * t + b;                // Epic easing function for satisfying animation

        t -= 2;

        return c / 2 * (t * t * t + 2) + b;                const easeOutElastic = progress === 1 ? 1 :         mobileMenu.classList.toggle('active');

    }

                        1 - Math.pow(2, -10 * progress) * Math.sin((progress * 10 - 0.75) * (2 * Math.PI) / 3);

    requestAnimationFrame(animation);

}                        document.body.classList.toggle('menu-open');        updateActiveNavLink();



// ============================                currentValue = Math.floor(easeOutElastic * target);

// SERVICE CARDS

// ============================                        

function initializeServiceCards() {

    const serviceCards = document.querySelectorAll('.service-card');                // Add dynamic wobble effect for excitement

    

    // Add initial styles                if (progress < 0.9) {        // Animate hamburger            requestAnimationFrame(animation);

    const style = document.createElement('style');

    style.textContent = `                    const wobble = Math.sin(elapsed / 50) * (1 - progress) * 3;

        .service-card,

        .testimonial-card {                    currentValue += Math.floor(wobble);        const spans = hamburger.querySelectorAll('span');

            opacity: 0;

            transform: translateY(30px);                }

            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

        }                        if (hamburger.classList.contains('active')) {        // Premium parallax effect for navbar}

        

        @keyframes ripple {                // Ensure we don't go negative or over target

            to {

                transform: scale(4);                currentValue = Math.max(0, Math.min(currentValue, target));            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';

                opacity: 0;

            }                counter.textContent = currentValue;

        }

    `;                            spans[1].style.opacity = '0';        if (scrollY < window.innerHeight) {

    document.head.appendChild(style);

                    // Color change effects during counting

    serviceCards.forEach(card => {

        // Hover effects                if (progress < 0.3) {            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';

        card.addEventListener('mouseenter', function() {

            this.style.transform = 'translateY(-10px) scale(1.02)';                    counter.style.color = '#FFD700'; // Gold start

            this.style.boxShadow = '0 25px 50px rgba(212, 175, 55, 0.3)';

        });                } else if (progress < 0.7) {        } else {            navbar.style.transform = `translateY(${scrollY * 0.1}px)`;// ===== NAVIGATION =====

        

        card.addEventListener('mouseleave', function() {                    counter.style.color = '#FFFFFF'; // White middle

            this.style.transform = '';

            this.style.boxShadow = '';                } else if (progress < 1) {            spans[0].style.transform = '';

        });

                            counter.style.color = '#D4AF37'; // Final gold

        // Click ripple effect

        card.addEventListener('click', function(e) {                }            spans[1].style.opacity = '';        }function initializeNavigation() {

            const ripple = document.createElement('div');

            const rect = this.getBoundingClientRect();                

            const size = 60;

            const x = e.clientX - rect.left - size / 2;                if (progress < 1) {            spans[2].style.transform = '';

            const y = e.clientY - rect.top - size / 2;

                                requestAnimationFrame(updateCounter);

            ripple.style.cssText = `

                position: absolute;                } else {        }    }, 10));    const navbar = document.getElementById('navbar');

                width: ${size}px;

                height: ${size}px;                    // EPIC FINALE!

                border-radius: 50%;

                background: rgba(212, 175, 55, 0.4);                    counter.textContent = target;    });

                transform: scale(0);

                animation: ripple 0.6s linear;                    counter.style.color = '#D4AF37';

                left: ${x}px;

                top: ${y}px;                                const navLinks = document.querySelectorAll('.nav-link');

                pointer-events: none;

                z-index: 10;                    // Celebration effect!

            `;

                                counter.style.transform = 'scale(1.3)';    // Close menu on link click

            this.style.position = 'relative';

            this.appendChild(ripple);                    counter.style.textShadow = '0 0 30px #FFD700, 0 0 60px #D4AF37';

            

            setTimeout(() => {                        mobileNavLinks.forEach(link => {    // Active nav link highlighting with premium effects    

                ripple.remove();

            }, 600);                    // Bounce back with style

        });

    });                    setTimeout(() => {        link.addEventListener('click', function() {

    

    console.log('✅ Service cards initialized');                        counter.style.transform = 'scale(1)';

}

                        counter.style.textShadow = '0 2px 10px rgba(212, 175, 55, 0.5)';            hamburger.classList.remove('active');    navLinks.forEach((link, index) => {    // Navbar scroll effect

// ============================

// FORM VALIDATION & MODALS (Simplified)                    }, 300);

// ============================

function initializeFormValidation() {                                mobileMenu.classList.remove('active');

    const contactForm = document.getElementById('contactForm');

                        // Sparkle effect (optional - add some ✨)

    if (contactForm) {

        contactForm.addEventListener('submit', function(e) {                    createSparkleEffect(counter);            document.body.classList.remove('menu-open');        link.addEventListener('click', function(e) {    window.addEventListener('scroll', () => {

            e.preventDefault();

            showNotification('Thank you! Your message has been received.', 'success');                }

        });

    }            };            

    

    console.log('✅ Form validation initialized');            

}

            requestAnimationFrame(updateCounter);            const spans = hamburger.querySelectorAll('span');            e.preventDefault();        if (window.scrollY > 100) {

function initializeModals() {

    window.addEventListener('click', function(e) {        };

        if (e.target.classList.contains('modal')) {

            closeModal(e.target);                    spans[0].style.transform = '';

        }

    });        // Store animation function

    

    console.log('✅ Modals initialized');        counter.animate = animateCounter;            spans[1].style.opacity = '';                        navbar.classList.add('scrolled');

}

    });

function openBookingModal() {

    const modal = document.getElementById('bookingModal');}            spans[2].style.transform = '';

    if (modal) {

        modal.style.display = 'block';

        document.body.style.overflow = 'hidden';

    }// Create sparkle effect for counter finish        });            // Remove active class from all links        } else {

}

function createSparkleEffect(element) {

function closeBookingModal() {

    const modal = document.getElementById('bookingModal');    for (let i = 0; i < 5; i++) {    });

    closeModal(modal);

}        setTimeout(() => {



function closeModal(modal) {            const sparkle = document.createElement('div');}            navLinks.forEach(l => l.classList.remove('active'));            navbar.classList.remove('scrolled');

    if (modal) {

        modal.style.display = 'none';            sparkle.innerHTML = '✨';

        document.body.style.overflow = '';

    }            sparkle.style.cssText = `

}

                position: absolute;

function openServiceModal(serviceType) {

    showNotification(`Learn more about our ${serviceType} services! Call us at (646) 989-0274`, 'info');                font-size: 20px;// ============================                    }

}

                pointer-events: none;

// ============================

// NOTIFICATION SYSTEM                animation: sparkle 1s ease-out forwards;// HERO ANIMATIONS

// ============================

function showNotification(message, type = 'info') {                left: ${Math.random() * 100}%;

    const notification = document.createElement('div');

    notification.style.cssText = `                top: ${Math.random() * 100}%;// ============================            // Add active class to clicked link        

        position: fixed;

        top: 20px;            `;

        right: 20px;

        padding: 1rem 1.5rem;            function initializeHeroAnimations() {

        border-radius: 12px;

        color: white;            element.style.position = 'relative';

        font-weight: 600;

        z-index: 10000;            element.appendChild(sparkle);    // Add loading state styles            this.classList.add('active');        // Update active nav link

        transform: translateX(400px);

        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);            

        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

        backdrop-filter: blur(10px);            setTimeout(() => sparkle.remove(), 1000);    const style = document.createElement('style');

        max-width: 350px;

    `;        }, i * 100);

    

    switch (type) {    }    style.textContent = `                    updateActiveNavLink();

        case 'success':

            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';    

            break;

        case 'error':    // Add sparkle animation CSS if not exists        body:not(.loaded) .hero-title,

            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

            break;    if (!document.querySelector('#sparkle-animation')) {

        default:

            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';        const style = document.createElement('style');        body:not(.loaded) .hero-description,            // Smooth scroll to target section    });

    }

            style.id = 'sparkle-animation';

    notification.textContent = message;

    document.body.appendChild(notification);        style.textContent = `        body:not(.loaded) .hero-buttons,

    

    setTimeout(() => {            @keyframes sparkle {

        notification.style.transform = 'translateX(0)';

    }, 10);                0% { opacity: 1; transform: scale(0) rotate(0deg); }        body:not(.loaded) .hero-stats {            const targetId = this.getAttribute('href');    

    

    setTimeout(() => {                50% { opacity: 1; transform: scale(1) rotate(180deg); }

        notification.style.transform = 'translateX(400px)';

        setTimeout(() => {                100% { opacity: 0; transform: scale(0) rotate(360deg); }            opacity: 0;

            notification.remove();

        }, 400);            }

    }, 5000);

}        `;            transform: translateY(30px);            const targetElement = document.querySelector(targetId);    // Active nav link highlighting



// ============================        document.head.appendChild(style);

// UTILITY FUNCTIONS

// ============================    }            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

function throttle(func, limit) {

    let inThrottle;}

    return function() {

        const args = arguments;        }                navLinks.forEach(link => {

        const context = this;

        if (!inThrottle) {function startEpicCounterAnimations() {

            func.apply(context, args);

            inThrottle = true;    console.log('🎯 Starting EPIC counter animations!');    `;

            setTimeout(() => inThrottle = false, limit);

        }    const counters = document.querySelectorAll('.stat-number');

    }

}        document.head.appendChild(style);            if (targetElement) {        link.addEventListener('click', function() {



function scrollToSection(sectionId) {    counters.forEach((counter, index) => {

    const element = document.getElementById(sectionId);

    if (element) {        if (counter.animate) {    

        smoothScrollToElement(element);

    }            // Stagger the animations for maximum wow factor!

}

            setTimeout(() => {    // Animate hero elements on load                smoothScrollToElement(targetElement);            navLinks.forEach(l => l.classList.remove('active'));

// ============================

// EXPORT GLOBAL FUNCTIONS                console.log(`🚀 Animating counter ${index + 1}`);

// ============================

window.openBookingModal = openBookingModal;                counter.animate();    const heroTitle = document.querySelector('.hero-title');

window.closeBookingModal = closeBookingModal;

window.openServiceModal = openServiceModal;            }, index * 400); // 400ms delay between each counter

window.scrollToSection = scrollToSection;

window.startAllCounterAnimations = startAllCounterAnimations; // For debugging        }    const heroDescription = document.querySelector('.hero-description');            }            this.classList.add('active');



console.log('✅ Elite Auto Repair JavaScript Loaded Successfully!');    });

console.log('🎯 Ready to show EPIC counter animations!');
}    const heroButtons = document.querySelector('.hero-buttons');



// ============================    const heroStats = document.querySelector('.hero-stats');        });        });

// SCROLL EFFECTS

// ============================    

function initializeScrollEffects() {

    window.addEventListener('scroll', throttle(() => {    setTimeout(() => {            });

        const scrollY = window.scrollY;

                if (heroTitle) {

        // Update scroll progress

        updateScrollProgress();            heroTitle.style.opacity = '1';        // Add premium hover effects with delays}

        

        // Parallax effects            heroTitle.style.transform = 'translateY(0)';

        const heroBackground = document.querySelector('.hero-background');

        if (heroBackground && scrollY < window.innerHeight) {        }        link.addEventListener('mouseenter', function() {

            heroBackground.style.transform = `translateY(${scrollY * 0.3}px)`;

        }    }, 300);

    }, 10));

}                this.style.transform = 'translateY(-2px) scale(1.05)';function updateActiveNavLink() {



// Update scroll progress bar    setTimeout(() => {

function updateScrollProgress() {

    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;        if (heroDescription) {            this.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';    const sections = document.querySelectorAll('section[id]');

    

    let progressBar = document.querySelector('.scroll-progress');            heroDescription.style.opacity = '1';

    if (!progressBar) {

        progressBar = document.createElement('div');            heroDescription.style.transform = 'translateY(0)';        });    const navLinks = document.querySelectorAll('.nav-link');

        progressBar.className = 'scroll-progress';

        progressBar.style.cssText = `        }

            position: fixed;

            top: 0;    }, 600);            

            left: 0;

            width: 0%;    

            height: 4px;

            background: linear-gradient(90deg, #D4AF37, #FFD700);    setTimeout(() => {        link.addEventListener('mouseleave', function() {    let current = '';

            z-index: 9999;

            transition: width 0.3s ease;        if (heroButtons) {

        `;

        document.body.appendChild(progressBar);            heroButtons.style.opacity = '1';            if (!this.classList.contains('active')) {    

    }

                heroButtons.style.transform = 'translateY(0)';

    progressBar.style.width = `${Math.min(scrollProgress, 100)}%`;

}        }                this.style.transform = '';    sections.forEach(section => {



// ============================    }, 900);

// INTERSECTION OBSERVER

// ============================                    this.style.boxShadow = '';        const sectionTop = section.offsetTop;

function initializeIntersectionObserver() {

    const observer = new IntersectionObserver((entries) => {    setTimeout(() => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {        if (heroStats) {            }        const sectionHeight = section.clientHeight;

                entry.target.classList.add('animate-on-scroll');

                            heroStats.style.opacity = '1';

                // Special handling for stats - trigger epic counters when scrolled into view

                if (entry.target.classList.contains('hero-stats')) {            heroStats.style.transform = 'translateY(0)';        });        if (window.scrollY >= (sectionTop - 200)) {

                    setTimeout(() => {

                        startEpicCounterAnimations();            // Start counter animations

                    }, 300);

                }            startCounterAnimations();    });            current = section.getAttribute('id');

                

                // Service cards animation        }

                if (entry.target.classList.contains('services-grid')) {

                    const cards = entry.target.querySelectorAll('.service-card');    }, 1200);}        }

                    cards.forEach((card, index) => {

                        setTimeout(() => {}

                            card.style.opacity = '1';

                            card.style.transform = 'translateY(0)';    });

                        }, index * 100);

                    });// ============================

                }

                // COUNTER ANIMATIONS// Update active nav link based on scroll position    

                // Testimonial cards animation

                if (entry.target.classList.contains('testimonials-grid')) {// ============================

                    const cards = entry.target.querySelectorAll('.testimonial-card');

                    cards.forEach((card, index) => {function initializeCounterAnimations() {function updateActiveNavLink() {    navLinks.forEach(link => {

                        setTimeout(() => {

                            card.style.opacity = '1';    const counters = document.querySelectorAll('.stat-number');

                            card.style.transform = 'translateY(0)';

                        }, index * 150);        const sections = document.querySelectorAll('section[id]');        link.classList.remove('active');

                    });

                }    counters.forEach(counter => {

            }

        });        const target = parseInt(counter.getAttribute('data-count')) || parseInt(counter.textContent) || 0;    const navLinks = document.querySelectorAll('.nav-link');        if (link.getAttribute('href') === `#${current}`) {

    }, {

        threshold: 0.1,        

        rootMargin: '0px 0px -50px 0px'

    });        if (target === 0) return;                link.classList.add('active');

    

    // Observe elements        

    const elementsToObserve = document.querySelectorAll([

        '.hero-stats',        // Store original value and target    let current = '';        }

        '.services-grid',

        '.testimonials-grid',        counter.originalValue = target;

        '.about-content',

        '.contact-content'        counter.currentValue = 0;    const scrollPos = window.scrollY + 100;    });

    ].join(','));

            

    elementsToObserve.forEach(el => observer.observe(el));

}        const animateCounter = () => {    }



// ============================            const increment = target / 60; // 60 frames for smooth animation

// SMOOTH SCROLLING

// ============================                sections.forEach(section => {

function initializeSmoothScrolling() {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {            const updateCounter = () => {

        anchor.addEventListener('click', function (e) {

            e.preventDefault();                if (counter.currentValue < target) {        const sectionTop = section.offsetTop;// ===== MOBILE MENU =====

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {                    counter.currentValue += increment;

                smoothScrollToElement(target);

            }                    counter.textContent = Math.ceil(counter.currentValue);        const sectionHeight = section.clientHeight;function initializeMobileMenu() {

        });

    });                    requestAnimationFrame(updateCounter);

}

                } else {            const hamburger = document.getElementById('hamburger');

function smoothScrollToElement(target, duration = 1000, offset = 90) {

    const targetPosition = target.offsetTop - offset;                    counter.textContent = target;

    const startPosition = window.pageYOffset;

    const distance = targetPosition - startPosition;                }        if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {    const navMenu = document.getElementById('nav-menu');

    let startTime = null;

                };

    function animation(currentTime) {

        if (startTime === null) startTime = currentTime;                        current = section.getAttribute('id');    

        const timeElapsed = currentTime - startTime;

        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);            // Reset and start

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);            counter.currentValue = 0;        }    if (hamburger && navMenu) {

    }

                counter.textContent = '0';

    function easeInOutCubic(t, b, c, d) {

        t /= d / 2;            updateCounter();    });        hamburger.addEventListener('click', () => {

        if (t < 1) return c / 2 * t * t * t + b;

        t -= 2;        };

        return c / 2 * (t * t * t + 2) + b;

    }                        hamburger.classList.toggle('active');

    

    requestAnimationFrame(animation);        // Store animation function

}

        counter.animate = animateCounter;    // Update nav links            navMenu.classList.toggle('active');

// ============================

// SERVICE CARDS    });

// ============================

function initializeServiceCards() {}    navLinks.forEach(link => {        });

    const serviceCards = document.querySelectorAll('.service-card');

    

    // Add initial styles

    const style = document.createElement('style');function startCounterAnimations() {        link.classList.remove('active');        

    style.textContent = `

        .service-card,    const counters = document.querySelectorAll('.stat-number');

        .testimonial-card {

            opacity: 0;    counters.forEach((counter, index) => {        if (link.getAttribute('href') === `#${current}`) {        // Close mobile menu when clicking on a link

            transform: translateY(30px);

            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);        if (counter.animate) {

        }

                    setTimeout(() => {            link.classList.add('active');        document.querySelectorAll('.nav-link').forEach(link => {

        @keyframes ripple {

            to {                counter.animate();

                transform: scale(4);

                opacity: 0;            }, index * 200); // Stagger animations        }            link.addEventListener('click', () => {

            }

        }        }

    `;

    document.head.appendChild(style);    });    });                hamburger.classList.remove('active');

    

    serviceCards.forEach(card => {}

        // Hover effects

        card.addEventListener('mouseenter', function() {}                navMenu.classList.remove('active');

            this.style.transform = 'translateY(-10px) scale(1.02)';

            this.style.boxShadow = '0 25px 50px rgba(212, 175, 55, 0.3)';// ============================

        });

        // SCROLL EFFECTS            });

        card.addEventListener('mouseleave', function() {

            this.style.transform = '';// ============================

            this.style.boxShadow = '';

        });function initializeScrollEffects() {// ============================        });

        

        // Click ripple effect    window.addEventListener('scroll', throttle(() => {

        card.addEventListener('click', function(e) {

            const ripple = document.createElement('div');        const scrollY = window.scrollY;// MOBILE NAVIGATION    }

            const rect = this.getBoundingClientRect();

            const size = 60;        

            const x = e.clientX - rect.left - size / 2;

            const y = e.clientY - rect.top - size / 2;        // Update scroll progress// ============================}

            

            ripple.style.cssText = `        updateScrollProgress();

                position: absolute;

                width: ${size}px;        function initializeMobileMenu() {

                height: ${size}px;

                border-radius: 50%;        // Parallax effects

                background: rgba(212, 175, 55, 0.4);

                transform: scale(0);        const heroBackground = document.querySelector('.hero-background');    const hamburger = document.getElementById('hamburger');// ===== SMOOTH SCROLLING =====

                animation: ripple 0.6s linear;

                left: ${x}px;        if (heroBackground && scrollY < window.innerHeight) {

                top: ${y}px;

                pointer-events: none;            heroBackground.style.transform = `translateY(${scrollY * 0.3}px)`;    const mobileMenu = document.getElementById('mobile-menu');function scrollToSection(sectionId) {

                z-index: 10;

            `;        }

            

            this.style.position = 'relative';    }, 10));    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');    const element = document.getElementById(sectionId);

            this.appendChild(ripple);

            }

            setTimeout(() => {

                ripple.remove();        if (element) {

            }, 600);

        });// Update scroll progress bar

    });

}function updateScrollProgress() {    if (!hamburger || !mobileMenu) return;        const offsetTop = element.offsetTop - 80; // Account for fixed navbar



// ============================    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

// FORM VALIDATION

// ============================                window.scrollTo({

function initializeFormValidation() {

    const contactForm = document.getElementById('contactForm');    let progressBar = document.querySelector('.scroll-progress');

    

    if (contactForm) {    if (!progressBar) {    // Toggle mobile menu            top: offsetTop,

        contactForm.addEventListener('submit', handleFormSubmit);

                progressBar = document.createElement('div');

        const inputs = contactForm.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {        progressBar.className = 'scroll-progress';    hamburger.addEventListener('click', function() {            behavior: 'smooth'

            input.addEventListener('blur', validateField);

            input.addEventListener('input', clearFieldError);        progressBar.style.cssText = `

        });

    }            position: fixed;        hamburger.classList.toggle('active');        });

}

            top: 0;

function handleFormSubmit(e) {

    e.preventDefault();            left: 0;        mobileMenu.classList.toggle('active');    }

    

    const form = e.target;            width: 0%;

    const submitBtn = form.querySelector('button[type="submit"]');

                height: 4px;        document.body.classList.toggle('menu-open');}

    if (!validateForm(form)) {

        showNotification('Please fill in all required fields correctly.', 'error');            background: linear-gradient(90deg, #D4AF37, #FFD700);

        return;

    }            z-index: 9999;        

    

    // Show loading            transition: width 0.3s ease;

    submitBtn.textContent = 'Sending...';

    submitBtn.disabled = true;        `;        // Animate hamburger// ===== ADVANCED SCROLL EFFECTS =====

    

    // Simulate submission        document.body.appendChild(progressBar);

    setTimeout(() => {

        form.reset();    }        const spans = hamburger.querySelectorAll('span');function initializeAdvancedScrollEffects() {

        submitBtn.textContent = 'Message Sent!';

        submitBtn.style.background = '#10b981';    

        

        showNotification('Thank you! Your message has been sent successfully.', 'success');    progressBar.style.width = `${Math.min(scrollProgress, 100)}%`;        if (hamburger.classList.contains('active')) {    // Parallax scrolling for hero background

        

        setTimeout(() => {}

            submitBtn.textContent = 'Send Request';

            submitBtn.disabled = false;            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';    window.addEventListener('scroll', () => {

            submitBtn.style.background = '';

        }, 3000);// ============================

    }, 2000);

}// INTERSECTION OBSERVER            spans[1].style.opacity = '0';        const scrolled = window.pageYOffset;



function validateForm(form) {// ============================

    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    let isValid = true;function initializeIntersectionObserver() {            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';        const parallaxElements = document.querySelectorAll('.hero-background');

    

    inputs.forEach(input => {    const observer = new IntersectionObserver((entries) => {

        if (!validateField({ target: input })) {

            isValid = false;        entries.forEach(entry => {        } else {        

        }

    });            if (entry.isIntersecting) {

    

    return isValid;                entry.target.classList.add('animate-on-scroll');            spans[0].style.transform = '';        parallaxElements.forEach(element => {

}

                

function validateField(e) {

    const field = e.target;                // Special handling for stats            spans[1].style.opacity = '';            const speed = 0.5;

    const value = field.value.trim();

                    if (entry.target.classList.contains('hero-stats')) {

    if (field.hasAttribute('required') && !value) {

        showFieldError(field, 'This field is required');                    setTimeout(() => {            spans[2].style.transform = '';            element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;

        return false;

    }                        startCounterAnimations();

    

    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {                    }, 300);        }        });

        showFieldError(field, 'Please enter a valid email address');

        return false;                }

    }

                        });        

    clearFieldError({ target: field });

    return true;                // Service cards animation

}

                if (entry.target.classList.contains('services-grid')) {            // Update navbar on scroll

function showFieldError(field, message) {

    field.classList.add('error');                    const cards = entry.target.querySelectorAll('.service-card');

    

    let errorElement = field.parentNode.querySelector('.error-message');                    cards.forEach((card, index) => {    // Close menu when clicking on links        updateNavbarOnScroll();

    if (!errorElement) {

        errorElement = document.createElement('div');                        setTimeout(() => {

        errorElement.className = 'error-message';

        errorElement.style.cssText = `                            card.style.opacity = '1';    mobileNavLinks.forEach(link => {    });

            color: #ef4444;

            font-size: 0.875rem;                            card.style.transform = 'translateY(0)';

            margin-top: 0.5rem;

        `;                        }, index * 100);        link.addEventListener('click', function() {}

        field.parentNode.appendChild(errorElement);

    }                    });

    

    errorElement.textContent = message;                }            hamburger.classList.remove('active');

}

                

function clearFieldError(e) {

    const field = e.target;                // Testimonial cards animation            mobileMenu.classList.remove('active');function initializeIntersectionObservers() {

    field.classList.remove('error');

                    if (entry.target.classList.contains('testimonials-grid')) {

    const errorElement = field.parentNode.querySelector('.error-message');

    if (errorElement) {                    const cards = entry.target.querySelectorAll('.testimonial-card');            document.body.classList.remove('menu-open');    // Advanced intersection observer with multiple thresholds

        errorElement.remove();

    }                    cards.forEach((card, index) => {

}

                        setTimeout(() => {                const observerOptions = {

// ============================

// MODAL SYSTEM                            card.style.opacity = '1';

// ============================

function initializeModals() {                            card.style.transform = 'translateY(0)';            // Reset hamburger        threshold: [0, 0.1, 0.5, 0.75, 1],

    window.addEventListener('click', function(e) {

        if (e.target.classList.contains('modal')) {                        }, index * 150);

            closeModal(e.target);

        }                    });            const spans = hamburger.querySelectorAll('span');        rootMargin: '0px 0px -100px 0px'

    });

                    }

    window.addEventListener('keydown', function(e) {

        if (e.key === 'Escape') {            }            spans[0].style.transform = '';    };

            const openModal = document.querySelector('.modal[style*="block"]');

            if (openModal) {        });

                closeModal(openModal);

            }    }, {            spans[1].style.opacity = '';    

        }

    });        threshold: 0.1,

}

        rootMargin: '0px 0px -50px 0px'            spans[2].style.transform = '';    const observer = new IntersectionObserver((entries) => {

function openBookingModal() {

    const modal = document.getElementById('bookingModal');    });

    if (modal) {

        modal.style.display = 'block';            });        entries.forEach(entry => {

        document.body.style.overflow = 'hidden';

    }    // Observe elements

}

    const elementsToObserve = document.querySelectorAll([    });            if (entry.isIntersecting) {

function closeBookingModal() {

    const modal = document.getElementById('bookingModal');        '.hero-stats',

    closeModal(modal);

}        '.services-grid',                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;



function closeModal(modal) {        '.testimonials-grid',

    if (modal) {

        modal.style.display = 'none';        '.about-content',    // Close menu when clicking outside                setTimeout(() => {

        document.body.style.overflow = '';

    }        '.contact-content'

}

    ].join(','));    mobileMenu.addEventListener('click', function(e) {                    entry.target.classList.add('animate-in');

function openServiceModal(serviceType) {

    showNotification(`Learn more about our ${serviceType} services! Call us at (646) 989-0274`, 'info');    

}

    elementsToObserve.forEach(el => observer.observe(el));        if (e.target === mobileMenu) {                }, delay);

// ============================

// NOTIFICATION SYSTEM}

// ============================

function showNotification(message, type = 'info') {            hamburger.click();            }

    const notification = document.createElement('div');

    notification.style.cssText = `// ============================

        position: fixed;

        top: 20px;// SMOOTH SCROLLING        }        });

        right: 20px;

        padding: 1rem 1.5rem;// ============================

        border-radius: 12px;

        color: white;function initializeSmoothScrolling() {    });    }, observerOptions);

        font-weight: 600;

        z-index: 10000;    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        transform: translateX(400px);

        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);        anchor.addEventListener('click', function (e) {}    

        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

        backdrop-filter: blur(10px);            e.preventDefault();

        max-width: 350px;

    `;            const target = document.querySelector(this.getAttribute('href'));    // Observe all animated elements

    

    switch (type) {            if (target) {

        case 'success':

            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';                smoothScrollToElement(target);// ============================    document.querySelectorAll('.service-card, .testimonial-card, .feature, .contact-item, .stat').forEach(el => {

            break;

        case 'error':            }

            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';

            break;        });// HERO ANIMATIONS        observer.observe(el);

        default:

            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';    });

    }

    }// ============================    });

    notification.textContent = message;

    document.body.appendChild(notification);

    

    setTimeout(() => {function smoothScrollToElement(target, duration = 1000, offset = 90) {function initializeHeroAnimations() {}

        notification.style.transform = 'translateX(0)';

    }, 10);    const targetPosition = target.offsetTop - offset;

    

    setTimeout(() => {    const startPosition = window.pageYOffset;    const heroTitle = document.querySelector('.hero-title');

        notification.style.transform = 'translateX(400px)';

        setTimeout(() => {    const distance = targetPosition - startPosition;

            notification.remove();

        }, 400);    let startTime = null;    const heroDescription = document.querySelector('.hero-description');// ===== PARALLAX EFFECTS =====

    }, 5000);

}    



// ============================    function animation(currentTime) {    const heroButtons = document.querySelector('.hero-buttons');function initializeParallaxEffects() {

// UTILITY FUNCTIONS

// ============================        if (startTime === null) startTime = currentTime;

function throttle(func, limit) {

    let inThrottle;        const timeElapsed = currentTime - startTime;    const heroStats = document.querySelector('.hero-stats');    let ticking = false;

    return function() {

        const args = arguments;        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);

        const context = this;

        if (!inThrottle) {        window.scrollTo(0, run);        

            func.apply(context, args);

            inThrottle = true;        if (timeElapsed < duration) requestAnimationFrame(animation);

            setTimeout(() => inThrottle = false, limit);

        }    }    // Animate hero elements on load    function requestTick() {

    }

}    



function scrollToSection(sectionId) {    function easeInOutCubic(t, b, c, d) {    setTimeout(() => {        if (!ticking) {

    const element = document.getElementById(sectionId);

    if (element) {        t /= d / 2;

        smoothScrollToElement(element);

    }        if (t < 1) return c / 2 * t * t * t + b;        if (heroTitle) {            requestAnimationFrame(updateParallax);

}

        t -= 2;

// Export global functions

window.openBookingModal = openBookingModal;        return c / 2 * (t * t * t + 2) + b;            heroTitle.style.opacity = '1';            ticking = true;

window.closeBookingModal = closeBookingModal;

window.openServiceModal = openServiceModal;    }

window.scrollToSection = scrollToSection;

                heroTitle.style.transform = 'translateY(0)';        }

console.log('🎯 Elite Auto Repair - EPIC Counter Animations Ready!');
    requestAnimationFrame(animation);

}        }    }



// ============================    }, 300);    

// SERVICE CARDS

// ============================        function updateParallax() {

function initializeServiceCards() {

    const serviceCards = document.querySelectorAll('.service-card');    setTimeout(() => {        const scrollTop = window.pageYOffset;

    

    // Add initial styles        if (heroDescription) {        

    const style = document.createElement('style');

    style.textContent = `            heroDescription.style.opacity = '1';        // Parallax background elements

        .service-card,

        .testimonial-card {            heroDescription.style.transform = 'translateY(0)';        document.querySelectorAll('.parallax-bg').forEach(element => {

            opacity: 0;

            transform: translateY(30px);        }            const speed = element.dataset.speed || 0.5;

            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

        }    }, 600);            const yPos = -(scrollTop * speed);

        

        @keyframes ripple {                element.style.transform = `translate3d(0, ${yPos}px, 0)`;

            to {

                transform: scale(4);    setTimeout(() => {        });

                opacity: 0;

            }        if (heroButtons) {        

        }

    `;            heroButtons.style.opacity = '1';        // Parallax content elements

    document.head.appendChild(style);

                heroButtons.style.transform = 'translateY(0)';        document.querySelectorAll('.parallax-content').forEach(element => {

    serviceCards.forEach(card => {

        // Hover effects        }            const speed = element.dataset.speed || 0.2;

        card.addEventListener('mouseenter', function() {

            this.style.transform = 'translateY(-10px) scale(1.02)';    }, 900);            const yPos = -(scrollTop * speed);

            this.style.boxShadow = '0 25px 50px rgba(212, 175, 55, 0.3)';

        });                element.style.transform = `translate3d(0, ${yPos}px, 0)`;

        

        card.addEventListener('mouseleave', function() {    setTimeout(() => {        });

            this.style.transform = '';

            this.style.boxShadow = '';        if (heroStats) {        

        });

                    heroStats.style.opacity = '1';        ticking = false;

        // Click ripple effect

        card.addEventListener('click', function(e) {            heroStats.style.transform = 'translateY(0)';    }

            const ripple = document.createElement('div');

            const rect = this.getBoundingClientRect();        }    

            const size = 60;

            const x = e.clientX - rect.left - size / 2;    }, 1200);    window.addEventListener('scroll', requestTick);

            const y = e.clientY - rect.top - size / 2;

                }

            ripple.style.cssText = `

                position: absolute;    // Add floating animation to hero badge

                width: ${size}px;

                height: ${size}px;    const heroBadge = document.querySelector('.hero-badge');// ===== CUSTOM CURSOR =====

                border-radius: 50%;

                background: rgba(212, 175, 55, 0.4);    if (heroBadge) {function initializeCustomCursor() {

                transform: scale(0);

                animation: ripple 0.6s linear;        setInterval(() => {    const cursor = document.createElement('div');

                left: ${x}px;

                top: ${y}px;            heroBadge.style.transform = 'translateY(-5px)';    cursor.className = 'custom-cursor';

                pointer-events: none;

                z-index: 10;            setTimeout(() => {    document.body.appendChild(cursor);

            `;

                            heroBadge.style.transform = 'translateY(0)';    

            this.style.position = 'relative';

            this.appendChild(ripple);            }, 1000);    const cursorFollower = document.createElement('div');

            

            setTimeout(() => {        }, 3000);    cursorFollower.className = 'custom-cursor-follower';

                ripple.remove();

            }, 600);    }    document.body.appendChild(cursorFollower);

        });

    });}    

}

    let mouseX = 0, mouseY = 0;

// ============================

// FORM VALIDATION// ============================    let followerX = 0, followerY = 0;

// ============================

function initializeFormValidation() {// SCROLL EFFECTS & PARALLAX    

    const contactForm = document.getElementById('contactForm');

    // ============================    document.addEventListener('mousemove', (e) => {

    if (contactForm) {

        contactForm.addEventListener('submit', handleFormSubmit);function initializeScrollEffects() {        mouseX = e.clientX;

        

        const inputs = contactForm.querySelectorAll('input, textarea, select');    window.addEventListener('scroll', throttle(() => {        mouseY = e.clientY;

        inputs.forEach(input => {

            input.addEventListener('blur', validateField);        const scrollY = window.scrollY;        

            input.addEventListener('input', clearFieldError);

        });                // Center the cursor precisely on mouse position

    }

}        // Parallax effects for various elements        cursor.style.left = (mouseX - 5) + 'px';



function handleFormSubmit(e) {        const heroBackground = document.querySelector('.hero-background');        cursor.style.top = (mouseY - 5) + 'px';

    e.preventDefault();

            if (heroBackground && scrollY < window.innerHeight) {    });

    const form = e.target;

    const submitBtn = form.querySelector('button[type="submit"]');            heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;    

    

    if (!validateForm(form)) {        }    // Smooth follower animation with better accuracy

        showNotification('Please fill in all required fields correctly.', 'error');

        return;            function animateFollower() {

    }

            // Service cards parallax        followerX += (mouseX - followerX) * 0.15;

    // Show loading

    submitBtn.textContent = 'Sending...';        const serviceCards = document.querySelectorAll('.service-card');        followerY += (mouseY - followerY) * 0.15;

    submitBtn.disabled = true;

            serviceCards.forEach((card, index) => {        

    // Simulate submission

    setTimeout(() => {            const rect = card.getBoundingClientRect();        // Center the follower on mouse position

        form.reset();

        submitBtn.textContent = 'Message Sent!';            const speed = 0.1 + (index * 0.02);        cursorFollower.style.left = (followerX - 15) + 'px';

        submitBtn.style.background = '#10b981';

                            cursorFollower.style.top = (followerY - 15) + 'px';

        showNotification('Thank you! Your message has been sent successfully.', 'success');

                    if (rect.top < window.innerHeight && rect.bottom > 0) {        

        setTimeout(() => {

            submitBtn.textContent = 'Send Request';                const yPos = -(rect.top * speed);        requestAnimationFrame(animateFollower);

            submitBtn.disabled = false;

            submitBtn.style.background = '';                card.style.transform = `translateY(${yPos}px)`;    }

        }, 3000);

    }, 2000);            }    animateFollower();

}

        });    

function validateForm(form) {

    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');            // Cursor interactions

    let isValid = true;

            // Add scroll progress indicator    document.querySelectorAll('a, button, .service-card, .testimonial-card').forEach(element => {

    inputs.forEach(input => {

        if (!validateField({ target: input })) {        updateScrollProgress();        element.addEventListener('mouseenter', () => {

            isValid = false;

        }                    cursor.classList.add('cursor-hover');

    });

        }, 10));            cursorFollower.classList.add('cursor-hover');

    return isValid;

}}        });



function validateField(e) {        

    const field = e.target;

    const value = field.value.trim();// Update scroll progress        element.addEventListener('mouseleave', () => {

    

    if (field.hasAttribute('required') && !value) {function updateScrollProgress() {            cursor.classList.remove('cursor-hover');

        showFieldError(field, 'This field is required');

        return false;    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;            cursorFollower.classList.remove('cursor-hover');

    }

                });

    if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

        showFieldError(field, 'Please enter a valid email address');    // Create or update progress bar    });

        return false;

    }    let progressBar = document.querySelector('.scroll-progress');}

    

    clearFieldError({ target: field });    if (!progressBar) {

    return true;

}        progressBar = document.createElement('div');function initializeAdvancedAnimations() {



function showFieldError(field, message) {        progressBar.className = 'scroll-progress';    // Staggered animations for service cards

    field.classList.add('error');

            progressBar.style.cssText = `    const serviceCards = document.querySelectorAll('.service-card');

    let errorElement = field.parentNode.querySelector('.error-message');

    if (!errorElement) {            position: fixed;    serviceCards.forEach((element, index) => {

        errorElement = document.createElement('div');

        errorElement.className = 'error-message';            top: 0;        element.style.animationDelay = `${index * 0.15}s`;

        errorElement.style.cssText = `

            color: #ef4444;            left: 0;        element.classList.add('fade-in-up');

            font-size: 0.875rem;

            margin-top: 0.5rem;            width: 0%;    });

        `;

        field.parentNode.appendChild(errorElement);            height: 4px;    

    }

                background: linear-gradient(90deg, #D4AF37, #FFD700);    // Advanced text animations

    errorElement.textContent = message;

}            z-index: 9999;    initializeTextAnimations();



function clearFieldError(e) {            transition: width 0.3s ease;    

    const field = e.target;

    field.classList.remove('error');        `;    // Floating animations for decorative elements

    

    const errorElement = field.parentNode.querySelector('.error-message');        document.body.appendChild(progressBar);    initializeFloatingAnimations();

    if (errorElement) {

        errorElement.remove();    }}

    }

}    



// ============================    progressBar.style.width = `${scrollProgress}%`;function initializeTextAnimations() {

// MODAL SYSTEM

// ============================}    // Split text into spans for individual letter animations

function initializeModals() {

    window.addEventListener('click', function(e) {    const animatedTexts = document.querySelectorAll('.animate-text');

        if (e.target.classList.contains('modal')) {

            closeModal(e.target);// ============================    animatedTexts.forEach(element => {

        }

    });// COUNTER ANIMATIONS        const text = element.textContent;

    

    window.addEventListener('keydown', function(e) {// ============================        element.innerHTML = '';

        if (e.key === 'Escape') {

            const openModal = document.querySelector('.modal[style*="block"]');function initializeCounterAnimations() {        

            if (openModal) {

                closeModal(openModal);    const counters = document.querySelectorAll('.stat-number');        [...text].forEach((char, index) => {

            }

        }                const span = document.createElement('span');

    });

}    counters.forEach(counter => {            span.textContent = char === ' ' ? '\u00A0' : char;



function openBookingModal() {        const target = parseInt(counter.getAttribute('data-count')) || parseInt(counter.textContent);            span.style.animationDelay = `${index * 0.05}s`;

    const modal = document.getElementById('bookingModal');

    if (modal) {        let count = 0;            span.classList.add('char-animate');

        modal.style.display = 'block';

        document.body.style.overflow = 'hidden';        const increment = target / 100;            element.appendChild(span);

    }

}                });



function closeBookingModal() {        const updateCounter = () => {    });

    const modal = document.getElementById('bookingModal');

    closeModal(modal);            if (count < target) {}

}

                count += increment;

function closeModal(modal) {

    if (modal) {                counter.textContent = Math.ceil(count);function initializeFloatingAnimations() {

        modal.style.display = 'none';

        document.body.style.overflow = '';                requestAnimationFrame(updateCounter);    // Add floating animation to decorative elements

    }

}            } else {    const floatingElements = document.querySelectorAll('.service-icon, .feature-icon');



function openServiceModal(serviceType) {                counter.textContent = target;    floatingElements.forEach((element, index) => {

    showNotification(`Learn more about our ${serviceType} services! Call us at (646) 989-0274`, 'info');

}            }        element.style.animationDelay = `${index * 0.5}s`;



// ============================        };        element.classList.add('floating');

// NOTIFICATION SYSTEM

// ============================            });

function showNotification(message, type = 'info') {

    const notification = document.createElement('div');        // Store the animation function for later use}

    notification.style.cssText = `

        position: fixed;        counter.startAnimation = updateCounter;

        top: 20px;

        right: 20px;    });// ===== COUNTER ANIMATIONS =====

        padding: 1rem 1.5rem;

        border-radius: 12px;}function initializeCounterAnimations() {

        color: white;

        font-weight: 600;    const counters = document.querySelectorAll('.stat-number');

        z-index: 10000;

        transform: translateX(400px);// ============================    

        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);// INTERSECTION OBSERVER    const observerOptions = {

        backdrop-filter: blur(10px);

        max-width: 350px;// ============================        threshold: 0.5,

    `;

    function initializeIntersectionObserver() {        rootMargin: '0px'

    switch (type) {

        case 'success':    const observerOptions = {    };

            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';

            break;        threshold: 0.1,    

        case 'error':

            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';        rootMargin: '0px 0px -50px 0px'    const observer = new IntersectionObserver((entries) => {

            break;

        default:    };        entries.forEach(entry => {

            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';

    }                if (entry.isIntersecting) {

    

    notification.textContent = message;    const observer = new IntersectionObserver((entries) => {                animateCounter(entry.target);

    document.body.appendChild(notification);

            entries.forEach(entry => {                observer.unobserve(entry.target);

    setTimeout(() => {

        notification.style.transform = 'translateX(0)';            if (entry.isIntersecting) {            }

    }, 10);

                    // Add animation classes        });

    setTimeout(() => {

        notification.style.transform = 'translateX(400px)';                entry.target.classList.add('animate-on-scroll');    }, observerOptions);

        setTimeout(() => {

            notification.remove();                    

        }, 400);

    }, 5000);                // Start counter animations    counters.forEach(counter => {

}

                if (entry.target.classList.contains('hero-stats')) {        observer.observe(counter);

// ============================

// UTILITY FUNCTIONS                    const counters = entry.target.querySelectorAll('.stat-number');    });

// ============================

function throttle(func, limit) {                    counters.forEach(counter => {}

    let inThrottle;

    return function() {                        if (counter.startAnimation) {

        const args = arguments;

        const context = this;                            counter.startAnimation();function animateCounter(element) {

        if (!inThrottle) {

            func.apply(context, args);                        }    const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));

            inThrottle = true;

            setTimeout(() => inThrottle = false, limit);                    });    const duration = 2000;

        }

    }                }    const step = target / (duration / 16);

}

                    let current = 0;

function scrollToSection(sectionId) {

    const element = document.getElementById(sectionId);                // Add staggered animations for service cards    

    if (element) {

        smoothScrollToElement(element);                if (entry.target.classList.contains('services-grid')) {    const timer = setInterval(() => {

    }

}                    const cards = entry.target.querySelectorAll('.service-card');        current += step;



// Export global functions                    cards.forEach((card, index) => {        if (current >= target) {

window.openBookingModal = openBookingModal;

window.closeBookingModal = closeBookingModal;                        setTimeout(() => {            current = target;

window.openServiceModal = openServiceModal;

window.scrollToSection = scrollToSection;                            card.style.opacity = '1';            clearInterval(timer);



console.log('✨ Elite Auto Repair - Premium JavaScript Loaded Successfully!');                            card.style.transform = 'translateY(0)';        }

                        }, index * 100);        

                    });        const suffix = element.textContent.match(/[^0-9]+$/)?.[0] || '';

                }        element.textContent = Math.floor(current) + suffix;

                    }, 16);

                // Add staggered animations for testimonial cards}

                if (entry.target.classList.contains('testimonials-grid')) {

                    const cards = entry.target.querySelectorAll('.testimonial-card');// ===== ADVANCED INTERACTIONS =====

                    cards.forEach((card, index) => {function initializeAdvancedInteractions() {

                        setTimeout(() => {    // 3D tilt effect for cards

                            card.style.opacity = '1';    initializeTiltEffects();

                            card.style.transform = 'translateY(0)';    

                        }, index * 150);    // Advanced hover effects

                    });    initializeHoverEffects();

                }    

            }    // Magnetic buttons

        });    initializeMagneticButtons();

    }, observerOptions);}

    

    // Observe elementsfunction initializeTiltEffects() {

    const elementsToObserve = document.querySelectorAll([    const tiltElements = document.querySelectorAll('.service-card, .testimonial-card');

        '.hero-stats',    

        '.services-grid',    tiltElements.forEach(element => {

        '.testimonials-grid',        element.addEventListener('mousemove', (e) => {

        '.about-content',            const rect = element.getBoundingClientRect();

        '.contact-content',            const x = e.clientX - rect.left;

        '.service-card',            const y = e.clientY - rect.top;

        '.testimonial-card'            

    ].join(','));            const centerX = rect.width / 2;

                const centerY = rect.height / 2;

    elementsToObserve.forEach(el => observer.observe(el));            

}            const rotateX = (y - centerY) / 10;

            const rotateY = (centerX - x) / 10;

// ============================            

// SMOOTH SCROLLING            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

// ============================        });

function initializeSmoothScrolling() {        

    // Smooth scroll for all anchor links        element.addEventListener('mouseleave', () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

        anchor.addEventListener('click', function (e) {        });

            e.preventDefault();    });

            const target = document.querySelector(this.getAttribute('href'));}

            if (target) {

                smoothScrollToElement(target);function initializeHoverEffects() {

            }    // Advanced ripple effect

        });    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {

    });        button.addEventListener('click', function(e) {

}            const rect = this.getBoundingClientRect();

            const ripple = document.createElement('span');

// Premium smooth scroll function            const size = Math.max(rect.width, rect.height);

function smoothScrollToElement(target, duration = 1200, offset = 90) {            const x = e.clientX - rect.left - size / 2;

    const targetPosition = target.offsetTop - offset;            const y = e.clientY - rect.top - size / 2;

    const startPosition = window.pageYOffset;            

    const distance = targetPosition - startPosition;            ripple.style.width = ripple.style.height = size + 'px';

    let startTime = null;            ripple.style.left = x + 'px';

                ripple.style.top = y + 'px';

    function animation(currentTime) {            ripple.classList.add('ripple');

        if (startTime === null) startTime = currentTime;            

        const timeElapsed = currentTime - startTime;            this.appendChild(ripple);

        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);            

        window.scrollTo(0, run);            setTimeout(() => {

        if (timeElapsed < duration) requestAnimationFrame(animation);                ripple.remove();

    }            }, 600);

            });

    function easeInOutCubic(t, b, c, d) {    });

        t /= d / 2;}

        if (t < 1) return c / 2 * t * t * t + b;

        t -= 2;function initializeMagneticButtons() {

        return c / 2 * (t * t * t + 2) + b;    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .cta-button');

    }    

        magneticElements.forEach(element => {

    requestAnimationFrame(animation);        element.addEventListener('mousemove', (e) => {

}            const rect = element.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;

// ============================            const y = e.clientY - rect.top - rect.height / 2;

// SERVICE CARDS INTERACTIONS            

// ============================            element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;

function initializeServiceCards() {        });

    const serviceCards = document.querySelectorAll('.service-card');        

            element.addEventListener('mouseleave', () => {

    serviceCards.forEach((card, index) => {            element.style.transform = 'translate(0px, 0px)';

        // Add premium hover effects        });

        card.addEventListener('mouseenter', function() {    });

            this.style.transform = 'translateY(-15px) scale(1.02)';}

            this.style.zIndex = '10';

            // ===== BOOKING MODAL =====

            // Add glow effectfunction openBookingModal() {

            this.style.boxShadow = '0 25px 50px rgba(212, 175, 55, 0.4)';    const modal = document.getElementById('bookingModal');

                if (modal) {

            // Animate icon        modal.style.display = 'block';

            const icon = this.querySelector('.service-icon');        document.body.style.overflow = 'hidden';

            if (icon) {        

                icon.style.transform = 'scale(1.1) rotate(5deg)';        // Add click outside to close

            }        setTimeout(() => {

        });            modal.addEventListener('click', function(e) {

                        if (e.target === modal) {

        card.addEventListener('mouseleave', function() {                    closeBookingModal();

            this.style.transform = '';                }

            this.style.zIndex = '';            });

            this.style.boxShadow = '';        }, 100);

                }

            // Reset icon}

            const icon = this.querySelector('.service-icon');

            if (icon) {function closeBookingModal() {

                icon.style.transform = '';    const modal = document.getElementById('bookingModal');

            }    if (modal) {

        });        modal.style.display = 'none';

                document.body.style.overflow = 'auto';

        // Add click ripple effect    }

        card.addEventListener('click', function(e) {}

            const ripple = document.createElement('div');

            const rect = this.getBoundingClientRect();// ===== SERVICE MODALS =====

            const size = 60;function openServiceModal(serviceType) {

            const x = e.clientX - rect.left - size / 2;    const serviceInfo = {

            const y = e.clientY - rect.top - size / 2;        brake: {

                        title: 'Brake System Services',

            ripple.style.cssText = `            description: 'Our comprehensive brake services ensure your safety on the road with precision diagnostics and premium parts.',

                position: absolute;            features: [

                width: ${size}px;                'Complete brake system inspection',

                height: ${size}px;                'Brake pad and rotor replacement',

                border-radius: 50%;                'Brake fluid flush and replacement',

                background: rgba(212, 175, 55, 0.6);                'ABS system diagnostics',

                transform: scale(0);                'Emergency brake adjustment',

                animation: ripple 0.6s linear;                'Brake line inspection and repair'

                left: ${x}px;            ],

                top: ${y}px;            pricing: 'Starting at $89 - Free inspection with service'

                pointer-events: none;        },

            `;        oil: {

                        title: 'Premium Oil Change Services',

            this.appendChild(ripple);            description: 'Keep your engine running smoothly with our professional oil change services using premium synthetic oils.',

                        features: [

            setTimeout(() => {                'Full synthetic oil options',

                ripple.remove();                'Conventional and blend oils available',

            }, 600);                'Oil filter replacement',

        });                '15-point vehicle inspection',

    });                'Fluid level checks and top-offs',

                    'Battery and belts inspection'

    // Add CSS for ripple animation            ],

    if (!document.querySelector('#ripple-styles')) {            pricing: 'Starting at $49 - Includes multi-point inspection'

        const style = document.createElement('style');        },

        style.id = 'ripple-styles';        tire: {

        style.textContent = `            title: 'Complete Tire Services',

            @keyframes ripple {            description: 'Professional tire services from installation to repair, ensuring optimal performance and safety.',

                to {            features: [

                    transform: scale(4);                'Tire installation and balancing',

                    opacity: 0;                'Wheel alignment service',

                }                'Tire rotation and inspection',

            }                'Flat tire repair',

        `;                'TPMS sensor service',

        document.head.appendChild(style);                'Tire pressure optimization'

    }            ],

}            pricing: 'Starting at $129 - Free tire inspection'

        },

// ============================        engine: {

// FORM VALIDATION & HANDLING            title: 'Engine Diagnostics & Repair',

// ============================            description: 'Advanced computer diagnostics and engine services to keep your vehicle running at peak performance.',

function initializeFormValidation() {            features: [

    const contactForm = document.getElementById('contactForm');                'Computer diagnostic scanning',

                    'Check engine light diagnosis',

    if (contactForm) {                'Performance optimization',

        contactForm.addEventListener('submit', handleFormSubmit);                'Emissions testing and repair',

                        'Tune-up services',

        // Real-time validation                'Engine repair and maintenance'

        const inputs = contactForm.querySelectorAll('input, textarea, select');            ],

        inputs.forEach(input => {            pricing: 'Starting at $149 - Includes comprehensive diagnostic report'

            input.addEventListener('blur', validateField);        },

            input.addEventListener('input', clearFieldError);        electrical: {

        });            title: 'Electrical System Services',

    }            description: 'Complete electrical system diagnosis and repair for all your vehicle\'s electrical components.',

}            features: [

                'Battery testing and replacement',

function handleFormSubmit(e) {                'Alternator diagnosis and repair',

    e.preventDefault();                'Starter motor service',

                    'Electrical wiring inspection',

    const form = e.target;                'Fuse and relay replacement',

    const formData = new FormData(form);                'Lighting system repair'

    const submitBtn = form.querySelector('button[type="submit"]');            ],

                pricing: 'Starting at $99 - Free electrical system check'

    // Validate all fields        },

    if (!validateForm(form)) {        climate: {

        showNotification('Please fill in all required fields correctly.', 'error');            title: 'Climate Control Services',

        return;            description: 'Stay comfortable year-round with our professional A/C and heating system services.',

    }            features: [

                    'A/C system recharge',

    // Show loading state                'Compressor diagnosis and repair',

    submitBtn.textContent = 'Sending...';                'Heating system service',

    submitBtn.disabled = true;                'Cabin air filter replacement',

    form.classList.add('loading');                'Refrigerant leak detection',

                    'Climate control diagnostics'

    // Simulate form submission (replace with actual API call)            ],

    setTimeout(() => {            pricing: 'Starting at $119 - Includes system performance test'

        // Reset form        }

        form.reset();    };

        form.classList.remove('loading');    

        form.classList.add('success');    const service = serviceInfo[serviceType];

            if (service) {

        // Reset button        // Create and show service modal (simplified for this example)

        submitBtn.textContent = 'Message Sent!';        alert(`${service.title}\n\n${service.description}\n\n${service.pricing}\n\nCall (631) 555-0923 to schedule your service!`);

        submitBtn.style.background = '#10b981';    }

        }

        // Show success notification

        showNotification('Thank you! Your message has been sent successfully.', 'success');// ===== FORM VALIDATION =====

        function initializeFormValidation() {

        // Reset after delay    const contactForm = document.getElementById('contactForm');

        setTimeout(() => {    

            submitBtn.textContent = 'Send Request';    if (contactForm) {

            submitBtn.disabled = false;        // Add input animation effects

            submitBtn.style.background = '';        const inputs = contactForm.querySelectorAll('input, select, textarea');

            form.classList.remove('success');        inputs.forEach(input => {

        }, 3000);            input.addEventListener('focus', function() {

                        this.parentElement.classList.add('focused');

    }, 2000);            });

}            

            input.addEventListener('blur', function() {

function validateForm(form) {                if (!this.value) {

    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');                    this.parentElement.classList.remove('focused');

    let isValid = true;                }

                });

    inputs.forEach(input => {            

        if (!validateField({ target: input })) {            // Initialize labels for pre-filled inputs

            isValid = false;            if (input.value) {

        }                input.parentElement.classList.add('focused');

    });            }

            });

    return isValid;        

}        contactForm.addEventListener('submit', handleFormSubmission);

    }

function validateField(e) {}

    const field = e.target;

    const value = field.value.trim();function handleFormSubmission(e) {

    let isValid = true;    e.preventDefault();

    let errorMessage = '';    

        const formData = new FormData(e.target);

    // Required field validation    const formObject = Object.fromEntries(formData);

    if (field.hasAttribute('required') && !value) {    

        isValid = false;    // Basic validation

        errorMessage = 'This field is required';    if (!validateForm(formObject)) {

    }        return;

        }

    // Email validation    

    if (field.type === 'email' && value) {    // Show success message

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    showNotification('Thank you! Your service request has been submitted. We\'ll contact you within 24 hours.', 'success');

        if (!emailRegex.test(value)) {    

            isValid = false;    // Reset form

            errorMessage = 'Please enter a valid email address';    e.target.reset();

        }    

    }    // Remove focused class from form groups

        document.querySelectorAll('.form-group').forEach(group => {

    // Phone validation        group.classList.remove('focused');

    if (field.type === 'tel' && value) {    });

        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;}

        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {

            isValid = false;function validateForm(formData) {

            errorMessage = 'Please enter a valid phone number';    const errors = [];

        }    

    }    if (!formData.name || formData.name.length < 2) {

            errors.push('Please enter a valid name');

    // Show/hide error    }

    if (!isValid) {    

        showFieldError(field, errorMessage);    if (!formData.email || !isValidEmail(formData.email)) {

    } else {        errors.push('Please enter a valid email address');

        clearFieldError({ target: field });    }

    }    

        if (!formData.phone || formData.phone.length < 10) {

    return isValid;        errors.push('Please enter a valid phone number');

}    }

    

function showFieldError(field, message) {    if (!formData.service) {

    field.classList.add('error');        errors.push('Please select a service');

        }

    let errorElement = field.parentNode.querySelector('.error-message');    

    if (!errorElement) {    if (errors.length > 0) {

        errorElement = document.createElement('div');        showNotification(errors.join('\n'), 'error');

        errorElement.className = 'error-message';        return false;

        errorElement.style.cssText = `    }

            color: #ef4444;    

            font-size: 0.875rem;    return true;

            margin-top: 0.5rem;}

        `;

        field.parentNode.appendChild(errorElement);function isValidEmail(email) {

    }    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email);

    errorElement.textContent = message;}

}

// ===== NOTIFICATIONS =====

function clearFieldError(e) {function showNotification(message, type = 'info') {

    const field = e.target;    // Create notification element

    field.classList.remove('error');    const notification = document.createElement('div');

        notification.className = `notification notification-${type}`;

    const errorElement = field.parentNode.querySelector('.error-message');    notification.innerHTML = `

    if (errorElement) {        <div class="notification-content">

        errorElement.remove();            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>

    }            <span>${message}</span>

}        </div>

        <button class="notification-close" onclick="this.parentElement.remove()">

// ============================            <i class="fas fa-times"></i>

// MODAL SYSTEM        </button>

// ============================    `;

function initializeModals() {    

    // Get modal elements    // Add styles

    const bookingModal = document.getElementById('bookingModal');    notification.style.cssText = `

            position: fixed;

    // Close modal when clicking outside        top: 100px;

    window.addEventListener('click', function(e) {        right: 20px;

        if (e.target.classList.contains('modal')) {        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};

            closeModal(e.target);        color: white;

        }        padding: 1rem 1.5rem;

    });        border-radius: 8px;

            box-shadow: 0 10px 30px rgba(0,0,0,0.2);

    // Close modal with escape key        z-index: 3000;

    window.addEventListener('keydown', function(e) {        max-width: 400px;

        if (e.key === 'Escape') {        animation: slideInRight 0.3s ease-out;

            const openModal = document.querySelector('.modal[style*="block"]');        display: flex;

            if (openModal) {        align-items: center;

                closeModal(openModal);        gap: 1rem;

            }    `;

        }    

    });    document.body.appendChild(notification);

}    

    // Auto remove after 5 seconds

// Open booking modal    setTimeout(() => {

function openBookingModal() {        if (notification.parentElement) {

    const modal = document.getElementById('bookingModal');            notification.style.animation = 'slideOutRight 0.3s ease-out';

    if (modal) {            setTimeout(() => {

        modal.style.display = 'block';                notification.remove();

        document.body.style.overflow = 'hidden';            }, 300);

                }

        // Animate modal in    }, 5000);

        setTimeout(() => {}

            modal.querySelector('.modal-content').style.transform = 'scale(1)';

            modal.querySelector('.modal-content').style.opacity = '1';// ===== PERFORMANCE OPTIMIZATIONS =====

        }, 10);// Throttle scroll events

    }function throttle(func, wait) {

}    let timeout;

    return function executedFunction(...args) {

// Close booking modal        const later = () => {

function closeBookingModal() {            clearTimeout(timeout);

    const modal = document.getElementById('bookingModal');            func(...args);

    closeModal(modal);        };

}        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

// Generic close modal function    };

function closeModal(modal) {}

    if (modal) {

        modal.style.display = 'none';// Apply throttling to scroll events

        document.body.style.overflow = '';window.addEventListener('scroll', throttle(() => {

    }    updateActiveNavLink();

}}, 100));



// Open service modal (placeholder)// ===== LEGACY SUPPORT =====

function openServiceModal(serviceType) {// Fallback for older browsers

    showNotification(`Learn more about our ${serviceType} services!`, 'info');function bookNow() {

    // Here you would typically open a detailed service modal    openBookingModal();

}}



// ============================// ===== PERFORMANCE MONITORING =====

// LOADING STATESfunction initializePerformanceMonitoring() {

// ============================    // Monitor FPS

function initializeLoadingStates() {    let fps = 0;

    // Add initial loading styles    let lastTime = performance.now();

    const style = document.createElement('style');    

    style.textContent = `    function countFPS() {

        body:not(.loaded) .hero-title,        const currentTime = performance.now();

        body:not(.loaded) .hero-description,        fps = Math.round(1000 / (currentTime - lastTime));

        body:not(.loaded) .hero-buttons,        lastTime = currentTime;

        body:not(.loaded) .hero-stats {        requestAnimationFrame(countFPS);

            opacity: 0;    }

            transform: translateY(30px);    countFPS();

            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);    

        }    // Log performance metrics

            window.addEventListener('load', () => {

        .service-card,        const perfData = performance.getEntriesByType('navigation')[0];

        .testimonial-card {        console.log('🚀 Elite Auto Repair - Performance Metrics:');

            opacity: 0;        console.log(`⚡ Page Load: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);

            transform: translateY(30px);        console.log(`🎨 DOM Ready: ${Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart)}ms`);

            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);        console.log(`📊 Current FPS: ${fps}`);

        }    });

    `;}

    document.head.appendChild(style);

}// ===== ENTERPRISE ANIMATIONS & EFFECTS =====

const enterpriseStyles = document.createElement('style');

// ============================enterpriseStyles.textContent = `

// NOTIFICATION SYSTEM    /* Custom Cursor */

// ============================    .custom-cursor {

function showNotification(message, type = 'info') {        position: fixed;

    const notification = document.createElement('div');        width: 10px;

    notification.className = `notification notification-${type}`;        height: 10px;

    notification.style.cssText = `        background: var(--primary-red);

        position: fixed;        border-radius: 50%;

        top: 20px;        pointer-events: none;

        right: 20px;        z-index: 9999;

        padding: 1rem 1.5rem;        mix-blend-mode: difference;

        border-radius: 12px;        transition: transform 0.1s ease;

        color: white;    }

        font-weight: 600;    

        z-index: 10000;    .custom-cursor-follower {

        transform: translateX(400px);        position: fixed;

        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);        width: 40px;

        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);        height: 40px;

        backdrop-filter: blur(10px);        border: 2px solid var(--primary-red);

    `;        border-radius: 50%;

            pointer-events: none;

    // Set colors based on type        z-index: 9998;

    switch (type) {        opacity: 0.5;

        case 'success':    }

            notification.style.background = 'linear-gradient(135deg, #10b981, #059669)';    

            break;    .custom-cursor.cursor-hover {

        case 'error':        transform: scale(2);

            notification.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';        background: var(--accent-gold);

            break;    }

        case 'info':    

        default:    .custom-cursor-follower.cursor-hover {

            notification.style.background = 'linear-gradient(135deg, #3b82f6, #2563eb)';        transform: scale(1.5);

    }        border-color: var(--accent-gold);

        }

    notification.textContent = message;    

    document.body.appendChild(notification);    /* Advanced Animations */

        .fade-in-up {

    // Animate in        opacity: 0;

    setTimeout(() => {        transform: translateY(30px);

        notification.style.transform = 'translateX(0)';        animation: fadeInUp 0.8s ease-out forwards;

    }, 10);    }

        

    // Auto remove    .char-animate {

    setTimeout(() => {        display: inline-block;

        notification.style.transform = 'translateX(400px)';        opacity: 0;

        setTimeout(() => {        transform: translateY(20px);

            notification.remove();        animation: charFadeIn 0.5s ease-out forwards;

        }, 400);    }

    }, 5000);    

}    @keyframes charFadeIn {

        to {

// ============================            opacity: 1;

// SCROLL TO SECTION (Legacy Support)            transform: translateY(0);

// ============================        }

function scrollToSection(sectionId) {    }

    const element = document.getElementById(sectionId);    

    if (element) {    .floating {

        smoothScrollToElement(element);        animation: floating 3s ease-in-out infinite;

    }    }

}    

    @keyframes floating {

// ============================        0%, 100% { transform: translateY(0px); }

// UTILITY FUNCTIONS        50% { transform: translateY(-10px); }

// ============================    }

    

// Throttle function for performance    /* Ripple Effect */

function throttle(func, limit) {    .ripple {

    let inThrottle;        position: absolute;

    return function() {        border-radius: 50%;

        const args = arguments;        background: rgba(255, 255, 255, 0.6);

        const context = this;        transform: scale(0);

        if (!inThrottle) {        animation: rippleAnimation 0.6s linear;

            func.apply(context, args);        pointer-events: none;

            inThrottle = true;    }

            setTimeout(() => inThrottle = false, limit);    

        }    @keyframes rippleAnimation {

    }        to {

}            transform: scale(4);

            opacity: 0;

// Debounce function for performance        }

function debounce(func, wait) {    }

    let timeout;    

    return function executedFunction(...args) {    /* Advanced Hover States */

        const later = () => {    .service-card {

            clearTimeout(timeout);        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

            func(...args);    }

        };    

        clearTimeout(timeout);    .service-card:hover {

        timeout = setTimeout(later, wait);        transform: translateY(-15px) scale(1.02);

    };        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);

}    }

    

// Check if element is in viewport    /* Scroll Animations */

function isInViewport(element) {    .animate-in {

    const rect = element.getBoundingClientRect();        animation: slideInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;

    return (    }

        rect.top >= 0 &&    

        rect.left >= 0 &&    @keyframes slideInUp {

        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&        from {

        rect.right <= (window.innerWidth || document.documentElement.clientWidth)            opacity: 0;

    );            transform: translateY(50px) scale(0.9);

}        }

        to {

// ============================            opacity: 1;

// PREMIUM PERFORMANCE MONITORING            transform: translateY(0) scale(1);

// ============================        }

function initializePerformanceMonitoring() {    }

    // Monitor page load performance    

    window.addEventListener('load', () => {    /* Glass Morphism Effects */

        setTimeout(() => {    .glass {

            const perfData = performance.getEntriesByType('navigation')[0];        background: rgba(255, 255, 255, 0.1);

            console.log('🚀 Performance Metrics:', {        backdrop-filter: blur(20px);

                pageLoad: `${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`,        border: 1px solid rgba(255, 255, 255, 0.2);

                domReady: `${Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart)}ms`,    }

                firstPaint: `${Math.round(performance.getEntriesByName('first-paint')[0]?.startTime || 0)}ms`    

            });    /* Advanced Gradients */

        }, 100);    .gradient-text {

    });        background: linear-gradient(135deg, var(--primary-red), var(--accent-gold));

}        -webkit-background-clip: text;

        -webkit-text-fill-color: transparent;

// Initialize performance monitoring        background-clip: text;

initializePerformanceMonitoring();    }

    

// ============================    /* Loading Optimizations */

// EXPORT FUNCTIONS (for external use)    * {

// ============================        transform: translateZ(0);

window.EliteAutoRepair = {        backface-visibility: hidden;

    openBookingModal,    }

    closeBookingModal,    

    openServiceModal,    /* Notification Styles */

    scrollToSection,    @keyframes slideInRight {

    showNotification,        from {

    smoothScrollToElement            transform: translateX(100%);

};            opacity: 0;

        }

console.log('✨ Elite Auto Repair - Premium JavaScript Loaded Successfully!');        to {
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
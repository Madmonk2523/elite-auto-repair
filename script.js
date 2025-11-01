// ============================// ============================// ===== GLOBAL VARIABLES =====

// ELITE AUTO REPAIR - PREMIUM JAVASCRIPT

// $10,000 Professional Website// ELITE AUTO REPAIR - PREMIUM JAVASCRIPTlet isLoading = true;

// ============================

// $10,000 Professional Interactivitylet currentSection = 'home';

// Global Variables

let isLoading = false;// ============================

let currentSection = 'home';

// ===== DOM CONTENT LOADED =====

// DOM Content Loaded - Initialize Everything

document.addEventListener('DOMContentLoaded', function() {// Global Variablesdocument.addEventListener('DOMContentLoaded', function() {

    console.log('🚀 Elite Auto Repair - Loading Premium Website...');

    initializeWebsite();let isLoading = false;    initializeWebsite();

});

let currentSection = 'home';});

// ============================

// MAIN INITIALIZATIONlet scrollPosition = 0;

// ============================

function initializeWebsite() {let isScrolling = false;// ===== ENTERPRISE WEBSITE INITIALIZATION =====

    // Initialize all components

    initializeNavigation();function initializeWebsite() {

    initializeMobileMenu();

    initializeHeroAnimations();// DOM Content Loaded - Initialize Everything    // Instant load - no loading screen delay

    initializeScrollEffects();

    initializeCounterAnimations();document.addEventListener('DOMContentLoaded', function() {    isLoading = false;

    initializeIntersectionObserver();

    initializeFormValidation();    initializeWebsite();    

    initializeModals();

    initializeSmoothScrolling();});    // Initialize all enterprise components

    initializeServiceCards();

        initializeNavigation();

    // Mark as loaded

    setTimeout(() => {// ============================    initializeAdvancedScrollEffects();

        document.body.classList.add('loaded');

        console.log('✨ Website fully loaded and animated!');// MAIN INITIALIZATION    initializeFormValidation();

    }, 500);

}// ============================    initializeMobileMenu();



// ============================function initializeWebsite() {    initializeAdvancedAnimations();

// NAVIGATION SYSTEM

// ============================    console.log('🚀 Elite Auto Repair - Premium Website Loading...');    initializeParallaxEffects();

function initializeNavigation() {

    const navbar = document.getElementById('navbar');        initializeIntersectionObservers();

    const navLinks = document.querySelectorAll('.nav-link');

        // Initialize all components    initializeCounterAnimations();

    if (!navbar) return;

        initializeNavigation();    initializeAdvancedInteractions();

    // Navbar scroll effect

    window.addEventListener('scroll', throttle(() => {    initializeMobileMenu();    

        const scrollY = window.scrollY;

            initializeHeroAnimations();    // Enterprise smooth scrolling with easing

        if (scrollY > 50) {

            navbar.classList.add('scrolled');    initializeScrollEffects();    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        } else {

            navbar.classList.remove('scrolled');    initializeCounterAnimations();        anchor.addEventListener('click', function (e) {

        }

            initializeIntersectionObserver();            e.preventDefault();

        updateActiveNavLink();

    }, 10));    initializeFormValidation();            const target = document.querySelector(this.getAttribute('href'));

    

    // Navigation click handlers    initializeModals();            if (target) {

    navLinks.forEach(link => {

        link.addEventListener('click', function(e) {    initializeSmoothScrolling();                smoothScrollTo(target, 800);

            e.preventDefault();

                initializeLoadingStates();            }

            // Remove active from all

            navLinks.forEach(l => l.classList.remove('active'));    initializeServiceCards();        });

            

            // Add active to clicked        });

            this.classList.add('active');

                // Add premium loading effect    

            // Smooth scroll to target

            const targetId = this.getAttribute('href');    setTimeout(() => {    // Initialize performance monitoring

            const targetElement = document.querySelector(targetId);

                    document.body.classList.add('loaded');    initializePerformanceMonitoring();

            if (targetElement) {

                smoothScrollToElement(targetElement);        console.log('✨ Website fully loaded and animated');}

            }

        });    }, 500);

    });

}}// ===== ADVANCED SMOOTH SCROLLING =====



// Update active nav link based on scroll positionfunction smoothScrollTo(target, duration = 1000) {

function updateActiveNavLink() {

    const sections = document.querySelectorAll('section[id]');// ============================    const targetPosition = target.offsetTop - 90; // Account for fixed navbar

    const navLinks = document.querySelectorAll('.nav-link');

    // NAVIGATION SYSTEM    const startPosition = window.pageYOffset;

    let current = '';

    const scrollPos = window.scrollY + 100;// ============================    const distance = targetPosition - startPosition;

    

    sections.forEach(section => {function initializeNavigation() {    let startTime = null;

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;    const navbar = document.getElementById('navbar');

        

        if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {    const navLinks = document.querySelectorAll('.nav-link');    function animation(currentTime) {

            current = section.getAttribute('id');

        }            if (startTime === null) startTime = currentTime;

    });

        // Navbar scroll effect with premium animations        const timeElapsed = currentTime - startTime;

    // Update nav links

    navLinks.forEach(link => {    window.addEventListener('scroll', throttle(() => {        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${current}`) {        const scrollY = window.scrollY;        window.scrollTo(0, run);

            link.classList.add('active');

        }                if (timeElapsed < duration) requestAnimationFrame(animation);

    });

}        // Add/remove scrolled class with smooth transition    }



// ============================        if (scrollY > 50) {

// MOBILE MENU

// ============================            navbar.classList.add('scrolled');    function easeInOutCubic(t, b, c, d) {

function initializeMobileMenu() {

    const hamburger = document.getElementById('hamburger');        } else {        t /= d / 2;

    const mobileMenu = document.getElementById('mobile-menu');

    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');            navbar.classList.remove('scrolled');        if (t < 1) return c / 2 * t * t * t + b;

    

    if (!hamburger || !mobileMenu) return;        }        t -= 2;

    

    // Toggle mobile menu                return c / 2 * (t * t * t + 2) + b;

    hamburger.addEventListener('click', function() {

        hamburger.classList.toggle('active');        // Update active navigation link    }

        mobileMenu.classList.toggle('active');

        document.body.classList.toggle('menu-open');        updateActiveNavLink();

        

        // Animate hamburger            requestAnimationFrame(animation);

        const spans = hamburger.querySelectorAll('span');

        if (hamburger.classList.contains('active')) {        // Premium parallax effect for navbar}

            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';

            spans[1].style.opacity = '0';        if (scrollY < window.innerHeight) {

            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';

        } else {            navbar.style.transform = `translateY(${scrollY * 0.1}px)`;// ===== NAVIGATION =====

            spans[0].style.transform = '';

            spans[1].style.opacity = '';        }function initializeNavigation() {

            spans[2].style.transform = '';

        }    }, 10));    const navbar = document.getElementById('navbar');

    });

            const navLinks = document.querySelectorAll('.nav-link');

    // Close menu on link click

    mobileNavLinks.forEach(link => {    // Active nav link highlighting with premium effects    

        link.addEventListener('click', function() {

            hamburger.classList.remove('active');    navLinks.forEach((link, index) => {    // Navbar scroll effect

            mobileMenu.classList.remove('active');

            document.body.classList.remove('menu-open');        link.addEventListener('click', function(e) {    window.addEventListener('scroll', () => {

            

            const spans = hamburger.querySelectorAll('span');            e.preventDefault();        if (window.scrollY > 100) {

            spans[0].style.transform = '';

            spans[1].style.opacity = '';                        navbar.classList.add('scrolled');

            spans[2].style.transform = '';

        });            // Remove active class from all links        } else {

    });

}            navLinks.forEach(l => l.classList.remove('active'));            navbar.classList.remove('scrolled');



// ============================                    }

// HERO ANIMATIONS

// ============================            // Add active class to clicked link        

function initializeHeroAnimations() {

    // Add loading state styles            this.classList.add('active');        // Update active nav link

    const style = document.createElement('style');

    style.textContent = `                    updateActiveNavLink();

        body:not(.loaded) .hero-title,

        body:not(.loaded) .hero-description,            // Smooth scroll to target section    });

        body:not(.loaded) .hero-buttons,

        body:not(.loaded) .hero-stats {            const targetId = this.getAttribute('href');    

            opacity: 0;

            transform: translateY(30px);            const targetElement = document.querySelector(targetId);    // Active nav link highlighting

            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

        }                navLinks.forEach(link => {

    `;

    document.head.appendChild(style);            if (targetElement) {        link.addEventListener('click', function() {

    

    // Animate hero elements on load                smoothScrollToElement(targetElement);            navLinks.forEach(l => l.classList.remove('active'));

    const heroTitle = document.querySelector('.hero-title');

    const heroDescription = document.querySelector('.hero-description');            }            this.classList.add('active');

    const heroButtons = document.querySelector('.hero-buttons');

    const heroStats = document.querySelector('.hero-stats');        });        });

    

    setTimeout(() => {            });

        if (heroTitle) {

            heroTitle.style.opacity = '1';        // Add premium hover effects with delays}

            heroTitle.style.transform = 'translateY(0)';

        }        link.addEventListener('mouseenter', function() {

    }, 300);

                this.style.transform = 'translateY(-2px) scale(1.05)';function updateActiveNavLink() {

    setTimeout(() => {

        if (heroDescription) {            this.style.boxShadow = '0 10px 25px rgba(212, 175, 55, 0.3)';    const sections = document.querySelectorAll('section[id]');

            heroDescription.style.opacity = '1';

            heroDescription.style.transform = 'translateY(0)';        });    const navLinks = document.querySelectorAll('.nav-link');

        }

    }, 600);            

    

    setTimeout(() => {        link.addEventListener('mouseleave', function() {    let current = '';

        if (heroButtons) {

            heroButtons.style.opacity = '1';            if (!this.classList.contains('active')) {    

            heroButtons.style.transform = 'translateY(0)';

        }                this.style.transform = '';    sections.forEach(section => {

    }, 900);

                    this.style.boxShadow = '';        const sectionTop = section.offsetTop;

    setTimeout(() => {

        if (heroStats) {            }        const sectionHeight = section.clientHeight;

            heroStats.style.opacity = '1';

            heroStats.style.transform = 'translateY(0)';        });        if (window.scrollY >= (sectionTop - 200)) {

            // Start counter animations

            startCounterAnimations();    });            current = section.getAttribute('id');

        }

    }, 1200);}        }

}

    });

// ============================

// COUNTER ANIMATIONS// Update active nav link based on scroll position    

// ============================

function initializeCounterAnimations() {function updateActiveNavLink() {    navLinks.forEach(link => {

    const counters = document.querySelectorAll('.stat-number');

        const sections = document.querySelectorAll('section[id]');        link.classList.remove('active');

    counters.forEach(counter => {

        const target = parseInt(counter.getAttribute('data-count')) || parseInt(counter.textContent) || 0;    const navLinks = document.querySelectorAll('.nav-link');        if (link.getAttribute('href') === `#${current}`) {

        

        if (target === 0) return;                link.classList.add('active');

        

        // Store original value and target    let current = '';        }

        counter.originalValue = target;

        counter.currentValue = 0;    const scrollPos = window.scrollY + 100;    });

        

        const animateCounter = () => {    }

            const increment = target / 60; // 60 frames for smooth animation

                sections.forEach(section => {

            const updateCounter = () => {

                if (counter.currentValue < target) {        const sectionTop = section.offsetTop;// ===== MOBILE MENU =====

                    counter.currentValue += increment;

                    counter.textContent = Math.ceil(counter.currentValue);        const sectionHeight = section.clientHeight;function initializeMobileMenu() {

                    requestAnimationFrame(updateCounter);

                } else {            const hamburger = document.getElementById('hamburger');

                    counter.textContent = target;

                }        if (scrollPos >= sectionTop && scrollPos <= sectionTop + sectionHeight) {    const navMenu = document.getElementById('nav-menu');

            };

                        current = section.getAttribute('id');    

            // Reset and start

            counter.currentValue = 0;        }    if (hamburger && navMenu) {

            counter.textContent = '0';

            updateCounter();    });        hamburger.addEventListener('click', () => {

        };

                        hamburger.classList.toggle('active');

        // Store animation function

        counter.animate = animateCounter;    // Update nav links            navMenu.classList.toggle('active');

    });

}    navLinks.forEach(link => {        });



function startCounterAnimations() {        link.classList.remove('active');        

    const counters = document.querySelectorAll('.stat-number');

    counters.forEach((counter, index) => {        if (link.getAttribute('href') === `#${current}`) {        // Close mobile menu when clicking on a link

        if (counter.animate) {

            setTimeout(() => {            link.classList.add('active');        document.querySelectorAll('.nav-link').forEach(link => {

                counter.animate();

            }, index * 200); // Stagger animations        }            link.addEventListener('click', () => {

        }

    });    });                hamburger.classList.remove('active');

}

}                navMenu.classList.remove('active');

// ============================

// SCROLL EFFECTS            });

// ============================

function initializeScrollEffects() {// ============================        });

    window.addEventListener('scroll', throttle(() => {

        const scrollY = window.scrollY;// MOBILE NAVIGATION    }

        

        // Update scroll progress// ============================}

        updateScrollProgress();

        function initializeMobileMenu() {

        // Parallax effects

        const heroBackground = document.querySelector('.hero-background');    const hamburger = document.getElementById('hamburger');// ===== SMOOTH SCROLLING =====

        if (heroBackground && scrollY < window.innerHeight) {

            heroBackground.style.transform = `translateY(${scrollY * 0.3}px)`;    const mobileMenu = document.getElementById('mobile-menu');function scrollToSection(sectionId) {

        }

    }, 10));    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');    const element = document.getElementById(sectionId);

}

        if (element) {

// Update scroll progress bar

function updateScrollProgress() {    if (!hamburger || !mobileMenu) return;        const offsetTop = element.offsetTop - 80; // Account for fixed navbar

    const scrollProgress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

                window.scrollTo({

    let progressBar = document.querySelector('.scroll-progress');

    if (!progressBar) {    // Toggle mobile menu            top: offsetTop,

        progressBar = document.createElement('div');

        progressBar.className = 'scroll-progress';    hamburger.addEventListener('click', function() {            behavior: 'smooth'

        progressBar.style.cssText = `

            position: fixed;        hamburger.classList.toggle('active');        });

            top: 0;

            left: 0;        mobileMenu.classList.toggle('active');    }

            width: 0%;

            height: 4px;        document.body.classList.toggle('menu-open');}

            background: linear-gradient(90deg, #D4AF37, #FFD700);

            z-index: 9999;        

            transition: width 0.3s ease;

        `;        // Animate hamburger// ===== ADVANCED SCROLL EFFECTS =====

        document.body.appendChild(progressBar);

    }        const spans = hamburger.querySelectorAll('span');function initializeAdvancedScrollEffects() {

    

    progressBar.style.width = `${Math.min(scrollProgress, 100)}%`;        if (hamburger.classList.contains('active')) {    // Parallax scrolling for hero background

}

            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';    window.addEventListener('scroll', () => {

// ============================

// INTERSECTION OBSERVER            spans[1].style.opacity = '0';        const scrolled = window.pageYOffset;

// ============================

function initializeIntersectionObserver() {            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';        const parallaxElements = document.querySelectorAll('.hero-background');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {        } else {        

            if (entry.isIntersecting) {

                entry.target.classList.add('animate-on-scroll');            spans[0].style.transform = '';        parallaxElements.forEach(element => {

                

                // Special handling for stats            spans[1].style.opacity = '';            const speed = 0.5;

                if (entry.target.classList.contains('hero-stats')) {

                    setTimeout(() => {            spans[2].style.transform = '';            element.style.transform = `translate3d(0, ${scrolled * speed}px, 0)`;

                        startCounterAnimations();

                    }, 300);        }        });

                }

                    });        

                // Service cards animation

                if (entry.target.classList.contains('services-grid')) {            // Update navbar on scroll

                    const cards = entry.target.querySelectorAll('.service-card');

                    cards.forEach((card, index) => {    // Close menu when clicking on links        updateNavbarOnScroll();

                        setTimeout(() => {

                            card.style.opacity = '1';    mobileNavLinks.forEach(link => {    });

                            card.style.transform = 'translateY(0)';

                        }, index * 100);        link.addEventListener('click', function() {}

                    });

                }            hamburger.classList.remove('active');

                

                // Testimonial cards animation            mobileMenu.classList.remove('active');function initializeIntersectionObservers() {

                if (entry.target.classList.contains('testimonials-grid')) {

                    const cards = entry.target.querySelectorAll('.testimonial-card');            document.body.classList.remove('menu-open');    // Advanced intersection observer with multiple thresholds

                    cards.forEach((card, index) => {

                        setTimeout(() => {                const observerOptions = {

                            card.style.opacity = '1';

                            card.style.transform = 'translateY(0)';            // Reset hamburger        threshold: [0, 0.1, 0.5, 0.75, 1],

                        }, index * 150);

                    });            const spans = hamburger.querySelectorAll('span');        rootMargin: '0px 0px -100px 0px'

                }

            }            spans[0].style.transform = '';    };

        });

    }, {            spans[1].style.opacity = '';    

        threshold: 0.1,

        rootMargin: '0px 0px -50px 0px'            spans[2].style.transform = '';    const observer = new IntersectionObserver((entries) => {

    });

            });        entries.forEach(entry => {

    // Observe elements

    const elementsToObserve = document.querySelectorAll([    });            if (entry.isIntersecting) {

        '.hero-stats',

        '.services-grid',                    const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;

        '.testimonials-grid',

        '.about-content',    // Close menu when clicking outside                setTimeout(() => {

        '.contact-content'

    ].join(','));    mobileMenu.addEventListener('click', function(e) {                    entry.target.classList.add('animate-in');

    

    elementsToObserve.forEach(el => observer.observe(el));        if (e.target === mobileMenu) {                }, delay);

}

            hamburger.click();            }

// ============================

// SMOOTH SCROLLING        }        });

// ============================

function initializeSmoothScrolling() {    });    }, observerOptions);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {}    

            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));    // Observe all animated elements

            if (target) {

                smoothScrollToElement(target);// ============================    document.querySelectorAll('.service-card, .testimonial-card, .feature, .contact-item, .stat').forEach(el => {

            }

        });// HERO ANIMATIONS        observer.observe(el);

    });

}// ============================    });



function smoothScrollToElement(target, duration = 1000, offset = 90) {function initializeHeroAnimations() {}

    const targetPosition = target.offsetTop - offset;

    const startPosition = window.pageYOffset;    const heroTitle = document.querySelector('.hero-title');

    const distance = targetPosition - startPosition;

    let startTime = null;    const heroDescription = document.querySelector('.hero-description');// ===== PARALLAX EFFECTS =====

    

    function animation(currentTime) {    const heroButtons = document.querySelector('.hero-buttons');function initializeParallaxEffects() {

        if (startTime === null) startTime = currentTime;

        const timeElapsed = currentTime - startTime;    const heroStats = document.querySelector('.hero-stats');    let ticking = false;

        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);        

        if (timeElapsed < duration) requestAnimationFrame(animation);

    }    // Animate hero elements on load    function requestTick() {

    

    function easeInOutCubic(t, b, c, d) {    setTimeout(() => {        if (!ticking) {

        t /= d / 2;

        if (t < 1) return c / 2 * t * t * t + b;        if (heroTitle) {            requestAnimationFrame(updateParallax);

        t -= 2;

        return c / 2 * (t * t * t + 2) + b;            heroTitle.style.opacity = '1';            ticking = true;

    }

                heroTitle.style.transform = 'translateY(0)';        }

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
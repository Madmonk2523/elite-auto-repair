/*
 * Elite Auto Repair - Premium JavaScript
 * Clean rebuild to remove previous corruption.
 */

console.log('Elite Auto Repair JavaScript ready');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Elite Auto Repair site...');
    initializeSite();
});

function initializeSite() {
    try {
        setupNavigation();
        setupMobileMenu();
        setupCounters();
        setupHeroAnimations();
        setupScrollEffects();
        setupIntersectionObservers();
        setupSmoothScrolling();
        setupServiceCards();
        setupForms();
        setupModals();

        setTimeout(() => {
            document.body.classList.add('site-loaded');
            console.log('Elite Auto Repair initialization complete');
        }, 600);
    } catch (error) {
        console.error('Initialization error:', error);
    }
}

// ------------------------------------------------------------
// Counter animations
// ------------------------------------------------------------

function setupCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) {
        console.warn('No counter elements found');
        return;
    }

    counters.forEach((counter, index) => {
        const target = Number(counter.dataset.count || counter.textContent);
        if (!Number.isFinite(target) || target <= 0) {
            console.warn('Invalid counter target at index', index);
            return;
        }

        counter.textContent = '0';
        counter.dataset.animated = 'false';
        counter.dataset.target = String(target);
    });
}

function runCounter(counter, index) {
    if (counter.dataset.animated === 'true') {
        return;
    }

    counter.dataset.animated = 'true';
    const target = Number(counter.dataset.target || '0');
    const duration = 2000;
    const startTime = performance.now();
    const originalColor = counter.style.color || '#D4AF37';

    const step = (timestamp) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const currentValue = Math.floor(eased * target);
        counter.textContent = String(currentValue);

        if (progress < 0.33) {
            counter.style.color = '#FFD700';
        } else if (progress < 0.66) {
            counter.style.color = '#FFFFFF';
        } else {
            counter.style.color = '#D4AF37';
        }

        if (progress < 1) {
            requestAnimationFrame(step);
        } else {
            counter.textContent = String(target);
            counter.style.color = originalColor;
            counter.style.transform = 'scale(1.08)';
            counter.style.textShadow = '0 0 22px rgba(212, 175, 55, 0.7)';
            setTimeout(() => {
                counter.style.transform = 'scale(1)';
                counter.style.textShadow = '0 4px 18px rgba(212, 175, 55, 0.45)';
            }, 320);
            console.log('Counter completed:', index + 1, '->', target);
        }
    };

    requestAnimationFrame(step);
}

function triggerCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach((counter, index) => {
        setTimeout(() => runCounter(counter, index), index * 260);
    });
}

// ------------------------------------------------------------
// Hero animations
// ------------------------------------------------------------

function setupHeroAnimations() {
    const sequence = ['.hero-title', '.hero-description', '.hero-buttons', '.hero-stats'];
    sequence.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (!element) {
            return;
        }

        element.style.opacity = '0';
        element.style.transform = 'translateY(24px)';
        element.style.transition = 'all 0.75s cubic-bezier(0.4, 0, 0.2, 1)';

        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            if (selector === '.hero-stats') {
                setTimeout(triggerCounters, 400);
            }
        }, 200 + index * 220);
    });
}

// ------------------------------------------------------------
// Navigation
// ------------------------------------------------------------

function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const links = document.querySelectorAll('.nav-link');
    if (!navbar) {
        return;
    }

    const handleScroll = () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightActiveNav(links);
    };

    window.addEventListener('scroll', throttle(handleScroll, 50));

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        });
    });

    handleScroll();
}

function highlightActiveNav(links) {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;
    let activeId = '';

    sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
            activeId = section.id;
        }
    });

    links.forEach((link) => {
        const sectionId = link.getAttribute('href');
        link.classList.toggle('active', sectionId === `#${activeId}`);
    });
}

function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!hamburger || !mobileMenu) {
        return;
    }

    hamburger.addEventListener('click', () => {
        const active = hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active', active);
        document.body.classList.toggle('menu-open', active);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// ------------------------------------------------------------
// Scroll effects
// ------------------------------------------------------------

function setupScrollEffects() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:4px;width:0;z-index:1000;background:linear-gradient(90deg,#D4AF37,#FFD700,#FFFFFF);transition:width 0.2s ease-out;';
    document.body.appendChild(bar);

    const updateProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight === 0 ? 0 : (window.scrollY / scrollHeight) * 100;
        bar.style.width = ${Math.min(progress, 100)}%;
    };

    window.addEventListener('scroll', throttle(updateProgress, 30));
    updateProgress();
}

// ------------------------------------------------------------
// Intersection observers
// ------------------------------------------------------------

function setupIntersectionObservers() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('in-view');

            if (entry.target.classList.contains('hero-stats')) {
                triggerCounters();
            }

            if (entry.target.classList.contains('services-grid')) {
                revealChildren(entry.target.querySelectorAll('.service-card'), 150);
            }

            if (entry.target.classList.contains('testimonials-grid')) {
                revealChildren(entry.target.querySelectorAll('.testimonial-card'), 180);
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -80px 0px' });

    ['.hero-stats', '.services-grid', '.testimonials-grid', '.about-content', '.contact-content']
        .map((selector) => document.querySelector(selector))
        .filter(Boolean)
        .forEach((element) => observer.observe(element));
}

function revealChildren(nodes, delay) {
    nodes.forEach((node, index) => {
        node.style.opacity = '0';
        node.style.transform = 'translateY(24px)';
        node.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => {
            node.style.opacity = '1';
            node.style.transform = 'translateY(0)';
        }, index * delay);
    });
}

// ------------------------------------------------------------
// Smooth scrolling
// ------------------------------------------------------------

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                smoothScrollTo(target);
            }
        });
    });
}

function smoothScrollTo(target, duration = 1000, offset = 90) {
    const start = window.pageYOffset;
    const end = target.offsetTop - offset;
    const distance = end - start;
    let startTime = null;

    const step = (timestamp) => {
        if (startTime === null) {
            startTime = timestamp;
        }
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, start + distance * eased);
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
}

// ------------------------------------------------------------
// Service cards
// ------------------------------------------------------------

function setupServiceCards() {
    document.querySelectorAll('.service-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-12px) scale(1.02)';
            card.style.boxShadow = '0 24px 48px rgba(212, 175, 55, 0.35)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
        card.addEventListener('click', (event) => createRipple(card, event));
    });
}

function createRipple(card, event) {
    const ripple = document.createElement('span');
    const rect = card.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.position = 'absolute';
    ripple.style.width = ${size}px;
    ripple.style.height = ${size}px;
    ripple.style.left = ${event.clientX - rect.left - size / 2}px;
    ripple.style.top = ${event.clientY - rect.top - size / 2}px;
    ripple.style.borderRadius = '50%';
    ripple.style.pointerEvents = 'none';
    ripple.style.background = 'rgba(255, 215, 0, 0.45)';
    ripple.style.transform = 'scale(0)';
    ripple.style.opacity = '1';
    ripple.style.transition = 'transform 0.5s ease-out, opacity 0.6s ease-out';

    card.style.position = 'relative';
    card.appendChild(ripple);

    requestAnimationFrame(() => {
        ripple.style.transform = 'scale(1)';
        ripple.style.opacity = '0';
    });

    setTimeout(() => ripple.remove(), 600);
}

// ------------------------------------------------------------
// Forms and modals
// ------------------------------------------------------------

function setupForms() {
    const form = document.getElementById('contactForm');
    if (!form) {
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        showNotification('Thank you. Your message has been received.', 'success');
        form.reset();
    });
}

function setupModals() {
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
}

function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (!modal) {
        return;
    }
    modal.style.display = 'flex';
    modal.style.opacity = '0';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
    });
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    closeModal(modal);
}

function closeModal(modal) {
    if (!modal) {
        return;
    }
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 220);
}

function openServiceModal(serviceName) {
    showNotification(Interested in our  service? Call (646) 989-0274., 'info');
}

// ------------------------------------------------------------
// Notifications and utilities
// ------------------------------------------------------------

function showNotification(message, type = 'info', duration = 5000) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };

    const note = document.createElement('div');
    note.className = 'elite-notification';
    note.textContent = message;
    note.style.cssText = 'position:fixed;top:24px;right:24px;padding:1rem 1.6rem;border-radius:16px;color:#fff;font-weight:600;z-index:10000;transform:translateX(140%);transition:transform 0.45s cubic-bezier(0.4,0,0.2,1);box-shadow:0 20px 40px rgba(15,23,42,0.45);backdrop-filter:blur(14px);';
    note.style.background = linear-gradient(135deg, , #0f172a);
    document.body.appendChild(note);

    setTimeout(() => note.style.transform = 'translateX(0)', 20);
    setTimeout(() => {
        note.style.transform = 'translateX(140%)';
        setTimeout(() => note.remove(), 420);
    }, duration);
}

function throttle(fn, wait) {
    let timeout = null;
    return function throttled(...args) {
        if (timeout) {
            return;
        }
        fn.apply(this, args);
        timeout = setTimeout(() => {
            timeout = null;
        }, wait);
    };
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t) {
    return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// ------------------------------------------------------------
// Expose helpers for inline handlers
// ------------------------------------------------------------

window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.openServiceModal = openServiceModal;
window.scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
        smoothScrollTo(target);
    }
};
window.triggerCounters = triggerCounters;
window.showNotification = showNotification;

console.log('Elite Auto Repair script initialised');

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate on Scroll
document.querySelectorAll('[data-aos]').forEach(el => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: el.dataset.aosDelay ? parseFloat(el.dataset.aosDelay) : 0
    });
});

// Service cards stagger
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top center'
    },
    stagger: 0.2,
    opacity: 0,
    y: 50,
    duration: 0.8
});

// Parallax effect
gsap.to('.gradient-overlay', {
    scrollTrigger: {
        scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * 0.5,
    ease: 'none'
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: this.getAttribute('href'),
            ease: 'power2.inOut'
        });
    });
});

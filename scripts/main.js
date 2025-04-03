// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});

// Custom cursor
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Service cards data
const servicesData = [
    { icon: '💻', title: 'Startup Solutions', 
     desc: 'Scalable web platforms ready for growth' },
    { icon: '🏪', title: 'Small Business', 
     desc: 'Affordable yet powerful online presence' },
    { icon: '👨👩👧👦', title: 'Family Business', 
     desc: 'Personalized solutions that reflect your legacy' },
    { icon: '🍽️', title: 'Restaurants & Bars', 
     desc: 'Menu integration, reservations & ordering systems' },
    { icon: '🔄', title: 'Website Refinement', 
     desc: 'Modernize & optimize existing websites' },
    { icon: '📈', title: 'SEO & Analytics', 
     desc: 'Data-driven strategies for growth' }
];

// Generate service cards
const servicesGrid = document.querySelector('.services-grid');
servicesData.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
        <div class="service-icon">${service.icon}</div>
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
    `;
    servicesGrid.appendChild(card);
});

// Form validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form validation logic
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Particle canvas
const canvas = document.getElementById('particle-canvas');
if(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speed = Math.random() * 0.5 + 0.5;
        }
        
        update() {
            this.y += this.speed;
            if(this.y > canvas.height) this.reset();
        }
        
        draw() {
            ctx.fillStyle = `rgba(37, 99, 235, ${this.size/3})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const particles = Array.from({ length: 100 }, () => new Particle());
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

/**
 * Varsity Hackathon 2026 - Main JavaScript
 * Handles particle effects and countdown timer.
 */

// Generate floating particles (Oxford/Cambridge themed)
const particlesContainer = document.getElementById('particles');
const particleCount = 200;
const particles = [];

// Create particles and store them with their properties
for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = `particle ${i % 2 === 0 ? 'oxford' : 'cambridge'}`;
    
    // Position only via transform so (p.x, p.y) = screen position (needed for mouse repulsion)
    particle.style.left = '0';
    particle.style.top = '0';
    
    particlesContainer.appendChild(particle);
    
    // Start at bottom of screen, spread out
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + Math.random() * 300;
    
    // Store particle data: position in viewport pixels, float drift, repulsion
    particles.push({
        element: particle,
        x: startX,
        y: startY,
        baseX: startX,
        baseY: startY,
        floatY: 0,           // Current vertical drift (decreases = move up)
        floatSpeed: 2 + Math.random() * 3,  // Pixels per frame upward
        floatPhase: Math.random() * Math.PI * 2,
        repelX: 0,
        repelY: 0,
        opacity: 0.3
    });
    
    // Set initial position so getBoundingClientRect() is correct on first frame
    particle.style.transform = `translate(${startX}px, ${startY}px)`;
}

// Mouse interaction settings
let mouseX = -9999;
let mouseY = -9999;
const repelDistance = 180;
const repelStrength = 120;

// Track mouse (window + capture so we always get events)
function setMouse(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
}
window.addEventListener('mousemove', setMouse, { capture: true });
window.addEventListener('touchmove', (e) => { if (e.touches[0]) setMouse(e.touches[0]); }, { capture: true });

// Animation loop
let animationTime = 0;
function updateParticles() {
    animationTime += 0.016;
    
    particles.forEach((p) => {
        // Move particle upward each frame
        p.floatY -= p.floatSpeed;
        
        // Reset when particle goes off top
        const currentY = p.baseY + p.floatY;
        if (currentY < -50) {
            p.baseX = Math.random() * window.innerWidth;
            p.baseY = window.innerHeight + Math.random() * 200;
            p.floatY = 0;
        }
        
        // Horizontal sway
        const floatX = Math.sin(animationTime * 0.5 + p.floatPhase) * 25;
        const targetX = p.baseX + floatX;
        const targetY = p.baseY + p.floatY;
        
        // Mouse repulsion: use particle's ACTUAL screen position (same coords as clientX/clientY)
        const rect = p.element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = centerX - mouseX;
        const dy = centerY - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < repelDistance && distance > 0) {
            const force = (1 - distance / repelDistance) * repelStrength;
            p.repelX = (dx / distance) * force;
            p.repelY = (dy / distance) * force;
        } else {
            p.repelX *= 0.88;
            p.repelY *= 0.88;
        }
        
        // Final position = float position + repulsion
        p.x = targetX + p.repelX;
        p.y = targetY + p.repelY;
        
        // Fade in near bottom, fade out near top
        if (p.y > window.innerHeight * 0.85) {
            p.opacity = Math.max(0, (window.innerHeight * 0.85 - (p.y - window.innerHeight * 0.85)) / 150);
        } else if (p.y < 80) {
            p.opacity = Math.max(0, p.y / 80);
        } else {
            p.opacity = 0.7;
        }
        
        // Position via transform only (left/top are 0)
        p.element.style.transform = `translate(${p.x}px, ${p.y}px)`;
        p.element.style.opacity = p.opacity;
    });
    
    requestAnimationFrame(updateParticles);
}

// Start animation after first paint so getBoundingClientRect is valid
requestAnimationFrame(() => updateParticles());

// Countdown timer to event date
const targetDate = new Date('March 7, 2026 10:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

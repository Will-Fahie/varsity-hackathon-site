/**
 * Varsity Hackathon 2026 - Main JavaScript
 * Handles particle effects and countdown timer.
 */

// Generate floating particles (Oxford/Cambridge themed)
const particlesContainer = document.getElementById('particles');
const particleCount = 200;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = `particle ${i % 2 === 0 ? 'oxford' : 'cambridge'}`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${100 + Math.random() * 20}%`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    particle.style.animationDuration = `${6 + Math.random() * 4}s`;
    particlesContainer.appendChild(particle);
}

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

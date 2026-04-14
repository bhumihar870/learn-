/**
 * LEARN_X_CODE - Landing Page JavaScript
 * Handles animations, terminal effects, and interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all effects
    initFloatingCode();
    initTerminalTyping();
    initStatCounters();
    initScrollAnimations();
});

/**
 * Floating Code Background Effect
 */
function initFloatingCode() {
    const container = document.getElementById('floatingCode');
    if (!container) return;

    const codeSnippets = [
        'const x = 42;',
        'function hello() {}',
        'if (true) { }',
        'for (let i = 0; i < n; i++)',
        'return result;',
        'class Student {}',
        'import React from "react"',
        'SELECT * FROM users',
        'print("Hello World")',
        'public static void main',
        '#include <stdio.h>',
        'def learn():',
        'while (learning) {}',
        'npm install',
        'git commit -m "init"',
        '=> { }',
        'async/await',
        'try { } catch { }',
        'export default',
        'useState()',
    ];

    function createFloatingElement() {
        const span = document.createElement('span');
        span.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        span.style.left = Math.random() * 100 + '%';
        span.style.animationDuration = (Math.random() * 10 + 10) + 's';
        span.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(span);

        // Remove element after animation
        setTimeout(() => {
            span.remove();
        }, 25000);
    }

    // Create initial elements
    for (let i = 0; i < 15; i++) {
        setTimeout(createFloatingElement, i * 500);
    }

    // Continuously create new elements
    setInterval(createFloatingElement, 2000);
}

/**
 * Terminal Typing Effect
 */
function initTerminalTyping() {
    const typingElement = document.getElementById('terminalTyping');
    const terminalBody = document.getElementById('terminalBody');
    if (!typingElement || !terminalBody) return;

    const commands = [
        { cmd: 'welcome to LEARN_X_CODE', delay: 50 },
        { cmd: 'initializing learning modules...', delay: 30 },
        { cmd: '> Loading Python... done', delay: 40 },
        { cmd: '> Loading Java... done', delay: 40 },
        { cmd: '> Loading JavaScript... done', delay: 40 },
        { cmd: '> Loading C/C++... done', delay: 40 },
        { cmd: 'Ready to code!', delay: 50 },
    ];

    let commandIndex = 0;
    let charIndex = 0;

    function typeCommand() {
        if (commandIndex >= commands.length) {
            // Reset and start over after a pause
            setTimeout(() => {
                terminalBody.innerHTML = '<p><span class="prompt">$</span> <span class="typing" id="terminalTyping"></span><span class="cursor">|</span></p>';
                commandIndex = 0;
                charIndex = 0;
                setTimeout(typeCommand, 1000);
            }, 3000);
            return;
        }

        const currentCommand = commands[commandIndex];
        const typingSpan = document.getElementById('terminalTyping');

        if (charIndex < currentCommand.cmd.length) {
            typingSpan.textContent += currentCommand.cmd[charIndex];
            charIndex++;
            setTimeout(typeCommand, currentCommand.delay);
        } else {
            // Move to next command
            setTimeout(() => {
                // Add completed line
                const newLine = document.createElement('p');
                newLine.innerHTML = `<span class="prompt">$</span> ${currentCommand.cmd}`;
                terminalBody.insertBefore(newLine, terminalBody.lastElementChild);

                // Reset typing element
                typingSpan.textContent = '';
                commandIndex++;
                charIndex = 0;

                // Keep only last 6 lines
                const lines = terminalBody.querySelectorAll('p');
                if (lines.length > 7) {
                    lines[0].remove();
                }

                typeCommand();
            }, 500);
        }
    }

    // Start typing after a short delay
    setTimeout(typeCommand, 1000);
}

/**
 * Animated Stat Counters
 */
function initStatCounters() {
    const counters = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.feature-card, .course-card');

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

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Smooth Scroll for Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Navbar Scroll Effect
 */
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 15, 28, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 15, 28, 0.9)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

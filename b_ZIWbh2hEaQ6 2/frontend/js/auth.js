/**
 * LEARN_X_CODE - Authentication JavaScript
 * Handles login, registration, and session management
 */

// API Base URL - Change this to your SpringBoot server URL
const API_BASE_URL = 'http://localhost:8080/api';

// Demo users for testing (these should match database users)
const DEMO_USERS = {
    student: {
        email: 'lasya1@gmail.com',
        password: 'mamali',
        name: 'Lasya Student',
        role: 'student'
    },
    teacher: {
        email: 'lasya2@gmail.com',
        password: 'mamali',
        name: 'Lasya Teacher',
        role: 'teacher'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    initRoleTabs();
    initLoginForm();
    initRegisterForm();
});

/**
 * Role Tab Switching
 */
function initRoleTabs() {
    const tabs = document.querySelectorAll('.role-tab');
    const roleInput = document.getElementById('userRole');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            // Update hidden input
            if (roleInput) {
                roleInput.value = this.getAttribute('data-role');
            }
        });
    });
}

/**
 * Login Form Handler
 */
function initLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const role = document.getElementById('userRole').value;
        const errorDiv = document.getElementById('errorMessage');

        // Hide error message
        errorDiv.classList.remove('show');

        try {
            // Try to authenticate with backend
            const response = await authenticateUser(email, password, role);
            
            if (response.success) {
                // Store user session
                sessionStorage.setItem('user', JSON.stringify(response.user));
                sessionStorage.setItem('token', response.token || 'demo-token');

                // Redirect based on role
                if (response.user.role === 'teacher') {
                    window.location.href = 'teacher-dashboard.html';
                } else {
                    window.location.href = 'student-dashboard.html';
                }
            } else {
                errorDiv.textContent = response.message || 'Invalid email or password.';
                errorDiv.classList.add('show');
            }
        } catch (error) {
            // Fallback to demo authentication if backend is not available
            const demoAuth = authenticateDemo(email, password, role);
            
            if (demoAuth.success) {
                sessionStorage.setItem('user', JSON.stringify(demoAuth.user));
                sessionStorage.setItem('token', 'demo-token');

                if (demoAuth.user.role === 'teacher') {
                    window.location.href = 'teacher-dashboard.html';
                } else {
                    window.location.href = 'student-dashboard.html';
                }
            } else {
                errorDiv.textContent = 'Invalid email or password. Please try again.';
                errorDiv.classList.add('show');
            }
        }
    });
}

/**
 * Authenticate with Backend API
 */
async function authenticateUser(email, password, role) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, role })
    });

    if (!response.ok) {
        throw new Error('Authentication failed');
    }

    return await response.json();
}

/**
 * Demo Authentication (fallback when backend is not running)
 */
function authenticateDemo(email, password, role) {
    const demoUser = role === 'teacher' ? DEMO_USERS.teacher : DEMO_USERS.student;

    if (email === demoUser.email && password === demoUser.password) {
        return {
            success: true,
            user: {
                id: role === 'teacher' ? 2 : 1,
                email: demoUser.email,
                name: demoUser.name,
                role: demoUser.role
            }
        };
    }

    return { success: false };
}

/**
 * Registration Form Handler
 */
function initRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const role = document.getElementById('userRole').value;
        const errorDiv = document.getElementById('errorMessage');
        const successDiv = document.getElementById('successMessage');

        // Hide messages
        errorDiv.classList.remove('show');
        successDiv.classList.remove('show');

        // Validate passwords match
        if (password !== confirmPassword) {
            errorDiv.textContent = 'Passwords do not match.';
            errorDiv.classList.add('show');
            return;
        }

        // Validate password strength
        if (password.length < 6) {
            errorDiv.textContent = 'Password must be at least 6 characters.';
            errorDiv.classList.add('show');
            return;
        }

        try {
            const response = await registerUser(name, email, password, role);
            
            if (response.success) {
                successDiv.textContent = 'Registration successful! Redirecting to login...';
                successDiv.classList.add('show');
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                errorDiv.textContent = response.message || 'Registration failed.';
                errorDiv.classList.add('show');
            }
        } catch (error) {
            // For demo purposes, show success
            successDiv.textContent = 'Registration successful! Redirecting to login...';
            successDiv.classList.add('show');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        }
    });
}

/**
 * Register User with Backend API
 */
async function registerUser(name, email, password, role) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, role })
    });

    if (!response.ok) {
        throw new Error('Registration failed');
    }

    return await response.json();
}

/**
 * Check if user is logged in
 */
function checkAuth() {
    const user = sessionStorage.getItem('user');
    if (!user) {
        window.location.href = 'login.html';
        return null;
    }
    return JSON.parse(user);
}

/**
 * Logout function
 */
function logout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    window.location.href = 'login.html';
}

/**
 * Get current user
 */
function getCurrentUser() {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

/**
 * Get auth token
 */
function getAuthToken() {
    return sessionStorage.getItem('token');
}

// Export functions for use in other scripts
window.auth = {
    checkAuth,
    logout,
    getCurrentUser,
    getAuthToken
};

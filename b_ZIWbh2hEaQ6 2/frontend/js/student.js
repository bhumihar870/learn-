/**
 * LEARN_X_CODE - Student Dashboard JavaScript
 * Handles dashboard functionality, quiz, courses, and certificates
 */

// Global state
let currentUser = null;
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizTimer = null;
let timeRemaining = 600; // 10 minutes in seconds

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    currentUser = auth.checkAuth();
    if (!currentUser) return;

    // Update UI with user info
    updateUserInfo();
    
    // Initialize navigation
    initNavigation();
    
    // Load courses
    loadCourses();
});

/**
 * Update user information in sidebar
 */
function updateUserInfo() {
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const welcomeName = document.getElementById('welcomeName');

    if (currentUser) {
        const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
        userAvatar.textContent = initials;
        userName.textContent = currentUser.name;
        if (welcomeName) {
            welcomeName.textContent = currentUser.name.split(' ')[0];
        }
    }
}

/**
 * Initialize sidebar navigation
 */
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);

            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }
}

/**
 * Show specific section
 */
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.add('hidden');
    });

    // Show selected section
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Reset quiz view when navigating to quiz section
    if (sectionName === 'quiz') {
        resetQuizView();
    }
}

/**
 * Load courses into the courses section
 */
function loadCourses() {
    const coursesList = document.getElementById('coursesList');
    if (!coursesList) return;

    const courses = [
        { id: 'python', name: 'Python', icon: 'Py', gradient: 'linear-gradient(135deg, #3776AB, #FFD43B)', videos: 10 },
        { id: 'java', name: 'Java', icon: 'Ja', gradient: 'linear-gradient(135deg, #007396, #ED8B00)', videos: 10 },
        { id: 'javascript', name: 'JavaScript', icon: 'JS', gradient: 'linear-gradient(135deg, #F7DF1E, #323330)', videos: 10, textColor: '#323330' },
        { id: 'c', name: 'C Programming', icon: 'C', gradient: 'linear-gradient(135deg, #00599C, #004482)', videos: 10 },
        { id: 'cpp', name: 'C++', icon: 'C++', gradient: 'linear-gradient(135deg, #00599C, #004482)', videos: 10 },
        { id: 'sql', name: 'SQL', icon: 'DB', gradient: 'linear-gradient(135deg, #336791, #F29111)', videos: 10 },
        { id: 'html', name: 'HTML/CSS', icon: 'H5', gradient: 'linear-gradient(135deg, #E34F26, #1572B6)', videos: 10 },
        { id: 'react', name: 'React', icon: 'Re', gradient: 'linear-gradient(135deg, #61DAFB, #20232A)', videos: 10 }
    ];

    coursesList.innerHTML = courses.map(course => `
        <div class="course-item" onclick="showCourseVideos('${course.id}', '${course.name}')">
            <div class="course-item-header">
                <div class="course-item-icon" style="background: ${course.gradient}; ${course.textColor ? 'color: ' + course.textColor : ''}">${course.icon}</div>
                <h3>${course.name}</h3>
            </div>
            <p>Complete video tutorial series</p>
            <div class="course-item-meta">
                <span>${course.videos} Videos</span>
                <span>All Levels</span>
            </div>
        </div>
    `).join('');
}

/**
 * Show videos for a specific course
 */
function showCourseVideos(courseId, courseName) {
    const courseVideosCard = document.getElementById('courseVideosCard');
    const videosList = document.getElementById('videosList');
    const selectedCourseName = document.getElementById('selectedCourseName');

    if (!courseVideosCard || !videosList) return;

    // Update course name
    selectedCourseName.textContent = courseName + ' Videos';

    // Get videos for this course
    const videos = COURSE_VIDEOS[courseId] || [];

    // Render videos
    videosList.innerHTML = videos.map((video, index) => `
        <div class="video-item">
            <div class="video-thumbnail">
                <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                    <polygon points="5,3 19,12 5,21"/>
                </svg>
            </div>
            <div class="video-info">
                <h4>${index + 1}. ${video.title}</h4>
                <p>Duration: ${video.duration}</p>
            </div>
            <a href="${video.url}" target="_blank" class="video-action">
                Watch
            </a>
        </div>
    `).join('');

    // Show the card
    courseVideosCard.classList.remove('hidden');
}

/**
 * Hide course videos and go back to course list
 */
function hideCourseVideos() {
    const courseVideosCard = document.getElementById('courseVideosCard');
    if (courseVideosCard) {
        courseVideosCard.classList.add('hidden');
    }
}

/**
 * Start a quiz
 */
function startQuiz(language) {
    const questions = QUIZ_QUESTIONS[language];
    if (!questions || questions.length < 5) {
        alert('Quiz not available for this language yet.');
        return;
    }

    // Reset quiz state
    currentQuestionIndex = 0;
    userAnswers = [];
    timeRemaining = 600;

    // Shuffle and select 5 random questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    currentQuiz = {
        language: language,
        languageName: language.charAt(0).toUpperCase() + language.slice(1),
        questions: shuffled.slice(0, 5)
    };

    // Initialize answers array
    userAnswers = new Array(5).fill(null);

    // Hide selection, show questions
    document.getElementById('quizSelectionCard').classList.add('hidden');
    document.getElementById('quizQuestionsContainer').classList.remove('hidden');
    document.getElementById('quizResultContainer').classList.add('hidden');

    // Update language name
    document.getElementById('quizLanguageName').textContent = currentQuiz.languageName;

    // Load first question
    loadQuestion(0);

    // Start timer
    startTimer();
}

/**
 * Load a question
 */
function loadQuestion(index) {
    const question = currentQuiz.questions[index];
    currentQuestionIndex = index;

    // Update question number and progress
    document.getElementById('questionNumber').textContent = `Question ${index + 1} of 5`;
    document.getElementById('quizQuestionCount').textContent = `${index + 1}/5`;
    document.getElementById('quizProgressBar').style.width = `${((index + 1) / 5) * 100}%`;

    // Update question text
    document.getElementById('questionText').textContent = question.question;

    // Render options
    const optionsList = document.getElementById('optionsList');
    const labels = ['A', 'B', 'C', 'D'];
    
    optionsList.innerHTML = question.options.map((option, i) => `
        <div class="option-item ${userAnswers[index] === i ? 'selected' : ''}" onclick="selectOption(${i})">
            <div class="option-label">${labels[i]}</div>
            <div class="option-text">${option}</div>
        </div>
    `).join('');

    // Update navigation buttons
    document.getElementById('prevBtn').style.visibility = index === 0 ? 'hidden' : 'visible';
    document.getElementById('nextBtn').textContent = index === 4 ? 'Submit' : 'Next';
}

/**
 * Select an option
 */
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;

    // Update UI
    document.querySelectorAll('.option-item').forEach((item, i) => {
        item.classList.toggle('selected', i === optionIndex);
    });
}

/**
 * Go to previous question
 */
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        loadQuestion(currentQuestionIndex - 1);
    }
}

/**
 * Go to next question or submit quiz
 */
function nextQuestion() {
    if (currentQuestionIndex === 4) {
        // Submit quiz
        submitQuiz();
    } else {
        loadQuestion(currentQuestionIndex + 1);
    }
}

/**
 * Start quiz timer
 */
function startTimer() {
    if (quizTimer) clearInterval(quizTimer);

    quizTimer = setInterval(() => {
        timeRemaining--;

        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        document.getElementById('quizTimer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeRemaining <= 0) {
            clearInterval(quizTimer);
            submitQuiz();
        }
    }, 1000);
}

/**
 * Submit the quiz
 */
function submitQuiz() {
    // Stop timer
    if (quizTimer) clearInterval(quizTimer);

    // Calculate score
    let correctCount = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correctCount++;
        }
    });

    const score = (correctCount / 5) * 100;
    const passed = score >= 60;

    // Store result
    const result = {
        language: currentQuiz.language,
        languageName: currentQuiz.languageName,
        score: score,
        correctCount: correctCount,
        totalQuestions: 5,
        passed: passed,
        date: new Date().toISOString()
    };

    // Save to session storage
    const results = JSON.parse(sessionStorage.getItem('quizResults') || '[]');
    results.push(result);
    sessionStorage.setItem('quizResults', JSON.stringify(results));
    sessionStorage.setItem('lastQuizResult', JSON.stringify(result));

    // Show results
    showQuizResults(result);
}

/**
 * Show quiz results
 */
function showQuizResults(result) {
    // Hide questions, show results
    document.getElementById('quizQuestionsContainer').classList.add('hidden');
    document.getElementById('quizResultContainer').classList.remove('hidden');

    // Update result UI
    const resultIcon = document.getElementById('resultIcon');
    resultIcon.className = 'result-icon ' + (result.passed ? 'success' : 'fail');
    resultIcon.innerHTML = result.passed ? `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
            <polyline points="22,4 12,14.01 9,11.01"/>
        </svg>
    ` : `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
    `;

    document.getElementById('resultScore').textContent = result.score + '%';
    document.getElementById('resultMessage').textContent = result.passed ? 'Congratulations!' : 'Keep Practicing!';
    document.getElementById('resultDetails').textContent = 
        `You answered ${result.correctCount} out of ${result.totalQuestions} questions correctly.`;

    // Show/hide certificate button
    document.getElementById('getCertificateBtn').style.display = result.passed ? 'inline-flex' : 'none';
}

/**
 * Reset quiz view
 */
function resetQuizView() {
    document.getElementById('quizSelectionCard').classList.remove('hidden');
    document.getElementById('quizQuestionsContainer').classList.add('hidden');
    document.getElementById('quizResultContainer').classList.add('hidden');

    if (quizTimer) clearInterval(quizTimer);
}

/**
 * Retake quiz
 */
function retakeQuiz() {
    if (currentQuiz) {
        startQuiz(currentQuiz.language);
    } else {
        resetQuizView();
    }
}

/**
 * Show certificate
 */
function showCertificate() {
    const result = JSON.parse(sessionStorage.getItem('lastQuizResult'));
    if (!result || !result.passed) return;

    viewCertificate(result.language, result.score);
}

/**
 * View a certificate
 */
function viewCertificate(language, score) {
    const modal = document.getElementById('certificateModal');
    
    // Update certificate details
    document.getElementById('certName').textContent = currentUser.name;
    document.getElementById('certCourse').textContent = 
        language.charAt(0).toUpperCase() + language.slice(1) + ' Programming Course';
    document.getElementById('certScore').textContent = score + '%';
    document.getElementById('certDate').textContent = 'Issued on: ' + new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('certId').textContent = 
        'Certificate ID: LXC-' + new Date().getFullYear() + '-' + Math.random().toString(36).substr(2, 6).toUpperCase();

    // Show modal
    modal.classList.add('active');
}

/**
 * Close certificate modal
 */
function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.classList.remove('active');
}

/**
 * Download certificate as PDF
 */
function downloadCertificate() {
    // Create a printable version
    const certificate = document.getElementById('certificateContent');
    const printWindow = window.open('', '_blank');
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>LEARN_X_CODE Certificate</title>
            <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { 
                    font-family: 'Rajdhani', sans-serif;
                    background: #0a0f1c;
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }
                .certificate {
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
                    border: 4px solid #00ff88;
                    border-radius: 16px;
                    padding: 3rem;
                    max-width: 800px;
                    width: 100%;
                    position: relative;
                    color: #e6f1ff;
                }
                .certificate::before {
                    content: '';
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    right: 20px;
                    bottom: 20px;
                    border: 2px solid rgba(0, 255, 136, 0.3);
                    border-radius: 12px;
                    pointer-events: none;
                }
                .certificate-header { text-align: center; margin-bottom: 2rem; }
                .logo-bracket { color: #00ff88; }
                .logo-text { margin: 0 5px; }
                .certificate-logo {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 1.8rem;
                    margin-bottom: 1rem;
                }
                .certificate-title {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 2.5rem;
                    color: #00ff88;
                    margin-bottom: 0.5rem;
                }
                .certificate-subtitle { font-size: 1.2rem; color: #8892b0; }
                .certificate-body { text-align: center; padding: 2rem 0; }
                .certificate-body p { font-size: 1.1rem; color: #8892b0; margin-bottom: 1rem; }
                .certificate-name {
                    font-family: 'Orbitron', sans-serif;
                    font-size: 3rem;
                    margin: 1rem 0;
                    padding: 1rem 0;
                    border-bottom: 2px solid #00ff88;
                    border-top: 2px solid #00ff88;
                }
                .certificate-course {
                    font-size: 1.3rem;
                    color: #64ffda;
                    margin: 1rem 0;
                }
                .certificate-date { font-size: 1rem; color: #495670; }
                .certificate-footer {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-top: 2rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(0, 255, 136, 0.2);
                }
                .signature { text-align: center; }
                .signature-line {
                    width: 150px;
                    height: 2px;
                    background: #00ff88;
                    margin-bottom: 0.5rem;
                }
                .signature-name { font-family: 'Orbitron', sans-serif; font-size: 1rem; }
                .signature-title { font-size: 0.85rem; color: #495670; }
                .certificate-id { font-family: 'Share Tech Mono', monospace; font-size: 0.85rem; color: #495670; }
                @media print {
                    body { background: white; }
                    .certificate { border-color: #00cc6a; }
                }
            </style>
        </head>
        <body>
            ${certificate.outerHTML}
        </body>
        </html>
    `);
    
    printWindow.document.close();
    setTimeout(() => {
        printWindow.print();
    }, 500);
}

// Make functions globally accessible
window.showSection = showSection;
window.showCourseVideos = showCourseVideos;
window.hideCourseVideos = hideCourseVideos;
window.startQuiz = startQuiz;
window.selectOption = selectOption;
window.prevQuestion = prevQuestion;
window.nextQuestion = nextQuestion;
window.retakeQuiz = retakeQuiz;
window.showCertificate = showCertificate;
window.viewCertificate = viewCertificate;
window.closeCertificateModal = closeCertificateModal;
window.downloadCertificate = downloadCertificate;

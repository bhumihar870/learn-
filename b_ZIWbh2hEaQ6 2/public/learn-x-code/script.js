/* ============================================
   LEARN_X_CODE - Complete JavaScript
   Handles all functionality: login, quiz, certificates
   ============================================ */

// ========== USER CREDENTIALS ==========
// These are the valid login credentials for the system
const VALID_USERS = {
    student: {
        email: 'lasya1@gmail.com',
        password: 'mamali',
        name: 'Lasya'
    },
    teacher: {
        email: 'lasya2@gmail.com',
        password: 'mamali',
        name: 'Lasya'
    }
};

// ========== QUIZ QUESTIONS DATABASE ==========
// 100 programming questions for the quiz system
const quizQuestions = [
    // C Programming Questions (1-15)
    { id: 1, question: "Which symbol is used to end a statement in C?", options: [".", ";", ":", ","], answer: 1, category: "C" },
    { id: 2, question: "What is the correct way to declare an integer variable in C?", options: ["integer x;", "int x;", "x int;", "var x;"], answer: 1, category: "C" },
    { id: 3, question: "Which function is used to print output in C?", options: ["print()", "cout", "printf()", "echo()"], answer: 2, category: "C" },
    { id: 4, question: "What does 'void' mean in C?", options: ["Empty/No value", "Integer", "Character", "Float"], answer: 0, category: "C" },
    { id: 5, question: "Which header file is required for printf()?", options: ["<conio.h>", "<stdio.h>", "<stdlib.h>", "<string.h>"], answer: 1, category: "C" },
    { id: 6, question: "What is the size of int in C (typically)?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], answer: 2, category: "C" },
    { id: 7, question: "Which operator is used for modulus in C?", options: ["/", "*", "%", "^"], answer: 2, category: "C" },
    { id: 8, question: "What is the correct syntax for a for loop in C?", options: ["for(i=0; i<10; i++)", "for i=0 to 10", "for(i<10; i++)", "loop(i=0;10)"], answer: 0, category: "C" },
    { id: 9, question: "Which keyword is used to define a constant in C?", options: ["constant", "const", "final", "static"], answer: 1, category: "C" },
    { id: 10, question: "What does malloc() do in C?", options: ["Frees memory", "Allocates memory", "Copies memory", "Moves memory"], answer: 1, category: "C" },
    { id: 11, question: "Which symbol is used for pointer declaration in C?", options: ["&", "*", "@", "#"], answer: 1, category: "C" },
    { id: 12, question: "What is the index of the first element in a C array?", options: ["1", "0", "-1", "Depends on array"], answer: 1, category: "C" },
    { id: 13, question: "Which function is used to read input in C?", options: ["read()", "input()", "scanf()", "cin"], answer: 2, category: "C" },
    { id: 14, question: "What does '++i' mean in C?", options: ["Add 1 after use", "Add 1 before use", "Subtract 1", "Multiply by 2"], answer: 1, category: "C" },
    { id: 15, question: "Which keyword is used to exit a loop early in C?", options: ["exit", "stop", "break", "end"], answer: 2, category: "C" },

    // Python Questions (16-30)
    { id: 16, question: "How do you print 'Hello' in Python?", options: ["printf('Hello')", "print('Hello')", "echo 'Hello'", "System.out.print('Hello')"], answer: 1, category: "Python" },
    { id: 17, question: "Which symbol is used for comments in Python?", options: ["//", "/*", "#", "--"], answer: 2, category: "Python" },
    { id: 18, question: "What is the correct file extension for Python files?", options: [".python", ".py", ".pt", ".pyt"], answer: 1, category: "Python" },
    { id: 19, question: "How do you create a variable in Python?", options: ["var x = 5", "int x = 5", "x = 5", "let x = 5"], answer: 2, category: "Python" },
    { id: 20, question: "Which keyword is used for functions in Python?", options: ["function", "func", "def", "define"], answer: 2, category: "Python" },
    { id: 21, question: "What does len() do in Python?", options: ["Returns length", "Creates list", "Sorts data", "Finds maximum"], answer: 0, category: "Python" },
    { id: 22, question: "How do you start a list in Python?", options: ["{}", "[]", "()", "<>"], answer: 1, category: "Python" },
    { id: 23, question: "Which method adds an item to a list in Python?", options: ["add()", "insert()", "append()", "push()"], answer: 2, category: "Python" },
    { id: 24, question: "What is the output of 5//2 in Python?", options: ["2.5", "2", "3", "2.0"], answer: 1, category: "Python" },
    { id: 25, question: "How do you create a dictionary in Python?", options: ["dict[]", "{key: value}", "[key: value]", "(key: value)"], answer: 1, category: "Python" },
    { id: 26, question: "Which keyword is used for conditional statements in Python?", options: ["when", "if", "condition", "check"], answer: 1, category: "Python" },
    { id: 27, question: "How do you write a for loop in Python?", options: ["for(i=0;i<10;i++)", "for i in range(10):", "for i=0 to 10", "loop i from 0 to 10"], answer: 1, category: "Python" },
    { id: 28, question: "What does input() do in Python?", options: ["Prints output", "Takes user input", "Creates variable", "Ends program"], answer: 1, category: "Python" },
    { id: 29, question: "How do you convert string to integer in Python?", options: ["toInt()", "parseInt()", "int()", "convert()"], answer: 2, category: "Python" },
    { id: 30, question: "Which keyword exits a loop in Python?", options: ["exit", "stop", "break", "end"], answer: 2, category: "Python" },

    // Java Questions (31-45)
    { id: 31, question: "What is the main method signature in Java?", options: ["public main()", "static void main()", "public static void main(String[] args)", "void main()"], answer: 2, category: "Java" },
    { id: 32, question: "Which keyword is used to inherit a class in Java?", options: ["inherits", "extends", "implements", "using"], answer: 1, category: "Java" },
    { id: 33, question: "How do you print in Java?", options: ["print()", "console.log()", "System.out.println()", "printf()"], answer: 2, category: "Java" },
    { id: 34, question: "What is the file extension for Java source files?", options: [".class", ".java", ".jv", ".j"], answer: 1, category: "Java" },
    { id: 35, question: "Which keyword creates an object in Java?", options: ["create", "object", "new", "make"], answer: 2, category: "Java" },
    { id: 36, question: "What is encapsulation in Java?", options: ["Hiding data", "Inheriting data", "Sharing data", "Deleting data"], answer: 0, category: "Java" },
    { id: 37, question: "Which access modifier is most restrictive?", options: ["public", "protected", "default", "private"], answer: 3, category: "Java" },
    { id: 38, question: "What is the default value of boolean in Java?", options: ["true", "false", "null", "0"], answer: 1, category: "Java" },
    { id: 39, question: "Which collection allows duplicate elements?", options: ["Set", "List", "Map", "None"], answer: 1, category: "Java" },
    { id: 40, question: "What is JVM?", options: ["Java Virtual Machine", "Java Version Manager", "Java Variable Method", "Just Very Modern"], answer: 0, category: "Java" },
    { id: 41, question: "Which keyword handles exceptions in Java?", options: ["handle", "catch", "error", "except"], answer: 1, category: "Java" },
    { id: 42, question: "What is inheritance?", options: ["Creating objects", "Acquiring properties of parent", "Hiding data", "Multiple methods same name"], answer: 1, category: "Java" },
    { id: 43, question: "Which loop runs at least once?", options: ["for", "while", "do-while", "foreach"], answer: 2, category: "Java" },
    { id: 44, question: "What does 'final' mean in Java?", options: ["Last element", "Cannot be changed", "End of program", "Final method"], answer: 1, category: "Java" },
    { id: 45, question: "How do you create an array in Java?", options: ["int arr[]", "array int arr", "int arr()", "arr = array()"], answer: 0, category: "Java" },

    // JavaScript Questions (46-60)
    { id: 46, question: "How do you declare a variable in JavaScript?", options: ["variable x", "var x", "v x", "declare x"], answer: 1, category: "JavaScript" },
    { id: 47, question: "Which symbol is used for single-line comments in JS?", options: ["#", "//", "/*", "--"], answer: 1, category: "JavaScript" },
    { id: 48, question: "How do you write a function in JavaScript?", options: ["function myFunc()", "def myFunc()", "func myFunc()", "void myFunc()"], answer: 0, category: "JavaScript" },
    { id: 49, question: "What does === mean in JavaScript?", options: ["Assignment", "Equal value only", "Equal value and type", "Not equal"], answer: 2, category: "JavaScript" },
    { id: 50, question: "How do you create an array in JavaScript?", options: ["array()", "new Array()", "[]", "Both B and C"], answer: 3, category: "JavaScript" },
    { id: 51, question: "What is 'undefined' in JavaScript?", options: ["Null value", "Variable declared but not assigned", "Error", "Zero"], answer: 1, category: "JavaScript" },
    { id: 52, question: "Which method adds element to end of array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0, category: "JavaScript" },
    { id: 53, question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Online Notation", "Java Script Object Number"], answer: 0, category: "JavaScript" },
    { id: 54, question: "How do you write an arrow function?", options: ["=>", "->", "function=>", "()=>"], answer: 3, category: "JavaScript" },
    { id: 55, question: "What is 'null' in JavaScript?", options: ["Empty string", "Zero", "Intentional absence of value", "Undefined"], answer: 2, category: "JavaScript" },
    { id: 56, question: "Which event occurs when user clicks on element?", options: ["onmouseover", "onclick", "onchange", "onfocus"], answer: 1, category: "JavaScript" },
    { id: 57, question: "How do you select element by ID?", options: ["getElement()", "getElementById()", "selectById()", "findById()"], answer: 1, category: "JavaScript" },
    { id: 58, question: "What is the output of typeof []?", options: ["array", "object", "list", "undefined"], answer: 1, category: "JavaScript" },
    { id: 59, question: "Which keyword declares a constant?", options: ["var", "let", "const", "constant"], answer: 2, category: "JavaScript" },
    { id: 60, question: "What does 'NaN' mean?", options: ["Not a Null", "Not a Number", "New and Null", "None and Nothing"], answer: 1, category: "JavaScript" },

    // HTML/CSS Questions (61-75)
    { id: 61, question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: 0, category: "HTML" },
    { id: 62, question: "Which tag is used for largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], answer: 2, category: "HTML" },
    { id: 63, question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: 1, category: "CSS" },
    { id: 64, question: "Which property changes text color in CSS?", options: ["text-color", "font-color", "color", "text-style"], answer: 2, category: "CSS" },
    { id: 65, question: "How do you add background color in CSS?", options: ["color", "bgcolor", "background-color", "back-color"], answer: 2, category: "CSS" },
    { id: 66, question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1, category: "HTML" },
    { id: 67, question: "How do you create a class in CSS?", options: ["#classname", ".classname", "*classname", "@classname"], answer: 1, category: "CSS" },
    { id: 68, question: "Which tag is used for images?", options: ["<img>", "<image>", "<picture>", "<pic>"], answer: 0, category: "HTML" },
    { id: 69, question: "How do you center text in CSS?", options: ["align: center", "text-align: center", "text-center: true", "center: text"], answer: 1, category: "CSS" },
    { id: 70, question: "Which tag creates unordered list?", options: ["<ol>", "<ul>", "<list>", "<li>"], answer: 1, category: "HTML" },
    { id: 71, question: "What is the correct CSS selector for ID?", options: [".id", "#id", "*id", "@id"], answer: 1, category: "CSS" },
    { id: 72, question: "Which tag creates a line break?", options: ["<lb>", "<break>", "<br>", "<newline>"], answer: 2, category: "HTML" },
    { id: 73, question: "How do you make text bold in CSS?", options: ["font-weight: bold", "text-style: bold", "bold: true", "font: bold"], answer: 0, category: "CSS" },
    { id: 74, question: "Which tag is used for table?", options: ["<tab>", "<table>", "<tbl>", "<tr>"], answer: 1, category: "HTML" },
    { id: 75, question: "How do you add border in CSS?", options: ["border: 1px solid", "add-border: 1px", "border-style: 1px", "outline: 1px solid"], answer: 0, category: "CSS" },

    // C++ Questions (76-90)
    { id: 76, question: "What is C++?", options: ["Markup language", "Object-oriented programming language", "Database", "Operating system"], answer: 1, category: "C++" },
    { id: 77, question: "Which symbol is used for cout in C++?", options: [">>", "<<", "->", "::"], answer: 1, category: "C++" },
    { id: 78, question: "How do you declare a class in C++?", options: ["class MyClass {}", "Class MyClass {}", "new class MyClass", "define class MyClass"], answer: 0, category: "C++" },
    { id: 79, question: "What is the correct way to read input in C++?", options: ["scanf()", "cin >>", "input()", "read()"], answer: 1, category: "C++" },
    { id: 80, question: "Which operator is used for scope resolution?", options: ["::", "->", ".", "::>"], answer: 0, category: "C++" },
    { id: 81, question: "What is a constructor in C++?", options: ["Function that destroys object", "Function called when object is created", "Static function", "Virtual function"], answer: 1, category: "C++" },
    { id: 82, question: "What is polymorphism?", options: ["One interface, multiple implementations", "Hiding data", "Creating objects", "Memory management"], answer: 0, category: "C++" },
    { id: 83, question: "Which keyword makes function virtual?", options: ["abstract", "virtual", "override", "poly"], answer: 1, category: "C++" },
    { id: 84, question: "What is a destructor?", options: ["Creates object", "Destroys object", "Copies object", "Moves object"], answer: 1, category: "C++" },
    { id: 85, question: "How do you create pointer in C++?", options: ["ptr x", "int* x", "pointer x", "&int x"], answer: 1, category: "C++" },
    { id: 86, question: "What is inheritance in C++?", options: ["Deleting class", "Creating class from another class", "Copying data", "Hiding methods"], answer: 1, category: "C++" },
    { id: 87, question: "Which header is needed for cout?", options: ["<stdio.h>", "<iostream>", "<output>", "<stream>"], answer: 1, category: "C++" },
    { id: 88, question: "What is 'this' pointer?", options: ["Points to current object", "Points to parent class", "Points to child class", "Points to main function"], answer: 0, category: "C++" },
    { id: 89, question: "What is function overloading?", options: ["One function name, different parameters", "Function calling itself", "Function in function", "No return function"], answer: 0, category: "C++" },
    { id: 90, question: "What is STL in C++?", options: ["Standard Template Library", "Simple Type Library", "Standard Type Language", "System Template Library"], answer: 0, category: "C++" },

    // General Programming Questions (91-100)
    { id: 91, question: "What is an algorithm?", options: ["Programming language", "Step-by-step procedure", "Data type", "Hardware component"], answer: 1, category: "General" },
    { id: 92, question: "What is a variable?", options: ["Constant value", "Storage location with name", "Function", "Loop"], answer: 1, category: "General" },
    { id: 93, question: "What is debugging?", options: ["Writing code", "Finding and fixing errors", "Compiling code", "Running code"], answer: 1, category: "General" },
    { id: 94, question: "What is an IDE?", options: ["Internet Development Environment", "Integrated Development Environment", "Internal Data Exchange", "Input Device Extension"], answer: 1, category: "General" },
    { id: 95, question: "What is a loop?", options: ["Single execution", "Repeated execution of code", "Error in code", "End of program"], answer: 1, category: "General" },
    { id: 96, question: "What is a function?", options: ["Data type", "Reusable block of code", "Variable", "Loop"], answer: 1, category: "General" },
    { id: 97, question: "What is syntax?", options: ["Error type", "Rules of a programming language", "Variable name", "Function type"], answer: 1, category: "General" },
    { id: 98, question: "What is compilation?", options: ["Running code", "Converting code to machine language", "Debugging", "Writing code"], answer: 1, category: "General" },
    { id: 99, question: "What is a data type?", options: ["Type of variable", "Classification of data", "Both A and B", "None"], answer: 2, category: "General" },
    { id: 100, question: "What is recursion?", options: ["Loop", "Function calling itself", "Variable declaration", "Class definition"], answer: 1, category: "General" }
];

// ========== STUDENT DATA STORAGE ==========
// Using localStorage to persist student data
let studentData = {
    quizzesTaken: 0,
    certificatesEarned: 0,
    coursesAccessed: [],
    totalCorrect: 0,
    certificates: []
};

// ========== QUIZ STATE ==========
let currentQuiz = {
    questions: [],
    currentIndex: 0,
    answers: [],
    score: 0
};

// ========== INITIALIZE APPLICATION ==========
// This runs when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Load saved student data from localStorage
    const savedData = localStorage.getItem('studentData');
    if (savedData) {
        studentData = JSON.parse(savedData);
    }
    
    // Update UI if on student page
    if (document.getElementById('dashboardSection')) {
        updateStudentStats();
    }
});

// ========== LOGIN FUNCTIONS ==========
// Shows the login modal with correct type (student/teacher)
function showLogin(type) {
    const modal = document.getElementById('loginModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const userTypeInput = document.getElementById('userType');
    
    // Update modal based on login type
    if (type === 'student') {
        modalTitle.textContent = 'Student Login';
        modalIcon.textContent = '👨‍🎓';
    } else {
        modalTitle.textContent = 'Teacher Login';
        modalIcon.textContent = '👩‍🏫';
    }
    
    userTypeInput.value = type;
    modal.classList.add('active');
}

// Closes the login modal
function closeLogin() {
    document.getElementById('loginModal').classList.remove('active');
}

// Handles login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    
    // Validate credentials
    const validUser = VALID_USERS[userType];
    
    if (email === validUser.email && password === validUser.password) {
        // Redirect to appropriate dashboard
        if (userType === 'student') {
            window.location.href = 'student.html';
        } else {
            window.location.href = 'teacher.html';
        }
    } else {
        alert('Invalid credentials! Please try again.\n\nHint:\nStudent: lasya1@gmail.com\nTeacher: lasya2@gmail.com\nPassword: mamali');
    }
}

// ========== STUDENT DASHBOARD FUNCTIONS ==========
// Shows different sections in student dashboard
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
    
    // Update navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Update active nav
    event.target.closest('.nav-item').classList.add('active');
    
    // Update stats when switching to dashboard
    if (sectionName === 'dashboard') {
        updateStudentStats();
    }
    
    // Update progress section
    if (sectionName === 'progress') {
        updateProgressSection();
    }
    
    // Update certificates section
    if (sectionName === 'certificates') {
        updateCertificatesSection();
    }
}

// Updates student statistics display
function updateStudentStats() {
    document.getElementById('quizzesTaken').textContent = studentData.quizzesTaken;
    document.getElementById('certificatesEarned').textContent = studentData.certificatesEarned;
    document.getElementById('coursesAccessed').textContent = studentData.coursesAccessed.length;
    
    // Calculate average score
    const avgScore = studentData.quizzesTaken > 0 
        ? Math.round((studentData.totalCorrect / (studentData.quizzesTaken * 5)) * 100) 
        : 0;
    document.getElementById('avgScore').textContent = avgScore + '%';
}

// ========== QUIZ FUNCTIONS ==========
// Starts a new quiz with 5 random questions
function startQuiz() {
    // Get 5 random questions
    const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
    currentQuiz.questions = shuffled.slice(0, 5);
    currentQuiz.currentIndex = 0;
    currentQuiz.answers = new Array(5).fill(null);
    currentQuiz.score = 0;
    
    // Show quiz questions screen
    document.getElementById('quizStart').classList.add('hidden');
    document.getElementById('quizQuestions').classList.remove('hidden');
    document.getElementById('quizResult').classList.add('hidden');
    
    // Display first question
    displayQuestion();
}

// Displays current question
function displayQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentIndex];
    
    // Update question number
    document.getElementById('currentQ').textContent = currentQuiz.currentIndex + 1;
    
    // Update question text
    document.getElementById('questionText').textContent = question.question;
    
    // Create option buttons
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => selectOption(index);
        
        // Check if already answered
        if (currentQuiz.answers[currentQuiz.currentIndex] === index) {
            btn.classList.add('selected');
        }
        
        optionsContainer.appendChild(btn);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuiz.currentIndex === 0;
    document.getElementById('nextBtn').textContent = 
        currentQuiz.currentIndex === 4 ? 'Finish' : 'Next';
}

// Handles option selection
function selectOption(index) {
    currentQuiz.answers[currentQuiz.currentIndex] = index;
    
    // Update visual selection
    const options = document.querySelectorAll('.option-btn');
    options.forEach((btn, i) => {
        btn.classList.remove('selected');
        if (i === index) {
            btn.classList.add('selected');
        }
    });
}

// Goes to previous question
function prevQuestion() {
    if (currentQuiz.currentIndex > 0) {
        currentQuiz.currentIndex--;
        displayQuestion();
    }
}

// Goes to next question or finishes quiz
function nextQuestion() {
    if (currentQuiz.currentIndex < 4) {
        currentQuiz.currentIndex++;
        displayQuestion();
    } else {
        // Calculate and show results
        finishQuiz();
    }
}

// Finishes quiz and shows results
function finishQuiz() {
    // Calculate score
    currentQuiz.score = 0;
    currentQuiz.questions.forEach((question, index) => {
        if (currentQuiz.answers[index] === question.answer) {
            currentQuiz.score++;
        }
    });
    
    // Update student data
    studentData.quizzesTaken++;
    studentData.totalCorrect += currentQuiz.score;
    studentData.certificatesEarned++;
    
    // Save certificate record
    studentData.certificates.push({
        date: new Date().toLocaleDateString(),
        score: currentQuiz.score,
        name: document.getElementById('certName').value || 'Student'
    });
    
    // Save to localStorage
    saveStudentData();
    
    // Show results
    document.getElementById('quizQuestions').classList.add('hidden');
    document.getElementById('quizResult').classList.remove('hidden');
    
    // Update score display
    document.getElementById('scoreValue').textContent = currentQuiz.score;
    
    // Update result message
    const messages = [
        "Keep practicing! Every attempt makes you better.",
        "Good start! You're learning fast.",
        "Nice work! You're getting there.",
        "Great job! You have solid knowledge.",
        "Excellent! You're a programming expert!",
        "Perfect score! You're absolutely amazing!"
    ];
    document.getElementById('resultMessage').textContent = messages[currentQuiz.score];
}

// Retake the quiz
function retakeQuiz() {
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizStart').classList.remove('hidden');
}

// ========== CERTIFICATE GENERATION ==========
// Generates a premium certificate as PNG
function generateCertificate() {
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    const name = document.getElementById('certName').value || 'Student';
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#0a0a1a');
    gradient.addColorStop(1, '#1a1a3e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border design
    ctx.strokeStyle = '#00d4ff';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Inner border
    ctx.strokeStyle = 'rgba(124, 58, 237, 0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(35, 35, canvas.width - 70, canvas.height - 70);
    
    // Corner decorations
    drawCornerDecoration(ctx, 40, 40);
    drawCornerDecoration(ctx, canvas.width - 40, 40);
    drawCornerDecoration(ctx, 40, canvas.height - 40);
    drawCornerDecoration(ctx, canvas.width - 40, canvas.height - 40);
    
    // Title
    ctx.fillStyle = '#00d4ff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE', canvas.width / 2, 120);
    
    // Subtitle
    ctx.fillStyle = '#ffffff';
    ctx.font = '24px Arial';
    ctx.fillText('OF ACHIEVEMENT', canvas.width / 2, 160);
    
    // "This is to certify that"
    ctx.fillStyle = '#a0a0c0';
    ctx.font = '18px Arial';
    ctx.fillText('This is to certify that', canvas.width / 2, 230);
    
    // Name with glow effect
    ctx.shadowColor = '#00d4ff';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px Georgia';
    ctx.fillText(name, canvas.width / 2, 290);
    ctx.shadowBlur = 0;
    
    // Achievement text
    ctx.fillStyle = '#a0a0c0';
    ctx.font = '18px Arial';
    ctx.fillText('has successfully completed the Programming Quiz', canvas.width / 2, 350);
    ctx.fillText('at LEARN_X_CODE Learning Platform', canvas.width / 2, 380);
    
    // Score
    ctx.fillStyle = '#00d4ff';
    ctx.font = 'bold 36px Arial';
    ctx.fillText('Score: ' + currentQuiz.score + ' / 5', canvas.width / 2, 450);
    
    // Performance rating
    const ratings = ['Participant', 'Beginner', 'Learner', 'Skilled', 'Expert', 'Master'];
    ctx.fillStyle = '#10b981';
    ctx.font = '24px Arial';
    ctx.fillText('Rating: ' + ratings[currentQuiz.score], canvas.width / 2, 490);
    
    // Date
    ctx.fillStyle = '#6b6b8f';
    ctx.font = '16px Arial';
    ctx.fillText('Date: ' + new Date().toLocaleDateString(), canvas.width / 2, 550);
    
    // Logo
    ctx.fillStyle = '#00d4ff';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('<LEARN_X_CODE/>', canvas.width / 2, 620);
    
    // Certificate ID
    ctx.fillStyle = '#6b6b8f';
    ctx.font = '12px Arial';
    ctx.fillText('Certificate ID: LXC-' + Date.now().toString(36).toUpperCase(), canvas.width / 2, 660);
    
    // Download certificate
    const link = document.createElement('a');
    link.download = 'LEARN_X_CODE_Certificate_' + name.replace(/\s/g, '_') + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Draws corner decoration for certificate
function drawCornerDecoration(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = '#00d4ff';
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#7c3aed';
    ctx.fill();
}

// ========== COURSE ACCESS TRACKING ==========
// Tracks when student accesses a course
function trackCourseAccess(courseName) {
    if (!studentData.coursesAccessed.includes(courseName)) {
        studentData.coursesAccessed.push(courseName);
        saveStudentData();
    }
}

// ========== PROGRESS SECTION ==========
// Updates the progress section display
function updateProgressSection() {
    document.getElementById('totalQuizzes').textContent = studentData.quizzesTaken;
    document.getElementById('totalCorrect').textContent = studentData.totalCorrect;
    document.getElementById('coursesViewed').textContent = studentData.coursesAccessed.length;
    
    // Update courses accessed list
    const coursesList = document.getElementById('coursesAccessedList');
    if (studentData.coursesAccessed.length > 0) {
        coursesList.innerHTML = studentData.coursesAccessed
            .map(course => `<div class="course-accessed-item">✓ ${course}</div>`)
            .join('');
    } else {
        coursesList.innerHTML = '<p class="no-courses">No courses accessed yet. Start learning!</p>';
    }
}

// ========== CERTIFICATES SECTION ==========
// Updates the certificates section display
function updateCertificatesSection() {
    const certsList = document.getElementById('certificatesList');
    
    if (studentData.certificates.length > 0) {
        certsList.innerHTML = studentData.certificates
            .map((cert, index) => `
                <div class="cert-item">
                    <div class="cert-info">
                        <h4>Programming Quiz Certificate #${index + 1}</h4>
                        <p>Score: ${cert.score}/5 | Date: ${cert.date}</p>
                    </div>
                    <span>🏆</span>
                </div>
            `)
            .join('');
    } else {
        certsList.innerHTML = '<p class="no-certs">No certificates yet. Take a quiz to earn your first certificate!</p>';
    }
}

// ========== LOCAL STORAGE ==========
// Saves student data to localStorage
function saveStudentData() {
    localStorage.setItem('studentData', JSON.stringify(studentData));
}

// ========== TEACHER DASHBOARD FUNCTIONS ==========
// Shows different sections in teacher dashboard
function showTeacherSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.add('hidden'));
    
    // Update navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Update active nav
    event.target.closest('.nav-item').classList.add('active');
}

// Shows add playlist modal
function showAddPlaylistModal() {
    document.getElementById('addPlaylistModal').classList.add('active');
}

// Closes add playlist modal
function closeAddPlaylistModal() {
    document.getElementById('addPlaylistModal').classList.remove('active');
}

// Adds new playlist
function addNewPlaylist(event) {
    event.preventDefault();
    
    const name = document.getElementById('playlistName').value;
    const lang = document.getElementById('playlistLang').value;
    const videos = document.getElementById('videoCount').value;
    
    // Add to table
    const tableBody = document.getElementById('playlistsTableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td><span class="lang-badge ${lang}">${lang.toUpperCase()}</span></td>
        <td>${videos}</td>
        <td>0</td>
        <td><span class="status-badge active">Active</span></td>
        <td>
            <button class="action-btn-small edit" onclick="editPlaylist('${lang}')">Edit</button>
            <button class="action-btn-small delete" onclick="deletePlaylist('${lang}', this)">Delete</button>
        </td>
    `;
    tableBody.appendChild(newRow);
    
    // Update stats
    const totalPlaylists = document.getElementById('totalPlaylists');
    totalPlaylists.textContent = parseInt(totalPlaylists.textContent) + 1;
    
    const totalVideos = document.getElementById('totalVideos');
    totalVideos.textContent = parseInt(totalVideos.textContent) + parseInt(videos);
    
    // Close modal and reset form
    closeAddPlaylistModal();
    document.getElementById('addPlaylistForm').reset();
    
    alert('Playlist added successfully!');
}

// Edit playlist (demo function)
function editPlaylist(lang) {
    alert('Edit functionality for ' + lang.toUpperCase() + ' playlist.\n\nIn a real application, this would open an edit form.');
}

// Delete playlist
function deletePlaylist(lang, btn) {
    if (confirm('Are you sure you want to delete this playlist?')) {
        if (btn) {
            btn.closest('tr').remove();
            
            // Update stats
            const totalPlaylists = document.getElementById('totalPlaylists');
            totalPlaylists.textContent = parseInt(totalPlaylists.textContent) - 1;
        }
        alert('Playlist deleted successfully!');
    }
}

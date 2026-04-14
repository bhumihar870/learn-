# LEARN_X_CODE - Programming Learning Platform

## Complete Documentation for Project Report

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [System Requirements](#2-system-requirements)
3. [Installation Guide](#3-installation-guide)
4. [Login Credentials](#4-login-credentials)
5. [Technology Stack](#5-technology-stack)
6. [File Structure](#6-file-structure)
7. [Features Description](#7-features-description)
8. [Frontend Architecture](#8-frontend-architecture)
9. [JavaScript Functions Documentation](#9-javascript-functions-documentation)
10. [CSS Styling Guide](#10-css-styling-guide)
11. [Quiz System](#11-quiz-system)
12. [Certificate Generation](#12-certificate-generation)
13. [Video Playlists](#13-video-playlists)
14. [Student Dashboard](#14-student-dashboard)
15. [Teacher Dashboard](#15-teacher-dashboard)
16. [Data Storage](#16-data-storage)
17. [SpringBoot Backend Integration](#17-springboot-backend-integration)
18. [MySQL Database Schema](#18-mysql-database-schema)
19. [API Endpoints](#19-api-endpoints)
20. [Security Features](#20-security-features)
21. [Future Enhancements](#21-future-enhancements)
22. [Troubleshooting](#22-troubleshooting)
23. [Credits](#23-credits)

---

## 1. Project Overview

**LEARN_X_CODE** is a comprehensive online learning platform designed to help students master programming languages through interactive quizzes, video tutorials, and achievement certificates.

### Key Features:
- Interactive landing page with techy design
- Dual login system (Student/Teacher)
- Quiz system with 100+ programming questions
- Premium downloadable certificates
- Video playlists for major programming languages
- Progress tracking and analytics
- Teacher dashboard for content management

### Project Goals:
1. Provide an engaging platform for learning programming
2. Test knowledge through randomized quizzes
3. Reward achievements with certificates
4. Curate best YouTube tutorials for each language
5. Track learning progress over time

---

## 2. System Requirements

### For Running Frontend (HTML/CSS/JS):
- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No server required - open HTML directly

### For SpringBoot Backend:
- Java JDK 11 or higher
- Maven 3.6+
- MySQL 8.0+
- IDE: IntelliJ IDEA / Eclipse / VS Code with Java extensions

### Recommended:
- VS Code with Live Server extension
- Node.js (for additional tools)
- Git for version control

---

## 3. Installation Guide

### Step 1: Frontend Only (Simple)
1. Download all files (index.html, student.html, teacher.html, style.css, script.js)
2. Place them in the same folder
3. Double-click `index.html` to open in browser
4. Login and start using!

### Step 2: With VS Code
1. Open VS Code
2. Install "Live Server" extension
3. Open the project folder
4. Right-click `index.html` → "Open with Live Server"
5. Browser opens automatically with hot reload

### Step 3: With SpringBoot Backend (Advanced)
See Section 17 for complete backend setup.

---

## 4. Login Credentials

### Student Account:
```
Email: lasya1@gmail.com
Password: mamali
```

### Teacher Account:
```
Email: lasya2@gmail.com
Password: mamali
```

### Important Notes:
- Credentials are case-sensitive
- Student redirects to student.html
- Teacher redirects to teacher.html
- Demo credentials shown on login modal

---

## 5. Technology Stack

### Frontend:
| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | - | Page structure |
| CSS3 | - | Styling & animations |
| JavaScript | ES6+ | Interactivity |
| LocalStorage | - | Data persistence |

### Backend (Optional):
| Technology | Version | Purpose |
|------------|---------|---------|
| SpringBoot | 2.7+ | REST API |
| Java | 11+ | Backend logic |
| MySQL | 8.0+ | Database |
| Maven | 3.6+ | Build tool |

### External Resources:
- YouTube API (video links)
- Google Fonts (optional)
- Canvas API (certificate generation)

---

## 6. File Structure

```
LEARN_X_CODE/
│
├── index.html          # Landing page with login
├── student.html        # Student dashboard
├── teacher.html        # Teacher dashboard
├── style.css           # All CSS styles
├── script.js           # All JavaScript logic
├── README.md           # Documentation (this file)
│
└── (SpringBoot Backend - Optional)
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   └── com/learnxcode/
    │   │   │       ├── controller/
    │   │   │       ├── model/
    │   │   │       ├── repository/
    │   │   │       └── service/
    │   │   └── resources/
    │   │       └── application.properties
    │   └── test/
    └── pom.xml
```

### File Descriptions:

| File | Lines | Description |
|------|-------|-------------|
| index.html | ~150 | Main landing page with hero section, features, and login modal |
| student.html | ~350 | Student dashboard with quiz, study materials, certificates |
| teacher.html | ~350 | Teacher dashboard with playlist management and analytics |
| style.css | ~1200 | Complete CSS with dark theme, animations, responsive design |
| script.js | ~650 | JavaScript for login, quiz, certificates, data management |

---

## 7. Features Description

### 7.1 Landing Page (index.html)
- **Hero Section**: Animated code window, glitch text effect
- **Features Grid**: 4 feature cards with icons
- **Navigation**: Logo, links, login button
- **Login Modal**: Email/password form with validation
- **Background**: Animated gradient with code rain effect

### 7.2 Student Dashboard (student.html)
- **Sidebar**: Navigation menu with icons
- **Stats Cards**: Quizzes taken, certificates, courses accessed
- **Quick Actions**: Start quiz, browse courses buttons
- **Quiz Section**: Question display, options, navigation
- **Study Section**: Video playlists grid
- **Certificates Section**: List of earned certificates
- **Progress Section**: Detailed statistics

### 7.3 Teacher Dashboard (teacher.html)
- **Overview**: Stats cards for playlists, videos, students
- **Playlist Management**: Table with edit/delete actions
- **Add Playlist Modal**: Form to create new playlist
- **Analytics**: Bar charts, weekly stats
- **Students Section**: Student performance table

---

## 8. Frontend Architecture

### HTML Structure:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Content -->
    <script src="script.js"></script>
</body>
</html>
```

### CSS Organization:
1. Reset & Variables
2. Landing Page Styles
3. Dashboard Layout
4. Components (Cards, Buttons, Forms)
5. Quiz Styles
6. Teacher Dashboard
7. Responsive Design

### JavaScript Organization:
1. User Credentials
2. Quiz Questions Database (100 questions)
3. Student Data Storage
4. Login Functions
5. Dashboard Functions
6. Quiz Functions
7. Certificate Generation
8. Teacher Functions

---

## 9. JavaScript Functions Documentation

### Login Functions:

```javascript
// Shows login modal for student or teacher
showLogin(type)
// Parameters: type - 'student' or 'teacher'
// Opens modal with appropriate icon and title

// Closes the login modal
closeLogin()
// Hides the modal

// Validates login credentials
handleLogin(event)
// Checks email and password
// Redirects to appropriate dashboard
```

### Quiz Functions:

```javascript
// Starts new quiz with 5 random questions
startQuiz()
// Shuffles question bank
// Selects 5 random questions
// Initializes quiz state

// Displays current question
displayQuestion()
// Shows question text
// Creates option buttons
// Highlights selected answer

// Handles option selection
selectOption(index)
// Stores selected answer
// Updates visual selection

// Navigates to previous question
prevQuestion()
// Decrements current index
// Updates display

// Goes to next or finishes quiz
nextQuestion()
// Increments index or calls finishQuiz()

// Calculates score and shows results
finishQuiz()
// Counts correct answers
// Updates student data
// Shows result screen
```

### Certificate Functions:

```javascript
// Generates PNG certificate
generateCertificate()
// Creates canvas drawing
// Adds name, score, date
// Downloads as PNG file

// Draws corner decorations
drawCornerDecoration(ctx, x, y)
// Creates circular corner elements
```

### Data Functions:

```javascript
// Tracks course access
trackCourseAccess(courseName)
// Adds course to accessed list
// Saves to localStorage

// Updates progress display
updateProgressSection()
// Shows quiz stats
// Lists accessed courses

// Saves data to localStorage
saveStudentData()
// Persists student data object
```

---

## 10. CSS Styling Guide

### Color Variables:
```css
:root {
    --primary: #00d4ff;        /* Main blue */
    --primary-dark: #0099cc;   /* Darker blue */
    --secondary: #7c3aed;      /* Purple accent */
    --accent: #10b981;         /* Green */
    --bg-dark: #0a0a1a;        /* Dark background */
    --bg-card: #12122a;        /* Card background */
    --text-primary: #ffffff;    /* White text */
    --text-secondary: #a0a0c0;  /* Gray text */
}
```

### Key CSS Classes:

| Class | Purpose |
|-------|---------|
| `.btn-primary` | Main action buttons |
| `.btn-secondary` | Secondary buttons |
| `.stat-card` | Statistics cards |
| `.quiz-card` | Quiz question container |
| `.playlist-card` | Video playlist card |
| `.modal` | Modal overlay |

### Responsive Breakpoints:
```css
@media (max-width: 768px) {
    /* Tablet and mobile styles */
}
```

---

## 11. Quiz System

### Question Format:
```javascript
{
    id: 1,
    question: "Question text here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: 1,  // Index of correct answer (0-3)
    category: "C"  // Programming language
}
```

### Categories:
- C Programming (15 questions)
- Python (15 questions)
- Java (15 questions)
- JavaScript (15 questions)
- HTML/CSS (15 questions)
- C++ (15 questions)
- General Programming (10 questions)

### Quiz Flow:
1. Click "Start Quiz"
2. 5 random questions selected
3. Answer each question
4. Navigate with Previous/Next
5. Click Finish to see results
6. Download certificate with custom name

### Scoring:
- 0/5: Participant
- 1/5: Beginner
- 2/5: Learner
- 3/5: Skilled
- 4/5: Expert
- 5/5: Master

---

## 12. Certificate Generation

### Canvas Dimensions:
- Width: 1000px
- Height: 700px

### Certificate Elements:
1. Gradient background (dark blue to purple)
2. Double border (cyan and purple)
3. Corner decorations (circles)
4. "CERTIFICATE OF ACHIEVEMENT" title
5. Student name (with glow effect)
6. Achievement description
7. Score display
8. Performance rating
9. Date issued
10. Platform logo
11. Unique certificate ID

### Download Format:
- PNG image file
- Filename: `LEARN_X_CODE_Certificate_[Name].png`

---

## 13. Video Playlists

### Available Languages:

#### C Programming
1. C Tutorial for Beginners
2. Variables & Data Types
3. Operators in C
4. Control Statements
5. Loops in C
6. Functions in C
7. Arrays in C
8. Pointers in C
9. Structures in C
10. File Handling in C

#### Python
1. Python Tutorial Full Course
2. Python Basics for Beginners
3. Learn Python - Full Course
4. Python in One Video
5. Python Functions
6. Python OOP Tutorial
7. Python Data Structures
8. Python for Data Science
9. Python Projects
10. Advanced Python

#### Java
1. Java Tutorial for Beginners
2. Java Full Course
3. Java OOP Concepts
4. Java Collections
5. Java Exceptions
6. Java Multithreading
7. Java File I/O
8. Java GUI Swing
9. Java JDBC Database
10. Java Projects

#### JavaScript
1. JavaScript Tutorial for Beginners
2. Learn JavaScript Full Course
3. JavaScript Crash Course
4. Event Loop Explained
5. ES6 Features
6. Async JavaScript
7. DOM Manipulation
8. Fetch API & AJAX
9. JavaScript Projects
10. Advanced JavaScript

#### C++
1. C++ Tutorial for Beginners
2. C++ Full Course
3. C++ OOP Concepts
4. C++ STL Tutorial
5. C++ Pointers
6. C++ Templates
7. C++ File Handling
8. C++ Exception Handling
9. C++ Data Structures
10. C++ Projects

#### HTML/CSS
1. HTML Crash Course
2. CSS Crash Course
3. HTML Full Course
4. CSS Complete Course
5. Flexbox Tutorial
6. CSS Grid Layout
7. Responsive Design
8. CSS Animations
9. Build a Website
10. Portfolio Project

---

## 14. Student Dashboard

### Dashboard Section:
- **Stats Grid**: 4 cards showing:
  - Quizzes Taken
  - Certificates Earned
  - Courses Accessed
  - Average Score

### Quiz Section:
- Quiz rules display
- Start Quiz button
- Question display with 4 options
- Navigation buttons
- Timer (visual only)
- Results with score circle
- Certificate download

### Study Section:
- Grid of playlist cards
- Hover to expand video list
- Click to redirect to YouTube
- Course access tracking

### Certificates Section:
- List of earned certificates
- Shows score and date
- Trophy icon indicator

### Progress Section:
- Total quizzes attempted
- Total correct answers
- Courses viewed count
- List of accessed courses

---

## 15. Teacher Dashboard

### Overview Section:
- Total Playlists count
- Total Videos count
- Active Students count
- Most Popular Course
- Playlist popularity bar chart

### Manage Playlists:
- Table with columns:
  - Playlist Name
  - Language (badge)
  - Videos count
  - Views count
  - Status
  - Actions (Edit/Delete)
- Add New Playlist button
- Modal form for adding

### Analytics Section:
- Weekly quiz attempts chart
- Average quiz score
- Certificates issued
- Video completions

### Students Section:
- Student table with:
  - Name
  - Email
  - Quizzes taken
  - Average score
  - Courses accessed
  - Last active

---

## 16. Data Storage

### LocalStorage Structure:
```javascript
studentData = {
    quizzesTaken: 0,          // Number of quizzes completed
    certificatesEarned: 0,    // Number of certificates
    coursesAccessed: [],      // Array of course names
    totalCorrect: 0,          // Total correct answers
    certificates: [           // Array of certificate records
        {
            date: "1/1/2024",
            score: 4,
            name: "Student Name"
        }
    ]
}
```

### Data Persistence:
- Saved to `localStorage` with key `studentData`
- Loaded on page load
- Updated after each quiz
- Updated when accessing courses

---

## 17. SpringBoot Backend Integration

### Project Setup:

#### 1. Create Spring Boot Project:
```bash
# Using Spring Initializr or Maven
mvn archetype:generate -DgroupId=com.learnxcode -DartifactId=learnxcode-backend
```

#### 2. Add Dependencies (pom.xml):
```xml
<dependencies>
    <!-- Spring Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Spring Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>
    
    <!-- MySQL Connector -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope>
    </dependency>
    
    <!-- Lombok (optional) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <optional>true</optional>
    </dependency>
</dependencies>
```

#### 3. Application Properties:
```properties
# application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/learnxcode
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Model Classes:

#### User.java:
```java
package com.learnxcode.model;

import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String email;
    private String password;
    private String name;
    private String role; // "student" or "teacher"
    
    // Getters and Setters
}
```

#### Quiz.java:
```java
package com.learnxcode.model;

import javax.persistence.*;

@Entity
@Table(name = "quizzes")
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    private int score;
    private String completedAt;
    
    // Getters and Setters
}
```

#### Playlist.java:
```java
package com.learnxcode.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "playlists")
public class Playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String language;
    private int views;
    private boolean active;
    
    @OneToMany(mappedBy = "playlist")
    private List<Video> videos;
    
    // Getters and Setters
}
```

### Controller Classes:

#### UserController.java:
```java
package com.learnxcode.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        // Validate credentials
        // Return user data or error
    }
    
    @GetMapping("/{id}/stats")
    public ResponseEntity<?> getStats(@PathVariable Long id) {
        // Return user statistics
    }
}
```

---

## 18. MySQL Database Schema

### Create Database:
```sql
CREATE DATABASE learnxcode;
USE learnxcode;
```

### Users Table:
```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(100) NOT NULL,
    role ENUM('student', 'teacher') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default users
INSERT INTO users (email, password, name, role) VALUES
('lasya1@gmail.com', 'mamali', 'Lasya', 'student'),
('lasya2@gmail.com', 'mamali', 'Lasya', 'teacher');
```

### Questions Table:
```sql
CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_answer INT NOT NULL,
    category VARCHAR(50) NOT NULL
);
```

### Quizzes Table:
```sql
CREATE TABLE quizzes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    score INT NOT NULL,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### Playlists Table:
```sql
CREATE TABLE playlists (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    language VARCHAR(50) NOT NULL,
    views INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Videos Table:
```sql
CREATE TABLE videos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    playlist_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    youtube_url VARCHAR(500) NOT NULL,
    order_num INT NOT NULL,
    FOREIGN KEY (playlist_id) REFERENCES playlists(id)
);
```

### Certificates Table:
```sql
CREATE TABLE certificates (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    quiz_id INT NOT NULL,
    name_on_cert VARCHAR(100) NOT NULL,
    issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
);
```

### Course Access Table:
```sql
CREATE TABLE course_access (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    playlist_id INT NOT NULL,
    accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (playlist_id) REFERENCES playlists(id)
);
```

---

## 19. API Endpoints

### Authentication:
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | User logout |

### Users:
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/{id}` | Get user details |
| GET | `/api/users/{id}/stats` | Get user statistics |
| PUT | `/api/users/{id}` | Update user |

### Quizzes:
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/questions/random` | Get 5 random questions |
| POST | `/api/quizzes` | Submit quiz result |
| GET | `/api/quizzes/user/{id}` | Get user's quiz history |

### Playlists:
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/playlists` | Get all playlists |
| POST | `/api/playlists` | Create playlist |
| PUT | `/api/playlists/{id}` | Update playlist |
| DELETE | `/api/playlists/{id}` | Delete playlist |

### Certificates:
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/certificates` | Generate certificate |
| GET | `/api/certificates/user/{id}` | Get user's certificates |

---

## 20. Security Features

### Frontend Security:
- Input validation on forms
- XSS prevention (no innerHTML with user data)
- Secure credential comparison

### Backend Security (SpringBoot):
- Password hashing with BCrypt
- JWT token authentication
- CORS configuration
- SQL injection prevention with JPA
- Input validation with Bean Validation

### Example Security Configuration:
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .cors().and()
            .csrf().disable()
            .authorizeRequests()
            .antMatchers("/api/auth/**").permitAll()
            .anyRequest().authenticated();
    }
}
```

---

## 21. Future Enhancements

### Planned Features:
1. **User Registration**: Allow new users to sign up
2. **Password Reset**: Forgot password functionality
3. **More Questions**: Expand to 500+ questions
4. **Timed Quizzes**: Actual countdown timer
5. **Leaderboard**: Compare scores with others
6. **Discussion Forum**: Students ask questions
7. **Live Classes**: Video conferencing integration
8. **Mobile App**: React Native or Flutter app
9. **AI Tutor**: ChatGPT integration for help
10. **Code Editor**: Practice coding in browser

### Technical Improvements:
- Add unit tests
- Implement CI/CD pipeline
- Docker containerization
- Cloud deployment (AWS/Azure)
- Performance optimization
- Accessibility improvements

---

## 22. Troubleshooting

### Common Issues:

#### 1. Login Not Working
**Problem**: Can't login with credentials
**Solution**: 
- Check email is exactly `lasya1@gmail.com` or `lasya2@gmail.com`
- Password is `mamali` (lowercase)
- Clear browser cache

#### 2. Quiz Not Starting
**Problem**: Start Quiz button not working
**Solution**:
- Check JavaScript console for errors
- Ensure script.js is loaded
- Refresh the page

#### 3. Certificate Not Downloading
**Problem**: Download doesn't start
**Solution**:
- Allow pop-ups in browser
- Try different browser
- Check if canvas is supported

#### 4. Videos Not Playing
**Problem**: YouTube links not opening
**Solution**:
- Click directly on video link
- Allow pop-ups
- Check internet connection

#### 5. Data Not Saving
**Problem**: Progress resets
**Solution**:
- Don't use incognito mode
- Don't clear localStorage
- Use same browser

---

## 23. Credits

### Development Team:
- **Project**: LEARN_X_CODE Learning Platform
- **Purpose**: Educational Project
- **Year**: 2024

### Resources Used:
- YouTube for video tutorials
- MDN Web Docs for HTML/CSS/JS reference
- Spring.io for backend documentation
- MySQL documentation

### Special Thanks:
- All open-source contributors
- Programming tutorial creators on YouTube
- Stack Overflow community

---

## Quick Reference Card

### Files:
```
index.html   → Landing + Login
student.html → Student Dashboard
teacher.html → Teacher Dashboard
style.css    → All Styles
script.js    → All Logic
```

### Logins:
```
Student: lasya1@gmail.com / mamali
Teacher: lasya2@gmail.com / mamali
```

### Features:
```
✓ 100 Quiz Questions
✓ 5 Random per Quiz
✓ Certificate Generation
✓ 60 YouTube Videos
✓ 6 Programming Languages
✓ Progress Tracking
```

---

**End of Documentation**

*This README provides comprehensive documentation for creating a 40+ page project report. Each section can be expanded with screenshots, diagrams, and additional details as needed.*

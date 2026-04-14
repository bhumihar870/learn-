/**
 * LEARN_X_CODE - Teacher Dashboard JavaScript
 * Handles playlist management, students, and analytics
 */

// Global state
let currentUser = null;
let currentEditPlaylist = null;
let customPlaylists = [];

// Initialize dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    currentUser = auth.checkAuth();
    if (!currentUser) return;

    // Verify user is a teacher
    if (currentUser.role !== 'teacher') {
        window.location.href = 'student-dashboard.html';
        return;
    }

    // Update UI with user info
    updateUserInfo();
    
    // Initialize navigation
    initNavigation();
    
    // Load playlists
    loadPlaylists();
});

/**
 * Update user information in sidebar
 */
function updateUserInfo() {
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');

    if (currentUser) {
        const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
        userAvatar.textContent = initials;
        userName.textContent = currentUser.name;
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

    // Hide edit playlist card when navigating
    if (sectionName === 'playlists') {
        document.getElementById('editPlaylistCard').classList.add('hidden');
    }
}

/**
 * Load playlists
 */
function loadPlaylists() {
    const playlistsList = document.getElementById('playlistsList');
    if (!playlistsList) return;

    // Load custom playlists from storage
    customPlaylists = JSON.parse(localStorage.getItem('customPlaylists') || '[]');

    // Default playlists
    const defaultPlaylists = [
        { id: 'python', name: 'Python', icon: 'Py', gradient: 'linear-gradient(135deg, #3776AB, #FFD43B)', description: 'Complete Python programming course', videos: COURSE_VIDEOS.python.length },
        { id: 'java', name: 'Java', icon: 'Ja', gradient: 'linear-gradient(135deg, #007396, #ED8B00)', description: 'Java programming fundamentals', videos: COURSE_VIDEOS.java.length },
        { id: 'javascript', name: 'JavaScript', icon: 'JS', gradient: 'linear-gradient(135deg, #F7DF1E, #323330)', description: 'Web development with JavaScript', videos: COURSE_VIDEOS.javascript.length, textColor: '#323330' },
        { id: 'c', name: 'C Programming', icon: 'C', gradient: 'linear-gradient(135deg, #00599C, #004482)', description: 'C programming basics to advanced', videos: COURSE_VIDEOS.c.length },
        { id: 'cpp', name: 'C++', icon: 'C++', gradient: 'linear-gradient(135deg, #00599C, #004482)', description: 'Object-oriented programming with C++', videos: COURSE_VIDEOS.cpp.length },
        { id: 'sql', name: 'SQL', icon: 'DB', gradient: 'linear-gradient(135deg, #336791, #F29111)', description: 'Database management with SQL', videos: COURSE_VIDEOS.sql.length },
        { id: 'html', name: 'HTML/CSS', icon: 'H5', gradient: 'linear-gradient(135deg, #E34F26, #1572B6)', description: 'Web design fundamentals', videos: COURSE_VIDEOS.html.length },
        { id: 'react', name: 'React', icon: 'Re', gradient: 'linear-gradient(135deg, #61DAFB, #20232A)', description: 'Modern frontend with React', videos: COURSE_VIDEOS.react.length }
    ];

    // Combine default and custom playlists
    const allPlaylists = [...defaultPlaylists, ...customPlaylists];

    playlistsList.innerHTML = allPlaylists.map(playlist => `
        <div class="course-item">
            <div class="course-item-header">
                <div class="course-item-icon" style="background: ${playlist.gradient}; ${playlist.textColor ? 'color: ' + playlist.textColor : ''}">${playlist.icon}</div>
                <h3>${playlist.name}</h3>
            </div>
            <p>${playlist.description}</p>
            <div class="course-item-meta">
                <span>${playlist.videos || 0} Videos</span>
                <button class="video-action" onclick="editPlaylist('${playlist.id}', '${playlist.name}')">
                    Edit Videos
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Edit playlist - show videos
 */
function editPlaylist(playlistId, playlistName) {
    currentEditPlaylist = playlistId;
    
    const editPlaylistCard = document.getElementById('editPlaylistCard');
    const playlistVideosList = document.getElementById('playlistVideosList');
    const editPlaylistName = document.getElementById('editPlaylistName');

    editPlaylistName.textContent = 'Edit ' + playlistName + ' Videos';

    // Get videos for this playlist
    let videos = COURSE_VIDEOS[playlistId] || [];

    // Check for custom videos
    const customVideos = JSON.parse(localStorage.getItem('customVideos_' + playlistId) || '[]');
    videos = [...videos, ...customVideos];

    // Render videos
    playlistVideosList.innerHTML = videos.length > 0 ? videos.map((video, index) => `
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
            <div style="display: flex; gap: 0.5rem;">
                <a href="${video.url}" target="_blank" class="video-action">
                    View
                </a>
                ${video.custom ? `
                    <button class="video-action" style="border-color: var(--error); color: var(--error);" onclick="deleteVideo('${playlistId}', ${index})">
                        Delete
                    </button>
                ` : ''}
            </div>
        </div>
    `).join('') : '<p style="color: var(--text-muted); text-align: center; padding: 2rem;">No videos in this playlist yet.</p>';

    // Show the edit card
    editPlaylistCard.classList.remove('hidden');
}

/**
 * Hide edit playlist card
 */
function hideEditPlaylist() {
    document.getElementById('editPlaylistCard').classList.add('hidden');
    currentEditPlaylist = null;
}

/**
 * Show add playlist modal
 */
function showAddPlaylistModal() {
    document.getElementById('addPlaylistModal').classList.add('active');
}

/**
 * Show add video modal
 */
function showAddVideoModal() {
    if (!currentEditPlaylist) {
        alert('Please select a playlist first.');
        return;
    }
    document.getElementById('addVideoModal').classList.add('active');
}

/**
 * Close modal
 */
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

/**
 * Add new playlist
 */
function addPlaylist(event) {
    event.preventDefault();

    const name = document.getElementById('playlistName').value.trim();
    const icon = document.getElementById('playlistIcon').value.trim();
    const gradient = document.getElementById('playlistColor').value;
    const description = document.getElementById('playlistDescription').value.trim();

    const newPlaylist = {
        id: 'custom_' + Date.now(),
        name: name,
        icon: icon,
        gradient: gradient,
        description: description,
        videos: 0,
        custom: true
    };

    // Save to storage
    customPlaylists.push(newPlaylist);
    localStorage.setItem('customPlaylists', JSON.stringify(customPlaylists));

    // Reload playlists
    loadPlaylists();

    // Close modal and reset form
    closeModal('addPlaylistModal');
    document.getElementById('addPlaylistForm').reset();

    alert('Playlist added successfully!');
}

/**
 * Add new video to current playlist
 */
function addVideo(event) {
    event.preventDefault();

    if (!currentEditPlaylist) {
        alert('No playlist selected.');
        return;
    }

    const title = document.getElementById('videoTitle').value.trim();
    const url = document.getElementById('videoUrl').value.trim();
    const duration = document.getElementById('videoDuration').value.trim();

    const newVideo = {
        id: Date.now(),
        title: title,
        url: url,
        duration: duration,
        custom: true
    };

    // Get existing custom videos
    const customVideos = JSON.parse(localStorage.getItem('customVideos_' + currentEditPlaylist) || '[]');
    customVideos.push(newVideo);
    localStorage.setItem('customVideos_' + currentEditPlaylist, JSON.stringify(customVideos));

    // Reload the playlist
    const playlistName = document.getElementById('editPlaylistName').textContent.replace('Edit ', '').replace(' Videos', '');
    editPlaylist(currentEditPlaylist, playlistName);

    // Close modal and reset form
    closeModal('addVideoModal');
    document.getElementById('addVideoForm').reset();

    alert('Video added successfully!');
}

/**
 * Delete a custom video
 */
function deleteVideo(playlistId, videoIndex) {
    if (!confirm('Are you sure you want to delete this video?')) return;

    // Get default videos count
    const defaultVideos = COURSE_VIDEOS[playlistId] || [];
    const customVideoIndex = videoIndex - defaultVideos.length;

    if (customVideoIndex >= 0) {
        const customVideos = JSON.parse(localStorage.getItem('customVideos_' + playlistId) || '[]');
        customVideos.splice(customVideoIndex, 1);
        localStorage.setItem('customVideos_' + playlistId, JSON.stringify(customVideos));

        // Reload the playlist
        const playlistName = document.getElementById('editPlaylistName').textContent.replace('Edit ', '').replace(' Videos', '');
        editPlaylist(playlistId, playlistName);
    }
}

// Make functions globally accessible
window.showSection = showSection;
window.editPlaylist = editPlaylist;
window.hideEditPlaylist = hideEditPlaylist;
window.showAddPlaylistModal = showAddPlaylistModal;
window.showAddVideoModal = showAddVideoModal;
window.closeModal = closeModal;
window.addPlaylist = addPlaylist;
window.addVideo = addVideo;
window.deleteVideo = deleteVideo;

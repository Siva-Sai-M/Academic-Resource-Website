// home.js - Handles homepage navigation and login state

function goToLogin() {
    window.location.href = 'page1.html?mode=login';
}

function goToSignUp() {
    window.location.href = 'page1.html?mode=signup';
}

function goToGetStarted() {
    // Simulate login for demo; in real app, check login state
    localStorage.setItem('loggedIn', 'true');
    window.location.href = 'page3.html';
}

function checkLoginState() {
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = 'page3.html';
    }
}

document.addEventListener('DOMContentLoaded', checkLoginState);

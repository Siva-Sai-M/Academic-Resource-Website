function page2button() {
    window.location.href = "page3.html";
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}
// Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const isDarkMode = body.classList.toggle('dark-mode');
    
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('dark-mode', isDarkMode);
}

document.addEventListener("DOMContentLoaded", function() {
    // Theme toggle logic
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    }
});

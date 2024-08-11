document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle between light and dark modes
    function toggleTheme() {
        const body = document.body;
        const themeIcon = document.getElementById('theme-icon');
        const isDarkMode = body.classList.toggle('dark-mode');
        
        // Update the icon
        if (isDarkMode) {
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }

        // Persist the theme preference
        localStorage.setItem('dark-mode', isDarkMode);
    }

    // Check the stored preference and apply the theme
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    const themeIcon = document.getElementById('theme-icon');

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.textContent = '🌙';
    }
});

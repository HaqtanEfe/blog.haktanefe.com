document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle between light and dark modes
    function toggleTheme() {
        const body = document.body;
        const themeLabel = document.getElementById('theme-label');
        const isDarkMode = body.classList.toggle('dark-mode');
        
        // Update the label text
        if (isDarkMode) {
            themeLabel.textContent = 'Dark Mode';
        } else {
            themeLabel.textContent = 'Light Mode';
        }
    }

    // Persist the theme preference using localStorage
    const themeToggleSwitch = document.getElementById('switch');
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeToggleSwitch.checked = true;
        document.getElementById('theme-label').textContent = 'Dark Mode';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-label').textContent = 'Light Mode';
    }

    themeToggleSwitch.addEventListener('change', function() {
        toggleTheme();
        localStorage.setItem('dark-mode', themeToggleSwitch.checked);
    });
});

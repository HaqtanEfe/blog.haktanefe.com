// Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const isDarkMode = body.classList.toggle('dark-mode');
    
    // Update the icon
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';

    // Persist the theme preference
    localStorage.setItem('dark-mode', isDarkMode);
}

// Ensure the correct theme is applied on page load
document.addEventListener("DOMContentLoaded", function() {
    // Theme toggle logic, only if the theme icon is present on the page
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';

        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.textContent = '🌙';
        }
    }

    // Check login status and show the "Post" button if logged in
    const postButton = document.getElementById('post-button');
    if (postButton) {
        const isLoggedIn = localStorage.getItem('logged-in') === 'true';

        if (isLoggedIn) {
            postButton.style.display = 'inline-block';
        }
    }

    // Handle login form submission, only if the login form is present
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Example validation (replace with real authentication logic)
            if (username === "user" && password === "password") {
                alert("Login successful!");
                localStorage.setItem('logged-in', 'true');
                window.location.href = "index.html"; // Redirect to the homepage after login
            } else {
                loginError.textContent = "Invalid username or password.";
                loginError.style.display = "block";
            }
        });
    }
});

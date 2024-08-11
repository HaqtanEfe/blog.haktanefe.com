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

    // Show "Post" button if logged in
    const postButton = document.getElementById('post-button');
    if (postButton) {
        const isLoggedIn = localStorage.getItem('logged-in') === 'true';
        if (isLoggedIn) {
            postButton.style.display = 'inline-block';
        }

        // Handle "Post a Blog" button click
        postButton.addEventListener('click', function() {
            const postForm = document.getElementById('post-form');
            postForm.style.display = 'block';
        });
    }

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === "user" && password === "password") {
                alert("Login successful!");
                localStorage.setItem('logged-in', 'true');
                window.location.href = "index.html";
            } else {
                loginError.textContent = "Invalid username or password.";
                loginError.style.display = "block";
            }
        });
    }

    // Handle post form submission
    const postForm = document.getElementById('post-form');
    if (postForm) {
        postForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const postTitle = document.getElementById('post-title').value;
            const postContent = document.getElementById('post-content').value;

            const postsSection = document.getElementById('posts');
            const newPost = document.createElement('article');
            newPost.classList.add('post');
            newPost.innerHTML = `
                <h2>${postTitle}</h2>
                <p class="date">Published on ${new Date().toLocaleDateString()}</p>
                <p>${postContent}</p>
            `;
            postsSection.prepend(newPost);

            // Clear the form and hide it
            postForm.reset();
            postForm.style.display = 'none';
        });
    }
});

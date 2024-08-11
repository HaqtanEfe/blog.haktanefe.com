// Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const isDarkMode = body.classList.toggle('dark-mode');
    
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('dark-mode', isDarkMode);
}

// Function to save posts to localStorage
function savePostsToLocalStorage(posts) {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

// Function to load posts from localStorage
function loadPostsFromLocalStorage() {
    const postsJSON = localStorage.getItem('blogPosts');
    return postsJSON ? JSON.parse(postsJSON) : [];
}

// Function to display posts on the page
function displayPosts(posts) {
    const postsSection = document.getElementById('posts');
    postsSection.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const newPost = document.createElement('article');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">Published on ${post.date}</p>
            <p>${post.content}</p>
        `;
        postsSection.prepend(newPost);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Theme toggle logic
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        const isDarkMode = localStorage.getItem('dark-mode') === 'true';
        document.body.classList.toggle('dark-mode', isDarkMode);
        themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    }

    // Load and display posts from localStorage
    const posts = loadPostsFromLocalStorage();
    displayPosts(posts);
});

document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');

    // Function to toggle dark mode
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const themeIcon = document.getElementById('theme-icon');
        themeIcon.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
    }

    // Fetch and display posts
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.classList.add('post');

                const title = document.createElement('h2');
                title.textContent = post.title;
                postElement.appendChild(title);

                const date = document.createElement('p');
                date.classList.add('date');
                date.textContent = `Published on ${post.date}`;
                postElement.appendChild(date);

                const description = document.createElement('p');
                const maxLength = 200;
                if (post.description.length > maxLength) {
                    description.textContent = `${post.description.substring(0, maxLength)}...`;
                    const readMore = document.createElement('a');
                    readMore.href = 'post.html';
                    readMore.classList.add('read-more');
                    readMore.textContent = 'Read More';
                    description.appendChild(readMore);
                } else {
                    description.textContent = post.description;
                }
                postElement.appendChild(description);

                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error loading posts:', error);
        });

    // Initialize the theme toggle icon
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.addEventListener('click', toggleTheme);

    // Set the initial theme icon based on the current theme
    themeIcon.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '☀️';
});

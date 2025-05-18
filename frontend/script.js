// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll('#slideshow .slide');
function showSlides() {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === slideIndex) {
            slide.classList.add('active');
        }
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}
if (slides.length > 0) {
    showSlides();
}

// Video playlist functionality
const player = document.getElementById('videoPlayer');
const items = document.querySelectorAll('#playlist li');
items.forEach(item => {
    item.addEventListener('click', () => {
        const src = item.getAttribute('data-src');
        player.querySelector('source').src = src;
        player.load();
        player.play();
    });
});

// Blog posts
async function loadPosts() {
    const res = await fetch('/api/posts');
    const posts = await res.json();
    const container = document.getElementById('posts');
    container.innerHTML = '';
    posts.forEach(p => {
        const article = document.createElement('article');
        article.textContent = p.content;
        container.appendChild(article);
    });
}

document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const content = document.getElementById('postContent').value.trim();
    if (!content) return;
    await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    });
    document.getElementById('postContent').value = '';
    loadPosts();
});

document.addEventListener('DOMContentLoaded', loadPosts);

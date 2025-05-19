// Slideshow functionality
// Rotate through slides using a fixed interval
let slideIndex = 0;
const slides = document.querySelectorAll('#slideshow .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

if (slides.length > 0) {
    showSlide(slideIndex);
    setInterval(() => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, 3000); // Change image every 3 seconds
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

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

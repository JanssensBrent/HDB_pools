document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.querySelector('.scroll-button');
    scrollButton.addEventListener('click', scrollDown);
});

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
}
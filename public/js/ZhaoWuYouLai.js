const slides = document.querySelectorAll('#carousel img');
const dots = document.querySelectorAll('.dot');

function currentSlide(n) {
    slides.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}
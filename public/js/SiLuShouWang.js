// 1. 轮播图逻辑
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.dot');

function currentSlide(index) {
    images[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = index;
    
    images[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// 2. 文字显示逻辑
function showSilkContent() {
    const el = document.getElementById('silk-interactive');
    if (el) {
        el.style.opacity = "1";
        el.style.visibility = "visible";
    }
}
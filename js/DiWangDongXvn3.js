// 【左侧逻辑】点击圆点切换图片
function currentSlide(n) {
    const slides = document.querySelectorAll('#carousel img');
    const dots = document.querySelectorAll('.dot');

    // 移除所有激活状态
    slides.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 激活被选中的那一个
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}

// 【右侧逻辑】点击按钮显示文字（只显不隐）
function showWuContent() {
    const el = document.getElementById('wu-content');
    if (el) {
        el.style.opacity = "1";
        el.style.visibility = "visible";
    }
}
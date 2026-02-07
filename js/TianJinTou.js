// 获取所有的图片和小白点
const slides = document.querySelectorAll('#carousel img');
const dots = document.querySelectorAll('.dot');

/**
 * 切换到指定索引的图片
 * @param {number} n - 图片的索引 (0-3)
 */
function currentSlide(n) {
    // 1. 移除所有图片和点的 active 状态
    slides.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 2. 为点击的那一个添加 active 状态
    slides[n].classList.add('active');
    dots[n].classList.add('active');
}
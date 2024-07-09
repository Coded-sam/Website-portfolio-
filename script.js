document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const increaseTextBtn = document.getElementById('increase-text');
    const decreaseTextBtn = document.getElementById('decrease-text');
    let currentFontSize = 16; // Initial font size in pixels

    menuToggle.addEventListener('click', () => {menu.classList.toggle('menu-visible');
    });

    increaseTextBtn.addEventListener('click', () => {
        currentFontSize += 2;
        document.body.style.fontSize = `${currentFontSize}px`;
    });

    decreaseTextBtn.addEventListener('click', () => {
        currentFontSize -= 2;
        document.body.style.fontSize = `${currentFontSize}px`;
    });
});
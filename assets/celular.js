const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');
const menuHiddenElements = document.querySelectorAll('.menu-hidden');

hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
    hamburger.classList.toggle('active');

    menuHiddenElements.forEach((element) => {
        element.style.zIndex = menuList.classList.contains('active') ? -1 : 2;
    });
});

function adjustTextPosition() {
    const textElement = document.getElementById('responsive-text');
    const imageElement = document.getElementById('imagem-inicio');
    const imageRight = imageElement.getBoundingClientRect().right;

    textElement.style.marginRight = window.innerWidth - imageRight + 'px';
}

window.addEventListener('resize', adjustTextPosition);
adjustTextPosition();


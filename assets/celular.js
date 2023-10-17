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

const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu-list');

hamburger.addEventListener('click', () => {
    menuList.classList.toggle('active');
    hamburger.classList.toggle('active');
});

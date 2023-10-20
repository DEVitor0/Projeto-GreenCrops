//Menu hamburguer
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

//adaptação do container h1
function adjustTextPosition() {
    const textElement = document.getElementById('responsive-text');
    const imageElement = document.getElementById('imagem-inicio');
    const imageRight = imageElement.getBoundingClientRect().right;

    textElement.style.marginRight = window.innerWidth - imageRight + 'px';
}

window.addEventListener('resize', adjustTextPosition);
adjustTextPosition();

//animção de abertura do icone
function toggleItem(item) {
    const itemSelecionado = document.getElementById('item-selecionado');
    const selectedIcon = document.getElementById('selected-icon');
    const selectedText = document.getElementById('selected-text');
    
    if (itemSelecionado.style.display === 'none' || itemSelecionado.style.display === '') {
        selectedIcon.textContent = item.querySelector('.item-icon').textContent.trim();
        selectedText.textContent = item.querySelector('.item-text').textContent;
        itemSelecionado.style.display = 'flex';
        
        const todosItens = document.querySelectorAll('.itens');
        todosItens.forEach(i => {
            if (i !== item) {
                i.style.display = 'none';
            }
        });

        item.classList.add('expandido');
        selectedIcon.style.opacity = 1; 
    } else {
        itemSelecionado.style.display = 'none';
        const todosItens = document.querySelectorAll('.itens');
        todosItens.forEach(i => {
            i.style.display = 'flex';
            i.classList.remove('expandido');
            i.querySelector('.item-icon').style.opacity = 1; 
        });
    }
}
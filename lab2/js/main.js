function toggleMenu() {
    const menu = document.querySelector('.header__menu ul');

    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'flex' : 'none';
}


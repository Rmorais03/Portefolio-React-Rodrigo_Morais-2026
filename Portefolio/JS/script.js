document.addEventListener('DOMContentLoaded', () => {
    
    const mobileMenu = document.getElementById('mobile-menu');
    const btnOpen = document.getElementById('btn-mobile-open');
    const btnClose = document.getElementById('btn-mobile-close');
    const backdrop = document.getElementById('mobile-backdrop');
    const mobileLinks = document.querySelectorAll('.js-mobile-link');

    function openMenu() {
        mobileMenu.classList.add('is-open');
    }

    function closeMenu() {
        mobileMenu.classList.remove('is-open');
    }

    // Ouvir os cliques
    if(btnOpen) btnOpen.addEventListener('click', openMenu);
    if(btnClose) btnClose.addEventListener('click', closeMenu);
    if(backdrop) backdrop.addEventListener('click', closeMenu);

    // Fechar ao clicar num link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
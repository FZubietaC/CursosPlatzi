const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const navMobile = document.querySelector('.mobile-menu');


navEmail.addEventListener('click',toogleDesktopMenu);
iconMenu.addEventListener('click',toogleMobileMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    navMobile.classList.toggle('inactive');
}


const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click',toogleDesktopMenu);

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}


const hamburgerMenu = document.querySelector('.hamburger-menu');
const newNavbar = document.querySelector('.new-navbar');

hamburgerMenu.addEventListener('click', () => {
    newNavbar.classList.toggle('active');
});

function checkResponsive() {
    if (window.innerWidth > 767) {
        newNavbar.classList.remove('active');
    }
}

checkResponsive();
window.addEventListener('resize', checkResponsive);

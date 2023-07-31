const manuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const IconButton = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

manuEmail.addEventListener("click", toggleDesktopMenu);
IconButton.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    menuMobile.classList.toggle("inactive");
}
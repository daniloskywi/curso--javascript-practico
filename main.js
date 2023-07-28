const manuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

manuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle("inactive");
}
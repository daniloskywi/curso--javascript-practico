const manuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const IconButton = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

manuEmail.addEventListener("click", toggleDesktopMenu);
IconButton.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleCarritoDeCompras)


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive")
    if(!isAsideClosed){
        aside.classList.add("inactive")
    }
    DesktopMenu.classList.toggle("inactive");
}


function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive")
    }
    menuMobile.classList.toggle("inactive");

}


function toggleCarritoDeCompras (){
    //aside.classList.toggle("inactive");
    const isMovileMenuClosed = menuMobile.classList.contains("inactive");

    if(!isMovileMenuClosed){
        menuMobile.classList.add("inactive")
    }
    aside.classList.toggle("inactive");
    //hacer que el menu desaparesca, aun que no es necesario nos sirveria de practica
}
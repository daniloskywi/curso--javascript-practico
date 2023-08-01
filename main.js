const manuEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const IconButton = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

const carsContainer = document.querySelector(".cards-container")

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

const productList = [];
productList.push({
    name: "Bike",
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "cafetera",
    precio: 200,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Portatil",
    precio: 600,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts(Array){
   
for (product of Array){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const img = document.createElement("img");
    img.setAttribute("src", product.imagen)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product-info");
    const productPrecio = document.createElement("p");
    productPrecio.innerHTML = "$" + product.precio;
    const productName = document.createElement("p");
    productName.innerHTML = "name:" + product.name;

    productDiv.appendChild(productPrecio)
    productDiv.appendChild(productName)

    const productFigure = document.createElement("figure");
    const productImg = document.createElement("img");
    productImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productFigure.appendChild(productImg)

    productInfo.appendChild(productDiv)
    productInfo.appendChild(productFigure)

    productCard.appendChild(img)
    productCard.appendChild(productInfo)

    carsContainer.appendChild(productCard)
};
 /*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>

    </div>
*/
}
renderProducts(productList);


const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const navMobile = document.querySelector('.mobile-menu');
const IconCart = document.querySelector('.navbar-shopping-cart');
const MenuCart = document.querySelector('.my-order-container');
const cardscontainer = document.querySelector('.cards-container');

navEmail.addEventListener('click',toogleDesktopMenu);
iconMenu.addEventListener('click',toogleMobileMenu);
IconCart.addEventListener('click',toogleCartMenu);


function toogleDesktopMenu() {
    const isMenuCartClosed = MenuCart.classList.contains('inactive');
    if(!isMenuCartClosed){
        MenuCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    const isMenuCartClosed = MenuCart.classList.contains('inactive');
    if(!isMenuCartClosed){
        MenuCart.classList.add('inactive');
    }
    navMobile.classList.toggle('inactive');
}

function toogleCartMenu(){
    const isMobileMenuClosed = navMobile.classList.contains('inactive');
    const isDesktopMenuClosed= desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
            navMobile.classList.add('inactive'); 
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    MenuCart.classList.toggle('inactive');  
}


const ProductList = [];

ProductList.push({
    name:'Bike',
    price: 20,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

ProductList.push({
    name:'Telescope',
    price: 120,
    image:'https://images.pexels.com/photos/2568091/pexels-photo-2568091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

ProductList.push({
    name:'car',
    price: 220,
    image:'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

ProductList.push({
    name:'Strawberries',
    price: 15,
    image:'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


for (product of ProductList){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');
    
    const img=document.createElement('img');
    img.setAttribute('src',product.image)

    const productinfo=document.createElement('div');
    productCard.classList.add('product-info');

    const productinfoDiv =document.createElement('div');
    
    const productprice = document.createElement('p');
    productprice.innerText = '$'+product.price;
    const productname = document.createElement('p');
    productname.innerText = product.name;
    
    productinfoDiv.appendChild(productprice);
    productinfoDiv.appendChild(productname);
    
    const productinfofigure =document.createElement('figure');
    const productImgCart=document.createElement('img');
    productImgCart.setAttribute('src','./Platzi_YardSale_Icons/bt_add_to_cart.svg');

    productinfofigure.appendChild(productImgCart);

    productinfo.appendChild(productinfoDiv);
    productinfo.appendChild(productinfofigure);

    productCard.appendChild(img);
    productCard.appendChild(productinfo);

    cardscontainer.appendChild(productCard);
}


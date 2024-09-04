const heroImage = document.getElementById('heroImage');
const dishes = document.querySelectorAll('.dish');
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

let cart = [];

dishes.forEach(dish => {
  dish.addEventListener('click', () => {
    const newImageSrc = dish.getAttribute('data-img');

    // heroImage.src = newImageSrc;
    heroImage.setAttribute("src" , newImageSrc)


  });
});

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    cart.push({ name});
    updateCartCount();
  });
});

function updateCartCount() {
  cartCount.textContent = cart.length;
}
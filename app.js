const cartBtn = document.getElementById("cart-btn");
const cart = document.getElementById("cart");
const closeCart = document.getElementById("close-cart");

cartBtn.onclick = () => cart.classList.remove("hidden");
closeCart.onclick = () => cart.classList.add("hidden");


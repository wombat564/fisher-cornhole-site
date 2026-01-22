const products = [
  {
    id: 1,
    name: "Classic Tee",
    price: 25,
    image: "https://picsum.photos/400/400"
  },
  {
    id: 2,
    name: "Premium Black Tee",
    price: 28,
    image: "https://via.placeholder.com/300x300?text=Black+Tee"
  }
];

const productContainer = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${product.image}"
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button>Add to Cart</button>
  `;
  productContainer.appendChild(div);
});


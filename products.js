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
    image: "https://picsum.photos/400/400"
  }
];

const productContainer = document.getElementById("products");

products.forEach(product => {
  const div = document.createElement("div");

  div.innerHTML = `
    <img src="${product.image}" />
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button data-id="${product.id}">Buy Now</button>
  `;

  const button = div.querySelector("button");

  button.addEventListener("click", async () => {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: product
      })
    });

    const data = await res.json();
    window.location.href = data.url;
  });

  productContainer.appendChild(div);
});




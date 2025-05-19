const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 1500,
    image: "images/tshirt.jpg",
    category: "tshirt",
  },
  {
    id: 2,
    name: "Shoes",
    price: 3500,
    image: "images/shoes.jpg",
    category: "shoes",
  },
  {
    id: 3,
    name: "Watch",
    price: 5000,
    image: "images/watch.jpg",
    category: "watch",
  },
  {
    id: 4,
    name: "Pants",
    price: 2000,
    image: "images/pants.jpg",
    category: "pants",
  },
  {
    id: 5,
    name: "Dress",
    price: 4500,
    image: "images/dress.jpg",
    category: "dress",
  },
  {
    id: 6,
    name: "Jacket",
    price: 6000,
    image: "images/jacket.jpg",
    category: "jackets",
  },
  {
    id: 7,
    name: "Slippers",
    price: 1200,
    image: "images/slippers.jpg",
    category: "slippers",
  },
];

const productList = document.getElementById("product-list");
function displayProducts(filteredProducts) {
  if (!productList) return;
  productList.innerHTML = "";
  filteredProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Rs. ${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productList.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  alert(`${product.name} added to cart!`);
}

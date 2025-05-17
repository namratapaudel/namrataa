const products = [
  {
    id: 1,
    name: "T-shirt",
    price: 1500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Shoes",
    price: 3500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Watch",
    price: 5000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Pants",
    price: 2000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Dress",
    price: 4500,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Jacket",
    price: 6000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Slippers",
    price: 1200,
    image: "https://via.placeholder.com/150",
  },
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("searchInput");

function displayProducts(filteredProducts) {
  productList.innerHTML = ""; // Clear previous content
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

// Initial display
displayProducts(products);

// Search functionality
searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  displayProducts(filtered);
});

const productsContainer = document.getElementById("products-container");

function fetchProducts(perProductInput, productOrder) {
  let url = `https://fakestoreapi.com/products`;

  if (perProductInput) {
    url += `?limit=${perProductInput}`;
  }

  if (productOrder) {
    url += `?sort=${productOrder}`;
  }
  console.log(url);
  //fetch("https://fakestoreapi.com/products")
  fetch(url)
    .then((res) => res.json())
    .then((products) => {
      console.log(products);
      const productItems = products.map((product) => {
        // console.log(product.rating.count)
        const productItemHTML = `
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a
        href="product_details.html?productId=${product.id}"
        class="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="ecommerce"
          class="object-cover object-center w-full h-full block"
          src="${product.image}"
        />
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          ${product.category}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">
          ${product.title}
        </h2>
        <p class="mt-1">${product.price}</p>
        
      </div>
    </div>
    `;
        return productItemHTML;
      });
      // console.log(productItems);
      // console.log(typeof productItems);
      const productsHTML = productItems.join(" ");
      productsContainer.innerHTML = productsHTML;
    });
}

fetchProducts();
const perProductInput = document.getElementById("perProductInput");

perProductInput.addEventListener("blur", (e) => {
  fetchProducts(e.target.value);
});


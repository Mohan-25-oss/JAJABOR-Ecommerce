const params = new URLSearchParams(window.location.search);
// console.log(params);
const value = params.get("productId");
console.log(value);

const productContainer = document.getElementById("product-container")
fetch(`https://fakestoreapi.com/products/${value}`)
    .then(res => res.json())
    .then(product => {
        console.log(product);
        const productHTML = `
    <div class="container px-5 py-24 mx-auto">
            <div id="products-container" class="flex flex-wrap -m-4">
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src=" ${product.image}">
                    </a>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${product.catagory}</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p class="mt-1">${product.price}</p>
        </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=600">
        </a>
        <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
        <p class="mt-1">${product.price}</p>
        </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=600">
            </a>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
        <p class="mt-1">${product.price}</p>
            <p class="mt-1"></p>
        </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=600">
        </a>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
            <p class="mt-1">
            <p class="mt-1">${product.price}</p></p>
        </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=600">
        </a>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            <p class="mt-1">$16.00</p>
        </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=600">
        </a>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
            <p class="mt-1">        <p class="mt-1">${product.price}</p></p>
        </div>
        </div>
        <div class="lg:w-14 md:w-1/2 p-4 w-full">
        <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=600">
        </a>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
            <p class="mt-1">$12.00</p>
        </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.pexels.com/photos/747470/pexels-photo-747470.jpeg?auto=compress&cs=tinysrgb&w=600">
        </a>
        <div class="mt-4">
            <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
            <p class="mt-1"><p class="mt-1">${product.price}</p></p>
        </div>
        </div>
    </div>
    </div >
        `;
        console.log(productHTML.HTML);
        productContainer.innerHTML = productHTML;
    });

// fetch All Products
const productContainer = document.getElementById("products-container");
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    console.log(products)
    const productsItems = products.map((product) => {
      const productsItemHTML = `
        <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href="productdetails.html" class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full &"src="${product.image}">
            </a>
            <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${product.category}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">${product.title}</h2>
                <p class="mt-1">${product.price}</p>
            </div>
        </div>
        `;
      return productsItemHTML;
    });
    console.log(productsItems);
    const productsHTML = productsItems.join("");
    console.log(productsHTML);
    productsContainer.innerHTML = productsHTML;
  });


const productsContainer = document.getElementById("products-container");
fetch("https://fakestoreapi.com/products/categories");
    // Hamburger menu start
const hamburgerBtn = document.getElementById("hamburger-menu");
// const mobileNavbar = document.getElementById("mobile-navbar");
const closeBtn = document.getElementById("close-btn");
console.log(mobileNavbar);
console.log(hamburgerBtn);
hamburgerBtn.addEventListener("click", function () {
  console.log(mobileNavbar.classList);
  mobileNavbar.classList.remove("hidden");
  mobileNavbar.classList.add("flex");
  hamburgerBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  console.log(mobileNavbar.classList);
});

// hamburgerBtn.addEventListener("click", function(){
// //   console.log(mobileNavbar.classList);
//     mobileNavbar.classList.toggle("hidden");
//     mobileNavbar.classList.toggle("flex");

// });

closeBtn.addEventListener("click", function () {
mobileNavbar.classList.add("hidden");
mobileNavbar.classList.remove("flex");
closeBtn.classList.add("hidden");
hamburgerBtn.classList.add("block");
hamburgerBtn.classList.remove("hidden");
});

// Hamburger menu end

// console.log("Hello World I am from Jajabor");
/**
 * 1. Shop Button Identify
 * 2. Click on Shop Button
 * 3. url identify
 * 3. url--> shop.html
 *
 */

const shopBtn1 = document.querySelector(".shop-btn-1");
// console.log(shopBtn1);
shopBtn1.addEventListener("click", function () {
  // console.log("This shop button is clicked");
console.log(window.location.href);
console.log("navigating to shop.html");
window.location.href = "http://127.0.0.1:5500/shop.html";
});

const shopBtn2 = document.querySelector(".shop-btn-2");
// console.log(shopBtn1);
shopBtn2.addEventListener("click", function () {
  // console.log("This shop button is clicked");
  console.log(window.location.href);
  console.log("navigating to shop.html");
  window.location.href = "http://127.0.0.1:5500/shop.html";
});

const shopBtn3 = document.querySelector(".shop-btn-3");
// console.log(shopBtn1);
shopBtn3.addEventListener("click", function () {
  // console.log("This shop button is clicked");
  console.log(window.location.href);
  console.log("navigating to shop.html");
  window.location.href = "http://127.0.0.1:5500/shop.html";
});

/**
 * 1. select 3 slide
 * 2. close 2 slide
 * 3. 2 button identify
 * 4. add event to those 2 button
 * 5. next button--> First slide-> display :none+2nd slide--> display:block
 */

const firstSlide = document.getElementById("first-slide");
const secondSlide = document.querySelector("#second-slide");
const thirdSlide = document.getElementById("third-slide");

const preBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// console.log(firstSlide);
// console.log(secondSlide);
// console.log(thirdSlide);
// firstSlide.style.display = "flex";
// secondSlide.style.display = "flex";
// thirdSlide.style.display = "flex";
// console.log(preBtn);
// console.log(nextBtn);

preBtn.addEventListener("click", function () {
  // console.log("Previous Button is clicked")
  const isFirstSlideActive = getComputedStyle(firstSlide).display == "flex";
  const isSecondSlideActive = getComputedStyle(secondSlide).display == "flex";
  const isThirdSlideActive = getComputedStyle(thirdSlide).display == "flex";
  // console.log(isFirstSlideActive, /*isSecondSlideActive, isThirdSlideActive*/);
  // console.log(isFirstSlideActive);

  if (isFirstSlideActive) {
    firstSlide.style.display = "none";
    secondSlide.style.display = "none";
    thirdSlide.style.display = "flex";
  } else if (isThirdSlideActive) {
    thirdSlide.style.display = "none";
    secondSlide.style.display = "flex";
    firstSlide.style.display = "none";
  } else if (isSecondSlideActive) {
    secondSlide.style.display = "none";
    firstSlide.style.display = "flex";
    thirdSlide.style.display = "none";
  }
});

nextBtn.addEventListener("click", function () {
  // console.log("Next Button is clicked");
  // console.log("firstSlide is getting out")
  // firstSlide.style.display = "none"
  // console.log("2nd slide is getting in")
  // secondSlide.style.display = "flex"
  // const isFirstSlideActive = getComputedStyle(firstSlide).display == "flex";
  // const isSecondSlideActive = getComputedStyle(secondSlide).display == "flex";
  // const isThirdSlideActive = getComputedStyle(thirdSlide).display == "flex";
  // console.log(isFirstSlideActive, isSecondSlideActive, isThirdSlideActive);
  // console.log(isFirstSlideActive);
  if (getComputedStyle(firstSlide).display == "flex") {
    firstSlide.style.display = "none";
    thirdSlide.style.display = "none";
    secondSlide.style.display = "flex";
  } else if (getComputedStyle(secondSlide).display == "flex") {
    secondSlide.style.display = "none";
    firstSlide.style.display = "none";
    thirdSlide.style.display = "flex";
  } else if (getComputedStyle(thirdSlide).display == "flex") {
    secondSlide.style.display = "none";
    thirdSlide.style.display = "none";
    firstSlide.style.display = "flex";
  }
});

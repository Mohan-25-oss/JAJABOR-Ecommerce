// fetch All Products start
const productContainer = document.getElementById("product-container");
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(products => {
    console.log(products);
    const productItem = products.map((product) => {
      const productItemHTML = `
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href="product_details.html?productId=${product.id}" 
            class="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" class="object-cover object-center w-full h-full &"src="${product.image}">
            </a>
            <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">${product.category}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">${product.title}</h2>
                <p class="mt-1">${product.price}</p>
            </div>
      </div>
        `;
        return(productItemHTML);
    });
    // console.log(productItems); 
    //  console.log(typeof productItems);
    const productsHTML = productItem.join("");
    console.log(productsHTML);
    productContainer.innerHTML =productsHTML
  });
// const productsContainer = document.getElementById("products-container");
// fetch("https://fakestoreapi.com/products/categories");
// fetch All Products end 

// // Hamburger menu start
const hambuergerBtn = document.getElementById("hambuerger-menu");
const mobileNavbar = document.getElementById("mobile-navbar");
const clostBtn = document.getElementById("close-btn");
// console.log(mobileNavbar);
// console.log(hambuergerBtn);
// console.log(clostBtn);
hambuergerBtn.addEventListener("click", function () {
  // console.log("hambuerger button is clicked");
  console.log(mobileNavbar.classList);
  mobileNavbar.classList.remove("hidden");
  mobileNavbar.classList.add("flex");
  hambuergerBtn.classList.add("hidden");
  clostBtn.classList.remove("hidden");
  console.log(mobileNavbar.classList);
});

// hambuergerBtn.addEventListener("click", function(){
//   console.log(mobileNavbar.classList);
//     mobileNavbar.classList.toggle("hidden");
//     mobileNavbar.classList.toggle("flex");
// });
// clostBtn.addEventListener("click", function () {
//   mobileNavbar.classList.add("hidden");
//   mobileNavbar.classList.remove("flex");

//   clostBtn.classList.add("hidden");
//   hambuergerBtn.classList.add("block");
//   hambuergerBtn.classList.remove("hidden");
// });

// Hamburger menu end

// console.log("Hello World I am from Jajabor");
/**Shop Button Start...........
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
  window.location.href = "http://127.0.0.1:5500/Shop.html";
});

const shopBtn2 = document.querySelector(".shop-btn-2");
// console.log(shopBtn2);
shopBtn2.addEventListener("click", function () {
  // console.log("This shop button is clicked")
  console.log(window.location.href);
  console.log("navigating to shop.html");
  window.location.href = "http://127.0.0.1:5500/shop.html";
});

const shopBtn3 = document.querySelector(".shop-btn-3");
// console.log(shopBtn3);
shopBtn3.addEventListener("click", function () {
  console.log("This shop button is clicked");
  console.log("navigating to shop.html");
  window.location.href = "http://127.0.0.1:5500/shop.html";
});
// Shop Button End.
/**   Next and Prev Button/ Navigation Button Start...
 * 1. select 3 slide
 * 2. close 2 slide
 * 3. 2 button identify
 * 4. add event to those 2 button
 * 5. next button--> First slide-> display :none+2nd slide--> display:block
 */

const firstSlide = document.getElementById("first-slide");
const secondSlide = document.querySelector("#second-slide");
const thirdSlide = document.getElementById("third-slide");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
//// console.log(firstSlide);
// console.log(secondSlide);
// console.log(thirdSlide);
// jodi 1 ta slide show korte chai tahole nicher ei 3 ta line ta comment out korte hobe 
firstSlide.style.display = "flex";
secondSlide.style.display = "none";
thirdSlide.style.display = "none";
// jodi 3 ta slide show korte chai tahole ei 3 ta line ta comment out korte hobe 
// firstSlide.style.display = "flex";
// secondSlide.style.display = "flex";
// thirdSlide.style.display = "flex";
// console.log(prevBtn);
// console.log(nextBtn);

prevBtn.addEventListener("click", function () {
  // console.log("previous button is clicked");
  const isFirstSlideActive = getComputedStyle(firstSlide).display == "flex";
  const isSecondSlideActive = getComputedStyle(secondSlide).display == "flex";
  const isThirdSlideActive = getComputedStyle(thirdSlide).display == "flex";
  console.log(isFirstSlideActive, isSecondSlideActive, isThirdSlideActive);
  console.log(isFirstSlideActive);
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
  // if (getComputedStyle(firstSlide).display == "flex") {
  //   firstSlide.style.display = "none";
  //   thirdSlide.style.display = "none";
  //   secondSlide.style.display = "flex";
  // } else if (getComputedStyle(secondSlide).display == "flex") {
  //   secondSlide.style.display = "none";
  //   firstSlide.style.display = "none";
  //   thirdSlide.style.display = "flex";
  // } else if (getComputedStyle(thirdSlide).display == "flex") {
  //   secondSlide.style.display = "none";
  //   thirdSlide.style.display = "none";
  //   firstSlide.style.display = "flex";
  // }
});

    nextBtn.addEventListener("click", function () {
      console.log("Next Button is Clicked");
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
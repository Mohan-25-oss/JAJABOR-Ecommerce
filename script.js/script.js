// console.log("Hello World I am from Jajabor");
/**
 * 1. Shop Button Identify
 * 2. Click on Shop Button
 * 3. url--> shop.html
 * 
 */

const shopBtn1 = document.querySelector(".shop-btn-1");
// console.log(shopBtn1);
shopBtn1.addEventListener("click", function() {
    // console.log("This shop button is clicked");
    console.log(window.location.href)
    console.log("navigating to shop.html")
    window.location.href = "http://127.0.0.1:5500/shop.html";
} )
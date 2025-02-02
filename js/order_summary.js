const cartContainer = document.getElementById("cart-container");
const userDetails = document.getElementById("user-details");
const cartItems = JSON.parse(localStorage.getItem("cart"));
const user = JSON.parse(localStorage.getItem("user"));
const removeItemContainer = document.querySelector(".remove-item-container");
const totalPrice = document.getElementById("totalPrice");
const taxPrice = document.getElementById("taxPrice");
const subTotal = document.getElementById("subTotal");

function loadCartData() {
  userDetails.innerHTML = `${user.name} - ${user.email} - ${user.phone_number} - ${user.address} `;
  const cartHTML = cartItems.map((item) => {
    return `
          <tr>
            <td class=" py-4 md:w-[384px]">
              <div class="flex items-center gap-4">
                <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                  <img class="h-80 w-80 max-h-full dark:hidden" src="${item.image}" alt="imac image" />
                  <img class="hidden h-80 w-80 max-h-full dark:block" src="${item.image}" alt="imac image" />
                </a>
                <a href="#" class="hover:underline w-80">${item.title}</a>
              </div>
            </td>

            <td class="p-4 text-base font-normal text-gray-900 dark:text-white"><buton class="curosr-pointer" onclick="removeItemFromCart(${item.id})" >Remove</button></td>

            <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$${item.price}</td>
          </tr>
          `;
  });
  // console.log(cartHTML)
  const cartHTMLStrings = cartHTML.join("");
  cartContainer.innerHTML = cartHTMLStrings;
  totalCart(cartItems);
}
loadCartData();

const removeItemFromCart = (itemId) => {
  //   console.log(itemId);
  const remainingCartItem = cartItems.filter((item) => item.id !== itemId);
  // console.log(remainingCartItem)
  const cartHTML = remainingCartItem.map((item) => {
    return `
          <tr>
            <td class=" py-4 md:w-[384px]">
              <div class="flex items-center gap-4">
                <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                  <img class="h-80 w-80 max-h-full dark:hidden" src="${item.image}" alt="imac image" />
                  <img class="hidden h-80 w-80 max-h-full dark:block" src="${item.image}" alt="imac image" />
                </a>
                <a href="#" class="hover:underline w-80">${item.title}</a>
              </div>
            </td>

            <td class="p-4 text-base font-normal text-gray-900 dark:text-white"><buton class="curosr-pointer" onclick="removeItemFromCart(${item.id})" >Remove</button></td>

            <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">$${item.price}</td>
          </tr>
          `;
  });
  const cartHTMLStrings = cartHTML.join("");
  cartContainer.innerHTML = cartHTMLStrings;
  console.log(remainingCartItem);
  localStorage.setItem("cart", JSON.stringify(remainingCartItem));
  totalCart(remainingCartItem);
};

function totalCart(cartItems) {
  //   console.log(cartItems);
  let total = 0;
  for (i = 0; i < cartItems.length; i++) {
    console.log(cartItems[i].price);
    total = total + cartItems[i]?.price;
  }
  // console.log(total, "our total")
  totalPrice.innerText = total.toFixed(2); //182

  const taxPriceString = taxPrice.innerText; // String
  //   console.log(taxPriceString);
  const taxPriceNumber = parseFloat(taxPriceString); // Number
  //   console.log(taxPriceNumber)
  const subTotalPrice = total + taxPriceNumber;
  //   console.log(subTotalPrice);
  subTotal.innerText = subTotalPrice;
}

// const number = [2,2,2,2,2];
// let total = 0;
// for(i=0; i <number.length; i++){
//     // console.log(number[i])
//     console.log("total", total, "our i", i)
//     console.log(number[i], "current element")
//     total = total + number[i]
//     console.log("after calculating", total)
// }

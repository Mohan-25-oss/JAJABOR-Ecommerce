const checkoutForm = document.getElementById("checkout-form");
checkoutForm.addEventListener("submit", (e) => {
  // console.log(e)

  e.preventDefault();
  // const formData = new FormData(e.target);
  const formData = new FormData(e.target);
  // console.log(formData.get("phone_number"))
  const name = formData.get("name");
  const email = formData.get("email");
  const phone_number = formData.get("phone_number");
  const address = formData.get("address");
  const user = {
    // name: name,
    // email: email,
    // phone_number: phone_number,
    // address: address
    name,
    email,
    phone_number,
    address,
  };
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
  // console.log(e.target.value);
  window.location.href = "order_summary.html";
});





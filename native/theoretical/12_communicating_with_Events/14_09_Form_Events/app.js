const form = document.querySelector("#signup-form");

const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

form.addEventListener("submit", function (e) {
  e.preventDefault(e); // the default situation is that the page will
  // reload when you hit submit button so preventDefault  :
  //stops the request from being sent (prevents page reload)
  console.log("cc", creditCardInput.value);
  console.log("terms", termsCheckbox.checked); //checked :true or false
  console.log("veggieSelect", veggieSelect.value);
  //send form data to db
  //append something to page using form data
});

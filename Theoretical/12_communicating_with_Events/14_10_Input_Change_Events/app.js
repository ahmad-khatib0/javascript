const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");
const formData = {};
// ONE callback works for any number of inputs!!
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
    // type === "checkbox" you can to understand this as: if type is equal to checkbox
    //so if the type that triggered was checkbox store checked , if not store the other things(types)
    console.log(formData);
  });
}

// We could use hard-coded callbacks:
// creditCardInput.addEventListener("input", (e) => {
//   console.log("CC CHANGED!", e);
//   formData["cc"] = e.target.value;
//   //formDate['cc'] which means to put this as key in the object and set the value to :
//   //the value that the user fill it in this input
//   //target Returns the object to which event is dispatched (sent) (its target).
// });

// veggieSelect.addEventListener('input', (e) => {
// 	console.log('VEGGIE!', e);
// 	formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
// 	console.log('CHECKBOX', e);
// 	formData['agreeToTerms'] = e.target.checked;
// });

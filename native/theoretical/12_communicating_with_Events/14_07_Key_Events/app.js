const input = document.querySelector("#username");

input.addEventListener("keydown", function (e) {
  console.log("KEY DOWN!");
});

input.addEventListener("keyup", function (e) {
  console.log("KEY UP!");
});
//up and down  going to fire for any key that you touch at all one will fire when you press it down the other
//one doesn't fire until it's released but it includes things like shift or arrow keys.

input.addEventListener("keypress", function (e) {
  console.log("KEY PRESS!");
});

const addItemInput = document.querySelector("#addItem");
const itemsUL = document.querySelector("#items");

addItemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return; //if input is empty, skip everything
    //add a new item to list
    const newItemText = this.value; // value is for the input field
    const newItem = document.createElement("li");
    newItem.innerText = newItemText; // inject that user's input as an innerText
    itemsUL.appendChild(newItem);
    this.value = ""; // this will make the input to be empty after hitting enter
  }
});

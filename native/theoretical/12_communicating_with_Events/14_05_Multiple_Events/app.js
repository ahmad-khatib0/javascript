const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];
const changeColor = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
  //that  to update h1 to be the color of background
};

const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  //   each time create element of div
  box.style.backgroundColor = color;
  //   make that div has the background of the colors' array
  box.classList.add("box");
  //   add an css class to it
  container.appendChild(box);
  //   display it in the container
  box.addEventListener("click", changeColor);
  //   box will be represented by the key this above               ☝
  // Remember that this inside  of a method which is added on to an object.
  // This will refer to the individual element that the event listener has been added to.
}

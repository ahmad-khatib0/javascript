// ***********************************
// Two ways NOT to add event handlers
// ***********************************

// **********************************
// Inline - take a look at index.html
// **********************************
// Check out index.html to see an example

// **********************************
// Via JS - setting the onclick property
// **********************************

// Select an element:
const btn = document.querySelector("#clicker");
// btn.onclick = alert("hi");
// => that will be loaded just at the time you refresh the page rather if you clicked the
//  btn or not because actually here you are updating the btn.onclick to be alert and if
// you tried to : alert('hi')  => undefined

// Set the onclick property to a function:
// You can use an existing function: (not that common)
// btn.onclick = greet;
function greet() {
  alert("HEY BUDDY!");
}

// Or use an anonymous function (more common)
btn.onclick = () => {
  console.log("YOU CLICKED ME UGHHHH!!");
};

btn.ondblclick = () => {
  console.log("You doubled click me !!!");
};

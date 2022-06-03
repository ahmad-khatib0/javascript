//To select all li's
document.getElementsByTagName("li");

// To select all h1's (there's only one on this page):
document.getElementsByTagName("h1");

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName("input"); //get all inputs
inputs[0]; //this works
// input2.length   =>  3
inputs.pop(); //DOES NOT WORK! pop() is an array method, and this isn't an array!
const arr = [...input2]; // arr =>  Array(3) [ input, input, input ]

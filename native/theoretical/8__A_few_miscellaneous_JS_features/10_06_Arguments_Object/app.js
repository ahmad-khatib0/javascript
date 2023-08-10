//The arguments object is available in every function you write (except arrow functions)
//It contains all the arguments passed in.
function sum() {
  //It is NOT an array, we have to turn it into one if we want to use array methods
  const argsArr = [...arguments];
  return argsArr.reduce((total, currVal) => {
    return total + currVal;
  });
}
sum(12, 12);
function fullName(first, last) {
  // Arguments contains every argument passed in.
  //  Even if we captured the first two in parameter names.
  console.log(...arguments); //ahmad khatib
  console.log(first); //ahmad
}
fullName("ahmad", "khatib");
// No arguments object inside of arrow functions :(  the arguments object is not a thing in Arrow functions.
const multiply = () => {
  console.log(arguments);
};

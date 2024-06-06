// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }

// New way using rest:
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}
fullName("ahmad", "john", "ali", "reza", "alex");
// first ahmad
// last john
// titles [ 'ali', 'reza', 'alex' ]

// We can use rest parameters in arrow functions!
const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);
console.log(multiply(2, 3, 4)); // 24

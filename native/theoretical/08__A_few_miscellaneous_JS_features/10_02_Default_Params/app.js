// The old way of adding a default value:
// function multiply(x, y) {
//   if (typeof y === 'undefined') {
//     y = 1;
//   }
//   return x * y;
// }

// A slightly shorter version:
// function multiply(x, y) {
//   y = typeof y === 'undefined' ? 1 : y
//   return x * y;
// }

// The new super clean way of adding defaults!
function multiply(x, y = 1) {
  return x * y;
}
multiply(3, 4); //12
multiply(3); //3

// Another example!
const greet = (person, greeting = "hi") => {
  console.log(`${greeting}, ${person}!`);
};
// greet ('ahmad')  => hi, ahmad!

// Default value of an array:
const blah = (x, y = [1, 2, 3]) => {
  console.log(x, y);
};
// blah  ('the best ever')  =>  the best ever  (3)[1, 2, 3]  // i didn't pass the y parameter
// blah  ('the best ever' , "how that happened" )  => the best ever  how that happened

// Multiple default values are possible, but rare
const greet2 = (person, greeting = "hi", punctuation = "!") => {
  console.log(`${greeting}, ${person} ${punctuation}`);
};
// greet2 ('I am Ahmad') =>  hi, I am Ahmad !
const greet3 = (person, greeting = "hi", punctuation = "!") => {
  console.log(`${greeting}, ${person} `);
};
// greet3 ('Hi I am Ahmad')  =>  hi, Hi I am Ahmad . notice how it took the first default (hi)

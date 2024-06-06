//String.prototype is a "template object" for every single string.
//We could go crazy and add our own method called yell...
String.prototype.yell = function () {
  return `OMG!!! ${this.toUpperCase()}!!!!! AGHGHGHG!`;
  // this refers to any thing that the user would insert , for example the bottom sample
  //   (bees)  , so  This will refer to whatever's on the left hand side of that dot
};

"bees".yell(); // => "OMG!!! BEES!!!!! AGHGHGHG!"
// We've made our own method that we can use on every single string.

//Array.prototype  stores methods and properties for every single array
//We can overwrite an existing Array method like pop (not a good idea):
Array.prototype.pop = function () {
  return "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!";
};
const nums = [6, 7, 8, 9];
nums.pop(); // => "SORRY I WANT THAT ELEMENT, I WILL NEVER POP IT OFF!"
// instead of  deleting the last item in the nums's array  (9)

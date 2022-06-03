console.log("I HAPPEN FIRST!");
alert("Hi there!"); //This holds everything up!
console.log("I HAPPEN SECOND!");

console.log("I HAPPEN FIRST!");
setTimeout(function () {
  //This does NOT hold everything up, because...
  //JS relies on THE BROWSER itself to keep track of the timer
  console.log("I HAPPEN THIRD!");
}, 3000);
console.log("I HAPPEN SECOND!");

// in JavaScript at any given point JavaScript itself is running at most
// one line of code so it's not multitasking. It's not doing three
//  things at once it's doing one thing at a time or nothing if it's not doing anything.
// so JS is single threaded

// JavaScript is not setting a timer or keeping track of how many seconds have gone by.
// JavaScript is not sending a request to an API.  The browser actually handles it.
//  browsers are written in usually C++

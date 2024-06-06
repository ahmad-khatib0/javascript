// function expression 
var canada = () => {
  console.log('cold');
}

//function deceleration
function india() {
  console.log(arguments)// {}
  console.log('warm');
}

canada(); //this executed on the run time, 
india();  //this executed on the parse time,

function marry(person1, person2) {
  console.log(arguments) //arguments is only available when we create a function context 
  return console.log(`${person1} is married to ${person2}`)
}

function marry2(...args) {
  console.log(...args)
  return console.log(`${args[0]} is married to ${args[1]}`)
}

marry("tim", 'anna')
marry2("noh", 'lena')


///////////////////////////////////
function two() {
  var isValid;
}

function one() {
  var isValid = false; // local env  
  two()  //new execution context 
}

var isValid = false;
one();

/// stack execution for those is valid  will be 
// - two() undefined 
// - one () true  
// - global() false 
// so each execution context has its own variables ; 
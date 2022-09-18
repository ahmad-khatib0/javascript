const four = new Function('return 4')
four() //4 
const fourWithNum = new Function('num', 'return 4 + num');
fourWithNum(4) // 8 

function woohoo() {
  console.log('woohoo');
}
woohoo.yell = "ayyyyyyyyyyy"
console.log(woohoo.name); // woohoo  the name of the function 
//because of that functions are objects, (but special type of objects) behind the scene is looks like:
// const specialObject  = { yell: 'aoooooo', name: 'woohoo' , () : "console.log('woohoo')" }

// Functions are first class citizens in js That means they can be stored as any other 
// values in objects or arrays, passed around as arguments, or returned from other functions.

// 1- functions as arguments 
var a = function () { }
// 2- functions as parameters  
function a(fn) {
  fn()
}
// 3- functions return functions 
function c() {
  return function d() {
    console.log('returned from the c function ');
  }
}


function n() { } // better here 
for (let i = 0; i < 5; i++) {
  // function n()  { } will be created each loop ,   
  n()
}



/////////////////////////  Higher Order Functions ///////////////////////////////////
// HIGH ORDER FUNCTIONS.  IT'S EITHER A FUNCTION THAT RETURNS ANOTHER FUNCTION
// OR A FUNCTION THAT ACCEPTS A FUNCTION AS A PARAMETER,

const giveAccessTo = (name) => `access granted to ${name}`;
function authenticate(verify) {
  let arr = [];
  for (let i = 0; i < verify; i++) arr.push(i)
  return true;
}

function letPersonLogin(person, fn) {
  if (person.level == 'admin') fn(500000)
  if (person.level == 'user') fn(100000)
  return giveAccessTo(person.name)
}

letPersonLogin({ level: 'user', name: 'Tim' }, authenticate);
letPersonLogin({ level: 'admin', name: 'Ali' }, authenticate);
// SO NOW WE TELL IT WHAT DATA TO USE (OBJECT), +  WHAT TO DO (FUNCTION)

// multiplyBy is the higher order function, because it returns another function  
const multiplyBy = (num1) => (num2) => num1 * num2
multiplyBy(5)(3)

const multiplyByTwo = multiplyBy(2)
multiplyByTwo(4)

const multiplyByFive = multiplyBy(5)
multiplyByFive(10)


//takes any amount of callback functions and runs against the data:
function compose(...fns) {
  return function (arr) {
    return fns.reduceRight((acc, fn) => fn(acc), arr);
  }
}

function pow2(arr) {
  return arr.map(v => v * v)
}

function filterEven(arr) {
  return arr.filter(v => v % 2);
}

const pipe = compose(filterEven, pow2);
pipe([1, 2, 3, 4, 5, 6, 7, 8, , 9])

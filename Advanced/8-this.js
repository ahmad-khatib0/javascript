// this is the  object that the function is PROPERTY OF ,    benefits: 
//1- give methods access to their object  
//2- execute same code for multiple objects 

function a() {
  console.log(this); // window object 
  // so the what the function a is property of ?  he window object .. so its printed window object 
}

function b() {
  'use strict'
  console.log(this); //undefined 
}

const obj = {
  name: 'ali',
  // sign: function () {  old 
  sign() {  // newer syntax, 
    return "lalalala" + this.name //so THIS is the object that the function is property of 
  },
  singAgain() {
    return this.sign() + "!!!"  //this for DRY principle
  }
}
obj.sign() // so this is what is to the left of the DOT 


function importantPerson() {
  console.log(this.name);
}
const name = "sunny"; // note this a global variable 
const obj1 = { name: 'Cassy', importantPerson: importantPerson }
const obj2 = { name: 'Jacob', importantPerson: importantPerson }

importantPerson() // sunny 
obj1.importantPerson()// Cassy so now this.name in importantPerson property refer to the same object name prop 
obj2.importantPerson()// Jacob so now this.name in importantPerson property refer to the same object name prop


// Dynamic Scope vs Lexical Scope
const a = function () {
  console.log('a', this);
  const b = function () {
    console.log('b', this);
    const c = {
      hi: function () {
        console.log('c', this);
      }
    }
    c.hi() // {hi: f}   => because who called hi ?  the c object on this line 
  }
  b() // window =>    b is also called be the window:  window.a(b())  as the a function down 
}
a() // window   =>  window.a() 
//so here its the opposite for the Lexical Scope, here it not important where the THIS is declared
// but what actually matters is where is is get called

const obj3 = {
  name: 'john',
  sign() {
    console.log("a", this)
    var anotherFunc = function () {
      console.log('b', this);
    }
    anotherFunc()
  }
}
obj3.sign() // console.log(a refers correctly to the same object);
//while b refers to the window object!!! 
const obj4 = {
  name: 'john',
  sign() {
    console.log("a", this)
    var anotherFunc = () => {
      console.log('b', this); // {name 'john', sign: function }
    }
    anotherFunc()
  }
}
obj4.sign() // {name 'john', sign: function }
// the first new solution for THIS confusing ,is using an ARROW FUNCTIONS,
// so now this keyword  (b console log) refereed to the same object not the global window object 
//second old solution is using bind, so bind refers to the same object 
const obj5 = {
  name: 'john',
  sign() {
    console.log("a", this)
    var anotherFunc = () => {
      console.log('b', this);
    }
    return anotherFunc.bind(this)
  }
}
obj5.sign()()  // {name 'john', sign: function }
//third solution is: 
const obj6 = {
  name: 'john',
  sign() {
    console.log("a", this)
    var self = this
    var anotherFunc = () => {
      console.log('b', self); // {name 'john', sign: function }
    }
    anotherFunc()
  }
}


//////////////////////////  call , bind , apply ////////////////////////////
//under the hood all functions use call when invoking the function 
function callMe() {
  console.log('call me using call or apply  or ()');
}
callMe.call() //what actually 
callMe() //this is a shorthand 
callMe.apply() //also runs a function  


const wizard = {
  name: "Merlin",
  health: 50,
  heal(number1, number2) {
    return this.health += number1 + number2
  }
}

const archer = { name: "Erick", health: 30 } //how i can barrow heal method for archer object ? 
console.log(archer) //{ "name": "Erick", "health": 30 } 
wizard.heal.call(archer, 50, 30) // borrowing it
console.log(archer) //{ "name": "Erick", "health": 110 }  110 is  30 + 50 + 30  = 110  
wizard.heal.apply(archer, [50, 30]) // apply same thing, but it can work with arrays 

// Bind returns a new function with a certain context and parameters.And it's usually used when we want a
// function to be called later on with a certain type of context or a certain type of this keyword
const healArcherLaterOnDemand = wizard.heal.bind(archer, 50, 30)
healArcherLaterOnDemand() // 110 

//////////so to review, call and apply are useful to borrowing methods, and bind is useful if 
/////////we wanna use a method that we want to call it on demand 


// How would you implement this:
const array = [1, 2, 3];
function getMaxNumber(arr) {
  //code here  
}
getMaxNumber(array) // should return 3

///// solution 
// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr) {
  return Math.min.apply(null, arr)
}
getMaxNumber(array)


//////////////////////////  function curring  ////////////////////////////
//  currying refers to only partially giving a function a parameter.
function multiply(a, b) {
  return a * b;
}
let multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo);// return a function that we can to use later on 
console.log(multiplyByTwo(8)); // 8 is the second parameter => 16 

let multiplyByTen = multiply.bind(this, 10);
console.log(multiplyByTen(20)); // => 200 , 
// so see how many times we can to use multiply function with the help of the bind

// WE WAS ABLE TO REUSE A PIECE OF CODE, GIVE IT A PARTIAL 
// PARAMETER, AND CREATE THESE FUNCTIONS THAT ARE EXTENSIBLE


// How would you fix it?
const character = {
  name: 'Simon', getCharacter() { return this.name },
};
const giveMeTheCharacterNOW = character.getCharacter;
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

console.log('?', giveMeTheCharacterNOW.call(character)) // first solution 
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);// second solution 

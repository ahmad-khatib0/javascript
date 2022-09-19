const array = [];
console.log(array.__proto__.__proto__);
// be going up to the second .__proto__ you will arrive the BASE OBJECT, because arrays are OBJECTS
//so this is the object that everything is cerated from, 
//AN OBJECT GETS ACCESS TO THE PROPERTIES AND METHODS OF ANOTHER OBJECT THROUGH THE PROTOTYPE CHAIN.

function a() { }
a.__proto__// is the base function where all functions are created from 
a.__proto__.__proto__ // again the same idea 

// this feature is actually quite unique and not that common in other popular languages like C-sharp
//  or Java, they use something called classical inheritance.JavaScript uses prototype inheritance.

// class : 
// this is what we call SYNTACTIC SUGAR.  There's actually no classes in JavaScript We only have prototype inheritance.

let dragon = {
  name: "Tanya",
  fire: true,
  fight() { return 5 },
  sing() {
    if (this.fire) return `i am ${this.name} the breather of fire `;
  }
};

let lizard = { name: "kiki", fight() { return 1 } };

const singLizard = dragon.sing.bind(lizard);
console.log(singLizard());// won't work because lizard not has fire,

lizard.__proto__ = dragon; // copying all methods to solve this issue  
lizard.sing()

dragon.isPrototypeOf(lizard) // true,  
lizard.isPrototypeOf(dragon) // false, its the opposite,  


for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) console.log(prop); // name, fight only
}
//a key note here: hasOwnProperty found be going to lizard first, didn't find it, go up to dragon 
//didn't find it, go up to the BASE OBJECT. found it, so the js engine looks automatically for you 
// so we don't have to do: lizard.__proto__.__proto__.hasOwnProperty() to access this function 

////////////////////////////// THE MOST IMPORTANT BENEFIT ////////////////////
// THE FACT THAT OBJECTS CAN SHARE PROTOTYPES MEANS THAT YOU CAN HAVE OBJECTS WITH PROPERTIES THAT ARE
// POINTING TO THE SAME PLACE IN MEMORY, THUS BEING MORE EFFICIENT.

a.hasOwnProperty('apply')//or call,bind ..... false , while name is true, which points to FUNCTION NAME 
// so this apply and call and ..... are inherited from the __proto__

// a function            Function                                      |=====>      
//  __proto__  ======>   prototype: { __proto__ ,  call, apply, bind}  |=====> prototype:{} =====>   null    
//  name                 properties                                    |=====>
//  prototype:{}         code()....                                    |=====>
// properties

// so the outer __proto__ in the Function Constructor is inside of the prototype 
// a.__proto__  ===  Function.prototype , they're the same
// Object.prototype.__proto__     => points to null 

// __proto__ is a reference or pointer to up the chain which is prototype object 

const array1 = []
array.hasOwnProperty("map") // no because map should to live in base object for performance
array.__proto__.hasOwnProperty("map") // true 

Array.prototype === array1.__proto__   //again here __proto__ is lives in prototype, 
// but array1.__proto__  will points to Array.prototype properties and logic and ....



//////////////////////////////////CREATE OUR PROTOTYPAL ///////////////////////////
let human = { mortal: true }
let socrates = Object.create(human);
socrates.age = 70;
console.log(socrates.mortal); //true Because we've created using object create a PROTOTYPE CHAIN up to human
// so this is the way  to create prototypal inheritance 
// DON'T MISS WITH __proto__ at all , they put __ around proto to reduce these tries 



///////////////  ONLY FUNCTIONS HAVE THE PROTOTYPE PROPERTY //////////////////////
a.prototype  // is almost an empty prototype!, because when we create a function like the a function
// this prototype we don't use, THE ONLY TIME WHEN WE USE PROTOTYPE IS WHEN WE USE CONSTRUCTOR FUNCTIONS 

typeof Object // 'function'    😂😂😂😂😂 because it has the prototype property 
// when we do:  const obj = {}  js USES Object Constructor to create it, which means it's 
// actually like a FUNCTION ,  while if we do: 
typeof {}  // => 'object'   because this is now an actual object that we've created from the object constructor.

// EVERY FUNCTION HAS A ( PROTOTYPE PROPERTY AND) IT REFERENCES TO AN OBJECT USED TO ATTACH PROPERTIES
// THAT WILL BE INHERITED BY OBJECTS FURTHER DOWN THE PROTOTYPE CHAIN.
// THE LAST OBJECT IN THE CHAIN IS THIS BUILT-IN    Object.prototype.

// ( Object ) is a function because it has the prototype.
// Now the ( object.prototype ) is what we call the base object.
// so : 
const obj2 = {}
obj2.prototype // undefined,  because  its not a FUNCTION 
const arr3 = []
arr3.prototype // undefined,  because  its not a FUNCTION 
'string'.prototype // also undefined.............. while: 
String.prototype // works, because its CONSTRUCTOR FUNCTION 
// so when we do 'string'.replace(" ", '-') js looks the prototype of the String on this replace method 




/////////////////////////  Exercise - /////////////////////////////////////////////
// extend the functionality of a built in object
// 1- Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
new Date('1900-10-10').lastYear() //'1899'

//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
console.log([1, 2, 3].map()) //1🗺, 2🗺, 3🗺


//////////////// solution ////////////////////////
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
  // i think that the inputted date have got passed to here 
  // throw the fact that this keyword here is refereeing to the Date Object, and the Date 
  // have received what we pass to, so it assigned to this value, and then we subtracted  
  // that value by 1 , so the result is value - 1 year  
}
new Date('1999-33-22').lastYear()


Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    // this refers to the passed array, because its on the left, eg  [1,2,3].map() so its the length of the array
    arr.push((this[i] + '🗺'));
  }
  return arr;
}


// How would you be able to create your own .bind() method using call or apply ? 
Function.prototype.bind = function (whoIsCallingMe) {
  const self = this
  return function () {
    // e.g  wizard.heal.bind(archer, 50, 30)  // so wizard is self, archer is whoIsCallingMe
    return self.apply(whoIsCallingMe, arguments)
  }
}
const elf = {
  name: "Orwell",
  weapon: 'bow',
  attack() {
    return 'attack with ' + this.weapon
  }
}// if i have multiple player i have to repeat the same logic 

function createElf(name, weapon) {
  return {
    name, weapon, attack() {
      return "attach with " + weapon
    }
  }
}

const petter = createElf("peter", 'stones',);
petter.attack() // works, but here if we've 1000 player, copying the same attack function which does a repetitive
// thing over and over , will cause a memory overwhelming

const elfFunctions = {
  attack() {
    return "attack with " + this.weapon
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);//create creates a link between elfFunctions and newElf variable 
  //so console.log(newElf) // { }  where is attack() ?  its in console.log(newElf.__proto__) which is the link
  newElf.name = name
  newElf.weapon = weapon;
  return newElf;
}
const petter1 = createElf("petter1", 'fire')
console.log(petter1.attack());

////////////////////// what we had before .create ? ////////////
// constructor functions are build like this 
function ElfConstructorFunction(name, weapon) {
  this.name = name
  this.weapon = weapon;
}

const sam = new ElfConstructorFunction('sam', 'fire')
console.log(sam.name); // sam
// The new keyword automatically returns the object for us that we have here,
// any function is invoked with new is called CONSTRUCTOR FUNCTION, another way to create prev function: 

const Elf = new Function('name', 'weapon', `this.name = name; this.weapon = weapon`)
const ahmad = new Elf('ahmad', 'fireworks')
console.log(ahmad);

//////////////// the new keyword does ton for us, it creates a function and construct its logic, 
//it returns the object automatically, and also it BINDS THE THIS KEYWORD not to the window object 
//which is the case when EACH TIME we have an EXECUTION CONTEXT (this and arguments)
//but it assign it to how is created for , e,g here THIS points to const ahmad 

// so because functions are a special type of objects in js, the prototype is useless and empty with the
// regular functions, but with the Constructed functions is useful, and we can to add to its prototype: 
ElfConstructorFunction.prototype.attack = function () {
  return 'attack with weapon ' + this.weapon
  // member this, will be the caller creator (variable name that assign to this Constructed Function)
}
sam.attack() //attack with fire

///////////////// so with the NEW keyword, it replace the .create,, because it does a lot automatically///////

//note: 
ElfConstructorFunction.prototype.attack = () => {
  return 'attack with weapon ' + this.weapon
}
// arrow functions they define this based on where they're written.  And this, in this case, is the GLOBAL OBJECT.
// Because who's calling attack right now? There's no object SURROUNDING IT other than the global object.


/////////////////////////// MORE ON CONSTRUCTOR FUNCTIONS 
function ElfConstructorFunction(name, weapon) {
  console.log(this); // {}
  this.name = name
  this.weapon = weapon;
  console.log(this); // {name , weapon, }
  var a = 'won\'t work, won\'t be added without the this keyword'
}
console.log(petter.prototype);// undefined, why? because its an object, not  a function , 
//and only functions have access to prototype 

ElfConstructorFunction.prototype.attack = () => {
  function building() {
    return this.name + " builds a house" // undefined, //because this points to the window
  }
  return building.bind(this) // solves 
}


//////////////
var a = new Number(3);
typeof a // object 
var b = 3; //number  
typeof b;

a === b // false , while  a == b  true 
//but js knows that you want to use OBJECT METHODS on b primitive, so it creates it for you
//behind the scene 

//////   EVERYTHING IS JS IS AN OBJECT, THAT HAS METHODS TO USE ON IT/////////////////////
///////////////           EXCEPT NULL AND UNDEFINED         ////////////////////

//////////////////////////// CLASSES //////////////////////////////////////
// at the end classes in js are just objects, class keyword is a PROTOTYPAL INHERITANCE
class ElfClass {
  constructor(name, weapon) {
    this.name = name
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon;
  }
}
const elfInstance = new ElfClass("lara", 'sward');
console.log(elfInstance instanceof ElfClass) // true, while opposite is false  



//////////////////////////// INHERITANCE //////////////////////////////
const fiona = new ElfClass('fiona', 'ninja stars');
const ogre = { ...fiona }
console.log(fiona.__proto__);// ElfClass 
console.log(ogre.__proto__);// { }  we've copied fiona, but we LOSE ElfClass 
console.log(fiona === ogre);// false , because these objects aren't referencing same place in memory 
// so because we lost the PROTOTYPAL INHERITANCE CHAIN, we can't use attack also, 
///////////////// so we have extends , (sub classing in other OOP definitions)

class ElfWorrier extends ElfClass {
  constructor(name, weapon, type) {
    console.log(this); // won't work, reference error ,  
    super(name, weapon); // super will call the parent constructor to initialize the needed name and weapon 
    // when we use extends, in order to use the THIS keyword , we need to call super function before EVERYTHING
    // so for example , placing this here will work normally 
    console.log(this);
    this.type = type;
  }
}
const dolby = new ElfWorrier("dolby", 'cloth', 'house');
dolby.attack() // works now, so extends will create this PROTOTYPAL INHERITANCE CHAIN 

class Ogre extends ElfClass {
  constructor(name, weapon, color) {
    super(name, weapon,)
    this.color = color;
  }
  makeFort() {
    return 'strongest fort in the world made'
  }
}
const shrek = new Ogre("shrek", 'club', 'green')
shrek.makeFort()

console.log(Ogre.isPrototypeOf(shrek)); // false, again: Ogre its constructor function, so check prototype: 
console.log(Ogre.prototype.isPrototypeOf(shrek)); //true 
console.log(ElfClass.prototype.isPrototypeOf(Ogre.prototype)); //true 
//so this PROTOTYPAL checking  is confusing, so the cleaner and simpler way is:
console.log(dolby instanceof ElfWorrier);//true 
console.log(dolby instanceof Ogre);//false  
console.log(dolby instanceof ElfClass);//true  

////////////////////////// THIS REVIEW ////////////////////////////
// new binding
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}
const person1 = new Person('Xavier', 55)

//implicit binding
const person = {
  name: 'Karen',
  age: 40,
  hi() {
    console.log('hi' + this.name)
  }
}
//explicit binding
const person3 = {
  name: 'Karen',
  age: 40,
  hi: function () {
    console.log('hi' + this.setTimeout)
  }.bind(window)
}
person3.hi()

// arrow functions
const person4 = {
  name: 'Karen',
  age: 40,
  hi: function () {
    var inner = () => {
      console.log('hi ' + this.name)
    }
    return inner()
  }
}
person4.hi()
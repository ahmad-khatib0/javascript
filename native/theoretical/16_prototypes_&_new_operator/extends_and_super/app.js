class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR!");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super(name, age);
    // super keywordIt's going to reference the class that we are extending from.
    // it's going to call this constructor (Pet) , in addition to that we also defined
    // something new for us here which is livesLeft . so if you tried to call it :
    // cat2 =>   Cat {name: "mallly", age: 9, livesLeft: 9} notice the new (livesLeft: 9)
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWW!!";
  }
}

class Dog extends Pet {
  // because I extended from pet. It's going to use that constructor
  bark() {
    return "WOOOF!!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
    // if you called dog2.eat() what will happen is that the class dog itself will take the
    // advantage first so it will return  : scarfs his food!  , but if there wasn't eat method
    // in dog class it will look inside the instructor and return its value
  }
}
const cat2 = new Cat("mallly", 9);
const dog2 = new Dog("callyous", 13); // =>
// Dog {name: "callyous", age: 13}
// age: 13
// name: "callyous"
// __proto__: Pet
// for example also : dog.eat() =>  callyous is eating nwo

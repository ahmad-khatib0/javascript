// ╒═══════════════════════════════════════════════════════════════════════════════╕
//   Mixins allow us to easily add functionality to objects without inheritance by
//   injecting functionality into an object's prototype. Modifying an object's
//   prototype is seen as bad practice, as it can lead to prototype pollution and a
//   level of uncertainty regarding the origin of our functions.
// ╘═══════════════════════════════════════════════════════════════════════════════╛
//
//
// ╒═════════════════════════════════════════════════════════════════════════════════╕
//   An example of a mixin in the real world is visible on the Window interface in a
//   browser environment. The Window object implements many of its properties
//   from the WindowOrWorkerGlobalScope and WindowEventHandlers
//   mixins, which allow us to have access to properties such as setTimeout
//   and setInterval, indexedDB, and isSecureContext.
//   Since it's a mixin, thus is only used to add functionality to objects, you won't
//   be able to create objects of type WindowOrWorkerGlobalScope.
// ╘═════════════════════════════════════════════════════════════════════════════════╛
class Dog {
  constructor(name) {
    this.name = name
  }
}

const animalFunctionality = {
  walk: () => console.log('wallking'),
  sleep: () => console.log('sleeping'),
}

const dogFunctionality = {
  // __proto__: animalFunctionality,
  bark: () => console.log('Woof!'),
  wagTail: () => console.log('Wagging my tail!'),
  play: () => console.log('Playing!'),

  walk: () => super.walk(),
  sleep: () => super.sleep(),
}

const pet1 = new Dog('Doggy')

console.log(pet1.name)
console.log(pet1.wagTail)
console.log(pet1.play)
console.log(pet1.walk)
console.log(pet1.sleep)

Object.assign(Dog.prototype, dogFunctionality)

// mixins themselves can use inheriance
Object.assign(dogFunctionality, animalFunctionality)

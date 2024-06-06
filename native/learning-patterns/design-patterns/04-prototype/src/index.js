class Dog {
  constructor(name) {
    this.name = name
  }

  bark() {
    return `Woof!`
  }
}

const dog1 = new Dog('Daisy')
const dog2 = new Dog('Max')
const dog3 = new Dog('Spot')

// The prototype pattern is a useful way to share properties among many objects of the same type.
// When using ES6 classes, all properties that are defined on the class itself, bark in this case,
// are automatically added to the prototype.
//
//
Dog.prototype.play = () => console.log('Playing now!')
dog1.play()

// The term prototype chain indicates that there could be more than one step.
// Indeed! So far, we've only seen how we can access properties that are directly
// available on the rst object that __proto__ has a reference to. However,
// prototypes themselves also have a __proto__ object!

class SuperDog extends Dog {
  constructor(name) {
    super(name)
  }

  fly() {
    console.log(`Flying!`)
  }
}

// We have access to the bark method, as we extended the Dog class. The
// value of __proto__ on the prototype of SuperDog points to the Dog.prototype object!
const dog4 = new SuperDog('Daisy')
dog4.bark()
dog4.fly()

// It gets clear why it's called a prototype chain: when we try to access a property that's
// not directly available on the object, JavaScript recursively walks down all the objects that
// __proto__ points to, until it nds the property!
//
//

const dog5 = {
  bark: () => `Woof!`,
}

const pet1 = Object.create(dog5)
// Although pet1 itself doesn't have any properties, it does have access to properties on its
// prototype chain! Since we passed the dog object as pet1’s prototype, we can access the bark property.

pet1.bark() // woof
console.log('Direct properties on pet 1 ', Object.keys(pet1))
console.log('properties on pet1 prototype ', Object.keys(pet1.__proto__))

// ╒══════════════════════════════════════════════════════════════════════════════════════╕
//    ┌─────────────────────────────────────────────────────────────────────────────────┐
//      Since the prototype chain allows us to access
//      properties that aren't directly de ned on the object itself, we can avoid
//      duplication of methods and properties, thus reducing the amount of memory used.
//    └─────────────────────────────────────────────────────────────────────────────────┘
// └──────────────────────────────────────────────────────────────────────────────────────┘

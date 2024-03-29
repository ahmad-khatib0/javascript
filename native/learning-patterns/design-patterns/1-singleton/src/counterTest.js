// This file is neccesary so the tests don't fail in the example. It's a duplicate of counter.js

let instance
let counter = 0

class Counter {
  constructor() {
    if (instance) {
      throw new Error('Only one instance is allowed!')
    }
    instance = this
    this.counter = counter
  }

  getInstance() {
    return this
  }

  getCount() {
    return counter
  }

  increment() {
    return ++counter
  }

  decrement() {
    return --counter
  }
}

const singletonCounter = Object.freeze(new Counter())
export default singletonCounter

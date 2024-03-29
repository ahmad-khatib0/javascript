import Counter from './counter'

export default class SuperCounter {
  constructor() {
    this.count = 0
  }

  increment() {
    Counter.increment()
    return (this.count += 100)
  }

  decrement() {
    Counter.decrement()
    return (this.count -= 100)
  }
}

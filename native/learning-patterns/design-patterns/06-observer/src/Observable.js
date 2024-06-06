// ╒═════════════════════════════════════════════════════════════════════════════╕
//   An observable object usually contains 3 important parts:
//   • observers: an array of observers that will get noti ed whenever a specic event occurs
//   • subscribe(): a method in order to add observers to the observers list
//   • unsubscribe(): a method in order to remove observers from the observers list
//   • notify(): a method to notify all observers whenever a speci c event
// └─────────────────────────────────────────────────────────────────────────────┘
//
//
occurs
class Observable {
  constructor() {
    this.observers = []
  }

  subscribe(f) {
    this.observers.push(f)
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f)
  }

  notify(data) {
    // observer(data) execute the function
    this.observers.forEach((observer) => observer(data))
  }
}

export default new Observable()

// ╒══════════════════════════════════════════════════════════════════════════════╕
//   Pros of Observables
//   Using the observer pattern is a great way to enforce separation of
//   concerns and the single-responsiblity principle. The observer objects aren’t
//   tightly coupled to the observable object, and can be (de)coupled at any time.
//   The observable object is responsible for monitoring the events, while the
//   observers simply handle the received data.
//
//  Cons of Observables
//  If an observer becomes too complex, it may cause performance issues when
//  notifying all subscribers.
// └──────────────────────────────────────────────────────────────────────────────┘

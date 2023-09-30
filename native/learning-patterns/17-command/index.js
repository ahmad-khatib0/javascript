// With the Command Pattern, we can decouple objects that execute a certain
// task from the object that calls the method.
//
//
// Let's say we have an online food delivery platform. Users can place, track, and cancel orders
//

class OrderManager {
  constructor() {
    this.orders = []
  }

  placeOrder(order, id) {
    this.orders.push(id)
    return `you orderd ${order} (${id})`
  }

  trackOrder(id) {
    return `your  order ${id} will arrive in 20 minutes`
  }

  cancelOrder() {
    this.orders = this.orders.filter((ord) => ord.id !== id)
    return `you have canceled an order`
  }
}

let manager = new OrderManager()
manager.placeOrder('pad tahi', '1234')
manager.trackOrder('1234')
manager.cancelOrder('1234')

// there are downsides to invoking the methods directly on
// the manager instance. It could happen that we decide to rename certain
// methods later on, or the functionality of the methods change.
//
//

class OrderManager1 {
  constructor() {
    this.orders = []
  }

  // instead of having the placeOrder, cancelOrder and trackOrder methods, it will have one
  // single method: execute. This method will execute any command it's given.
  execute(command, ...args) {
    return command.execute(this.orders, args)
  }
}

class Command {
  constructor(execute) {
    this.execute = execute
  }
}

function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id)
    return `you have orderd ${order} (${id})`
  })
}

function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((ord) => ord.id !== id)
    return `you have canceled an order`
  })
}

function TrackOrderCommand(id) {
  return new Command(() => `you order (${id}) will arrive in 20 minutes`)
}

// so now Instead of having the methods directly coupled to
// the OrderManager instance, they're now separate, decoupled functions that we can
// invoke through the execute method that's available on the OrderManager.

let manager1 = new OrderManager1()
manager1.execute(new PlaceOrderCommand('Pad Thai', '1234'))
manager1.execute(new TrackOrderCommand('1234'))
manager1.execute(new CancelOrderCommand('1234'))

// Pros
// The command pattern allows us to decouple methods from the object that executes the
// operation. It gives you more control if you're dealing with commands that have a
// certain lifespan, or commands that should be queued and executed at speci c times.
//

// Cons
// The use cases for the command pattern are quite limited, and often adds
// unnecessary boilerplate to an application.

import 'reflect-metadata'

// const plane = {
//   color: 'red',
// }

// Reflect.defineMetadata('note', 'hey you!', plane)
// Reflect.defineMetadata('height', 10, plane)
// Reflect.defineMetadata('anotherNote', 'this is a metadata info for a property', plane, 'color')

// const note = Reflect.getMetadata('note', plane)
// const height = Reflect.getMetadata('height', plane)
// const color = Reflect.getMetadata('anotherNote', plane, 'color')

// console.log(plane) //{ color: 'red' }

// console.log(note) // hey you!
// console.log(height) // 10
// console.log(color) // this is a metadata info for a property

@controller
class Plane {
  color: string = 'red'

  @get('/login')
  fly(): void {
    console.log('vrrrrrrrrrr')
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key)
  }
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)
    console.log(path)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
console.log(secret) // HI THERE

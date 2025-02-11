@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `this boat color is : ${this.color}`;
  }

  @logError('Oops, Boat was sunk in the ocean')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    // throw new Error()
    console.log('swish');
    if (speed == 'fast') {
      console.log('swish');
    } else {
      console.log('boat is not moving');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  // typeof Boat is a reference to the constructor function to that class,,, we instead can use also:  constructor: Function
  console.log(constructor); // [class Boat] or  [Function Boat]
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(target, key, index); // pilot 1  \n  pilot 0
}

function testDecorator(target: any, key: string) {
  console.log(target.color); // not working, because decorators executed before the instance get created
  console.log(key);
}

// decorators that receive  arguments are called factory decorators
function logError(errorMsg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    // console.log('Target: ', target)
    // console.log('Key: ', key)
    const method = desc.value; // reference to the value of the pilot function

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMsg);
      }
    };
  };
}

// new Boat().pilot()

const honda = { make: 'honda', year: 2000 };
console.log(Object.getOwnPropertyDescriptor(honda, 'make'));
// {
//   value: 'honda',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.defineProperty(honda, 'make', { writable: false });
// honda.make = 'chevy'
// console.log(honda.make) // honda      // not writable anymore

class ArrayOfNumbers {
  constructor(public collections: number[]) {}

  get(index: number): number {
    return this.collections[index];
  }
}

class ArrayOfStrings {
  constructor(public collections: string[]) {}

  get(index: number): string {
    return this.collections[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']); // hover over it, it inferred the type automatically

// Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printAnything<string>(['1', 'b', 'c']); // or
printAnything(['1', 'b', 'c']);

// Generics Constraints
class Car1 {
  print() {
    console.log('i am a car');
  }
}

class House {
  print() {
    console.log('i am  a house ');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars([new House(), new House(), new Car1()]); // or separately
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car1>([new Car1(), new Car1()]);

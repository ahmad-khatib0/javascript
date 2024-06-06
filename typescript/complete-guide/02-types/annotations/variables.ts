let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();
//arrays
let colors: string[] = ['red', 'blue', 'white'];
let myNumbers: number[] = [1, 2, 34];
let truths: boolean[] = [true, false, true];

class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = { x: 10, y: 20 };

//functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/////////////////// WHEN TO USE TYPE ANNOTATIONS ? //////////////////////////////
// 1- when a function returns the "any" type and we need to clarify the value
const json = '{"x: 20 , x: 30 "}';
const coordinates: { x: number; y: number } = JSON.parse(json); // parse returns 'any'

// 2- when we declare a variable on one line an initialize it later
let words = ['red', 'green', 'blue'];
let foundWords: boolean;
words.forEach((item) => {
  if (item == 'green') foundWords = true;
});

// 3- when we want a variable to have a type that can't be inferred correctly
let numbers = [-1, -10, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}

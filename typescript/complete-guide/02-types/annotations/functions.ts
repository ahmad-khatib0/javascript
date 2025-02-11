const add = (a: number, b: number) => {
  return a + b;
};

// return ANNOTATION to prevent that we accidentally don't return a thing from functions
const subtract = (a: number, b: number): number => {
  return a + b;
};

function dived(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};
// hat means that we are never going to actually reach the end of this function. So we're never going to
// execute the function completely at some point in time inside of here, we're
// going to throw an error and exit the function early without returning any value. we only annotate a
// function with the type never when we really truly never expect a function to return anything ever.

// Destructuring with Annotations
const todaysWeather = { date: new Date(), weather: 'sunny' };
// the destructuring have to be  in the left side , and the annotation in the right side
const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todaysWeather);

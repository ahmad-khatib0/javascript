const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 90,
};

let pepsi = ['brown', true, 90]; //we can easily swap the values accidentally
pepsi[0] = 90; // here we made a mistake

type Drink = [string, boolean, number]; // this called:   TYPE ALIAS

let pepsiTuple: [string, boolean, number] = ['brown', true, 80]; // no chance to swap values: or
let pepsiTuple2: Drink = ['brown', true, 80];
// pepsiTuple[0] = 44 ; // catches the mistakes

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// but wait a second,  tuples aren't that useful all the time, and aren't used much in ts
const carSpecs: [number, number] = [400, 5555];
// we don't have an idea on what these values are talking about

//while here with objects its really clear
const carStats = {
  horsepower: 400,
  weight: 5555,
};

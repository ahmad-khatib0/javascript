const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f250'], ['corolla'], ['camaro']];

////////////////////////////// why to use array annotations? ////////////////////////////
// help with inference when extracting values
const firstCar = carMakers[0]; // string
const pop = carMakers.pop();

//prevent incompatible values
// carMakers.push(100); // error when pushing number to only strings array

// help with built-in properties of a type
carMakers.forEach((item: string): void => {
  console.log(item.toUpperCase);
});

//flexible types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('1999-09-12');
// importantDates.push(100) //error

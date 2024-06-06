const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// const {
//   first,
//   last,
//   time
// } = runner;

const { country: nation, title: honorific } = runner;
// console.log(nation); //Kenya
// console.log(honorific); //Elder of the Order of the Golden Heart of Kenya

const { first, last, ...other } = runner;
console.log(`first: ${first}`, `last: ${last}`, other);
// first: Eliud
// last: Kipchoge
// {
//   country: 'Kenya',
//   title: 'Elder of the Order of the Golden Heart of Kenya'
// }

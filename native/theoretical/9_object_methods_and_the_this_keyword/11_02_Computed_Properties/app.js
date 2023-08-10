const role = 'host';
const person = 'Jools Holland';
const role2 = 'Director';
const person2 = 'James Cameron';

// // The old way: 
// // Make the object
// const team = {};
// // Then add a property using dynamic key:
// team[role] = person;
// its mean to move the value of the const rule to the object team 
// team[role2] = person2;
// => Object { host: "Jools Holland", Director: "James Cameron" }


// USING COMPUTED PROPERTIES!
const team = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: 'sixteen'
};

// function addProp(obj, k, v) {
//   const copy = {
//     ...obj
//   };
//   copy[k] = v;
//   return copy;
// }

// const addProp = (obj, k, v) => {
//   return {
//     ...obj,
//     [k]: v
//   };
// };

// const addProp = (obj, k, v) => ({
//   ...obj,
//   [k]: v
// });
const res = addProp(team, 'happy', ':)');
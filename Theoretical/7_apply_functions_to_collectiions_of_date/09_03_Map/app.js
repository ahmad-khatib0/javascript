const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
const words = ["asap", "byob", "rsvp", "diy"];

//Map creates a new array by calling your callback function with each element in the original array.
const doubles = numbers.map(function (num) {
  return num * 2; //Need to return the value!
});
//[40, 42, 44, 46, 48, 50, 52, 54]

const numDetail = numbers.map(function (n) {
  return {
    value: n,
    isEven: n % 2 === 0,
  };
}); // =>
// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {value: 20, isEven: true}
// 1: {value: 21, isEven: false}
// 2: {value: 22, isEven: true}
// 3: {value: 23, isEven: false}
// 4: {value: 24, isEven: true}
// 5: {value: 25, isEven: false}
// 6: {value: 26, isEven: true}
// 7: {value: 27, isEven: false}

const abbrevs = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});
//["A.S.A.P", "B.Y.O.B", "R.S.V.P", "D.I.Y"]

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

const titles = books.map(function (b) {
  return b.title;
});
//["Good Omens", "Bone: The Complete Edition", "American Gods", "A Gentleman in Moscow"]

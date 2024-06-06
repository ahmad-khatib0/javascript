const profile = {
  name: 'alex',
  age: 30,
  coords: { lat: 0, lng: 14 },

  setAge(age: number): void {
    this.age = age;
  },
};

// const { age } : number = profile ; // this expected syntax will not work
// const  { age }  = profile ; //this works as intended without annotations,
const { age }: { age: number } = profile; //this should be like so to annotate it

// with nesting destructuring:
// const { coords: { lat, lng } } = profile;  // this works normally, to annotate it =>
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

////////////////  so why this the following dose'nt work ?
// const { age } : number = profile ;
// because if you want for example to destructure the name also,
// const { age, name } : number = profile ;
// so because of that it dose'nt work. name is a string, not a number as age

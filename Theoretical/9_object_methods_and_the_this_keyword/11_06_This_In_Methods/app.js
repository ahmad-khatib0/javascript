function sayHi() {
  console.log("HI");
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const person2 = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    console.log(this); // this here will print the entire person2
  },
};

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    //In a method, this refers to the object the method "lives" in:
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
};

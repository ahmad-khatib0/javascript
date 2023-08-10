// note : we didn't explain   setInterval parseFloat clearInterval in this lesson
class Timer {
  constructor(durationInput, startButton, pauseButton, fromMe) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    this.fromMe = fromMe;
    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
    this.fromMe.addEventListener("click", this.formMe.bind(this));
    // when we call .bind this unlike calling apply which invoke the function
    //right away bind instead returns us a new function that we can call at some point in the future.
  }
  //
  //
  // don't do this console.log(this) here because its not valid
  // this way of syntax to define an arrow function :
  testImportantMethodToCall = () => {
    this.importantMethodToCall();
  };

  importantMethodToCall() {
    console.log("Important thing was Done ");
  }
  // timer.testImportantMethodToCall() => Important thing was Done

  formMe = () => {
    this.testFromMe();
  };
  testFromMe() {
    console.log("Important thing was Done ");
  }
}
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const fromMe = document.querySelector("#test-bend");

const timer = new Timer(durationInput, startButton, pauseButton, fromMe);

// const pick = {
//   pickMe() {
//     console.log(this);
//     const printThis = () => {
//       console.log(this); //regradless that we try to define this inside an arrow func . but
//       //here console.log(this)for printThis will be identical as the console.log(this)
//       // for the  line that is above it
//     };
//     printThis();
//   },
// };
// pick.pickMe();

// apply or call
// const printThis = function () {
//   console.log(this);
// };
// printThis.call({ color: "red" });
// printThis.apply({ color: "red" });
// apply and call is the same .. so if you will run the code  . the value inside this in
// will get override to be or to store this { color: "red" }

// const colors = {
//   printColor() {
//     console.log(this);
//   },
// };

// const randomObject = {
//   a: 1,
// };

// randomObject.printColor = colors.printColor;
// here we assigned to put the printColor method which is in colors object  to be inside
// the randomObject  .
// randomObject.printColor();
// you will get this in console => {a: 1, printColor: ƒ}  ,,, notice also that (this) now
// it refers to the thing  that is left to the dot

//
//
//
//
//
//
//what happens behind the scene when you try make method in class function  is like
// =>for example start() gets actually turned to an regular function like  : function start ()
//
//
//
//
//
//
// if you go babel and then to try it out . you will but your code on the left side and
// what you will see on the right is  how the older browsers or how js will be determined
// when it will get execute
// for example this this function .
// class Timer {
//   constructor(durationInput, startButton, pauseButton) {
//     this.durationInput = durationInput;
//     this.startButton = startButton;
//     this.pauseButton = pauseButton;

//     this.startButton.addEventListener("click", this.start);
//     this.pauseButton.addEventListener("click", this.pause);
//   }

//   testImportantMethodToCall = () => {
//     this.importantMethodToCall();
//   };
//   importantMethodToCall() {
//     console.log("Important thing was Done ");
//   }
// }

// which i was trying specifically to explain here that  what will happen to the arrow function behind
// the scene : so the idea here is that js implicitly , will implant _defineProperty ; inside
// the constructor so it will have access to the instance object . so in this case it will
// act as it has an approval to get info from the object , so ,  what was rejected before
// (which is to put : console.log(this); above the arrow function in the place that
// is specified to do methods  , is now  resolved , so there is no problem to  type arrow
// functions  without type   console.log(this); above it )
// class Timer2 {
//   constructor(durationInput, startButton, pauseButton) {
//     console.log(this);
//     // so because we're in the constructor we are always guaranteed that the value of
//     // this is going to be equal to the instance of the class. And so the value of this
//     // inside the arrow function is going to be equal to the instance of the class

//     _defineProperty(this, "testImportantMethodToCall", () => {
//       this.importantMethodToCall();
//     });

//     this.durationInput = durationInput;
//     this.startButton = startButton;
//     this.pauseButton = pauseButton;
//     this.startButton.addEventListener("click", this.start);
//     this.pauseButton.addEventListener("click", this.pause);
//   }

//   importantMethodToCall() {
//     console.log("Important thing was Done ");
//   }
// }
// const timer2 = new Timer2(durationInput, startButton, pauseButton);

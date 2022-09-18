function a() {
  let grandpa = 'grandpa';
  return function b() {
    let father = 'father';
    let random = 3333323444
    return function c() {
      let son = 'son';
      return `${grandpa} > ${father} > ${son}`
    }
  }
}
a()()()
// because function C.  Is inside a function A and function B, the JavaScript engine is going to say, All
//  right, I'LL CREATE A CLOSURE FOR YOU.  All the variables outside of the c function.
// I'm going to KEEP AROUND if C is using it.  so random variable won't be KEPT 

// JavaScript engine before we run any code, before we get to line 12 or line 13 already knows which function
//  has access to which variables because JavaScript is lexical scoped or statically scoped.

const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`);
boo('hey')('ahmad')("al hussein")  //hey ahmad al hussein

// why closures are powerful ? 
const booString = boo("hello")
// wait for 5 years !!
const booStringName = booString('ahmad')
// I could hypothetically, if the JavaScript engine is running, wait five years and then finally call
// booString and booString even though it would be off the stack or the boo function is off the stack!!.
// Will still remember for me this high that we gave it five years ago.That's because remember
// parameters are treated just like local variables that gets stored in variable environments.

// another example 
function callMeMaybe() {
  const message = 'hey i\'m now here!'
  //so message maybe has been popped off the stack by the time after callMeMaybe() execution.
  // But because of closures and yes, even if some of the functions go all the way out to the Web API world,
  // well, they still use closures and we're able to remember this variable because of closures.
  setTimeout(function () { console.log(message) }, 4000)
}
callMeMaybe()


function callMeMaybe() {
  setTimeout(function () { console.log(message) }, 4000)
  const message = 'hey i\'m now here!' //after putting message here what it will log? undefined? 
}
//NO. hey i'm now here!,  why?
// Even if const doesn't get hoisted. We don't care about hoisting here.
// Instead, this piece of code 1- goes all the way into web API world, 2- gets put on the callback queue.
// 3- The event Loop pushes it back onto the stack, but by that time we already ran this function.
// const message, has already been created and assigned and because it sees that there's an enclosing
// function that is using it, it's going to create a closure. so it wil KEEP A REFERENCE TO THIS CONST


///////////////////////// BENEFITS OF CLOSURES ///////////////////////////
// 1- memory efficient 
function heavyDuty(index) {
  const bigArray = new Array(7000).fill("😂")
  console.log('create each time!');
  return bigArray[index];
}
heavyDuty(456)
heavyDuty(456)
heavyDuty(456)
heavyDuty(456)

const getHeavyDuty = heavyDuty2()// allowed here because functions are hoisted,
getHeavyDuty(777)
getHeavyDuty(497)
getHeavyDuty(787)
function heavyDuty2() {
  const bigArray = new Array(7000).fill("😂")
  console.log('created just once!');
  return function (index) { return bigArray[index] }
}


// 2- Encapsulation 
const makeNuclearButton = () => {
  let timeWithoutDistraction = 0;
  const passTime = () => timeWithoutDistraction++;
  const totalPeaceTime = () => timeWithoutDistraction;
  const lunch = () => {
    timeWithoutDistraction = -1
    return '💣'
  }
  setInterval(passTime, 1000)
  return { totalPeaceTime }
}
const ohno = makeNuclearButton()
ohno.totalPeaceTime()
// so now here people have access only to the read only stuff



////   EXERCISES ///////////
let view;
function initialize() {
  view = "🌄"
  console.log('view has been set!');
}
initialize()
initialize()
initialize() /// prevent setting view multiple times, allow it to be set only one time

function initializeOnce() {
  let called = 0;
  if (called > 0) return
  else {
    view = "🌄"
    called++
    console.log(view);
  }
}
const startOnce = initializeOnce();
startOnce();// will set it 
startOnce();//won't set it 
startOnce();//won't set it


////
const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () { console.log('i am at index', i) }, 3000)
} //logs i am at index 4    4 times!

// to solve this issue, change it to let, so on each loop it will create a block for 
// each i , and hold its value on the iteration 
// second solution is to use closure: 
for (var i = 0; i < array.length; i++) {
  (function (closureIndex) {
    setTimeout(() => {
      console.log('i am at index', closureIndex);
    }, 3000);
  })(i)
} 
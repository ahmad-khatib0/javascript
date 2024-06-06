var x = 'x'

function findName() {
  console.log(x);
  var b = 'b';
  return printName();
}
function printName() {
  var c = 'c';
  return "john loe";
}

function sayMyName() {
  var a = 'a';
  return findName()
}

sayMyName()


function sayMyName() {
  var a = 'a';
  console.log(a)// have access to ;
  return function findName() {
    var b = 'b';
    console.log(b, a)// have access to ;
    return function printName() {
      var c = 'c';
      console.log(c, b, a)// have access to ;
      return 'ali ahmad';
    }
  }
}

sayMyName()() //function findName 
sayMyName()()() // 'ali ahmad '


/////////////////
function weird() {
  return height = 5;
  //height is actually called leakage of global variables. 
}
weird();

'use strict'
function weird() {
  return height = 5; // will trow an error, so it will prevent js from creating it for 
  // you because it didn't see anything at first, no var, const, let ...........
}


/////////////////////     function scoped vs block scope ;///////////////////////////
if (5 > 4) var secret = 'my secret'
secret   // have access 

function a() { var secret = 'my another secret' }
secret // not defined  

if (5 > 4) {
  let secret = 'my secret' // or const 
}
secret   // they introduced let and const to solve this issue 


function loop() {
  for (var i = 0; i < 5; i++) console.log(i);
  console.log('final', i);
}
loop()  // => final 5 because i becomes 5 on last iteration 

function loop() {
  for (let i = 0; i < 5; i++) console.log(i);
  console.log('final', i);
}
loop()  // => reference error , because we used let , or const 


  ////////////////////////////// overusing global variables solution ////////////////
  // this pattern called IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
  (function () {
    //so this (around the function) makes it a function expression , not a function deceleration, 
    ///----so here we made an anonymous function, and invoke it right away 
    //so the benefit of this pattern is that all the assigns and stuff , will not be exposed to 
    //anywhere else, they all will be lexically to this {} block, because the js engine will create a 
    // private variable environment for this anonymous only, SO THE CHAIN HERE RUNS FROM TOP TO BOTTOM  
    var a = 'you won\'t be able to access me, even i\'m a var!!!! '
  })();

console.log(a); // reference error 
// function(){}()//----while here, we can not invoke or call declared function right away

var a = (function (localFasterJq) {
  localFasterJq("h1").click(function () { localFasterJq('h1').hide() })
  // so now the it faster, because  we don't have to go outside to the global
  //  scope to grab the $ variable as we were doing before 
})(JqueryObject)
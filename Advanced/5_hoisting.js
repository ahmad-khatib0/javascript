console.log(teddy); //undefined
console.log(sing());//ohh la la
console.log(sing());//undefined

var teddy = "bear";
// function declaration
function sing() { console.log('ohh la la') }
var a = function () { console.log("will be undefined"); }

// what happens is during the creation, js will look and for teddy its going to hoist it
//. it will left up the var name and will assign it an undefined, so this var teddy = 'bear'
// becomes this => var teddy = undefined on line 2,, while functions are fully hoisted ,
//so because of this it log it successfully on line 3
// let and const aren't hoisted at all , and surrounding sing function with
// parentheses will make the compiler not to see this is a function so on,


b();
function b() { console.log('hey'); }
function b() { console.log('bye'); }
// => bey this is the case wherever you call b 


var favoriteFood = 'grapes'
var foodThoughts = function () {
    console.log(`original favorite food: ${favoriteFood}`);//undefined
    // because hoisting happens on each execution context, for example here this 
    //var favoriteFood = 'sushi'; will be hoisted => var favoriteFood = undefined; inside this
    //  function  so it will be logged as undefined in first log , and then once it's
    //   assigned it will be logged as expected in the 2th log 
    var favoriteFood = 'sushi';
    console.log(`new favorite food:  ${favoriteFood}`);
}
foodThoughts()


function bigBrother() {
    function littleBrother() { return 'its me' }
    return littleBrother();
    function littleBrother() { return 'no me!' }
}
console.log(bigBrother());
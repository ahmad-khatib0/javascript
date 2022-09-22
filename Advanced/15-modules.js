// global
//module scope  // we can to define what function that are sharing stillier functionality to import or export 
// function scope 
// block scope (let and const )

// first splitting way, IIFE 
(function () {
  var code = 'won\'t clutter the global scope, won\'t make collision, won\'t expose anything '
})()

// second, module pattern 
var jqueryModule = (function () {
  var code = 'won\'t clutter the global scope, won\'t make collision, will expose things that returned to importer only'
  var privateVariable = 'my secret this won\'t be accessed  '
  return { code }
})()
console.log(jqueryModule.code);

var globalSecretStuffFromAnotherScript = 'my secret should not be changed accidentally be another modules'

var script2 = (function (globalSecretStuffFromAnotherScript) {
  var globalSecretStuffFromAnotherScript = 'another assign , that WILL NOT OVERWRITE THE ORIGINAL VARIABLE'
  return {}
})(globalSecretStuffFromAnotherScript)

console.log(globalSecretStuffFromAnotherScript); //my secret should not be ...... 
// when we pass the global secret variable as a parameter to the script2 expression function , it
// solve the problem of overwriting the original variable , because when js sees that the
//  nearest globalSecret is passed as a  parameter to the function , it won't 
//  keep going up to the other scripts , so it will not overwrite the original ones 

///////////// CONS 
// 1- So we've minimized the number of global variables, but we can still have name clashes.
// e,g we can overwrite the script2 variable accidentally to something else 
// 2- we don't necessarily know all the dependencies.So we have to make sure that the order of the script
// is correct. e,g we can to pass Jquery to the script2 before it is declared 



///third COMMON JS AND AMD ()
const module = require('file') // or 
const module2 = require('file').oneFunction // or 
///////// and exporting is like 

function fight() {
  console.log('hey');
}
module.exports = { fight }

// common JS was created mainly for the server WITH NO JS IN MIND, to use for servers and desktop applications.
// And it's actually one of the main reasons that no JS became so popular.  This common JS import export 
// module system that came before we even had it in the browser, made code very easy to share for Node.js programmers.

// with common JS, modules are meant to be loaded synchronously.That means JavaScript has one call stack.
// So if a module takes a really long time to load, we're just waiting there until that gets loaded
// then the next one gets loaded and then we get to run our script.
// And that's not ideal for browsers where we have users clicking on buttons, entering data into forms,
// a lot of interaction, synchronous code on the browser can get really dangerous

///  AMD (asynchronous module definition) 
define(['module1', 'module2'],
  function (moduleImport1, moduleImport2) {
    var module1 = moduleImport1 /// fight 
    function dance() {
      console.log('hey');
    }
    return { dance }
  })
// RequireJS is a JavaScript file and module loader , its AMD (even though it uses the word require)



/// ES6 modules , finally! a native js module 
export function sayHey() {
  console.log('Hey');
}

import { sayHey } from "./10-HOF"
// in order to it to work in browser , you need to: <script type='module'> </script>
// and also you need to serve it , (for example using package like npm live-server)
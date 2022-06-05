function printName() {
    return console.log("john de");
}
function print() {
    printName()
}
function logName() {
    print()
}

logName()
// execution context will be like this stack

// printName() 
// print() 
// logName() 
// global

this === window //true,
// the browser adds this tow things without the need to create them 

// the execution context tells you which lexical environment is currently running 

// lexical environment
function findName() {
    function a() { }
} 
// this a function is lexically inside the findName function, COMPILER NEEDS TO KNOW 
//about lexical environment, which is necessary for it to KNOW where to put things, 
// what actions to take , what a function has access to in this world

// findName is lexically inside the global object (window)
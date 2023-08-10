// memory heap 
const number = 444; //allocate memory for number 
const string = "test"; //allocate memory for string 
const human = {
    firstName: 'human',
    lastName: 'test'
}// //allocate memory for an object , and its values  

// call-stack 
function subtractTow(num) {
    return num - 2;
}

function calculate() {
    const sumTotal = 4 + 5;
    subtractTow(sumTotal)
}

calculate()
// this runs in way of (first in last out ) which means that the first one goes in is 
// the last one will be popped out 


// stack overflow,
function stack() {
    stack()
}
// this will cause a stack size to run out

const list = new Array(60000).join('1.1').split('.');
function removeItemsFromList() {
    var item = list.pop();
    if (item) removeItemsFromList();
};
removeItemsFromList();
//this causing stack overflow, to fix it, => 

const listFix = new Array(60000).join('1.1').split('.');
function removeItemsFromList() {
    var item = list.pop();
    if (item) setTimeout(removeItemsFromList, 0);
};
removeItemsFromList();
// send it to the web api (using setTimeout) to prevent 
// add these 60000 items immediately to the call stack and execute them at once 

// memory leak 
let array = [];
for (let i = 4; i > 1; i++) {
    array.push(i - 1)
}


//  MEMORY LEAK 
// what cause memory leak 
// 1- GLOBAL VARIABLES 
var a = 1;
var b = 1;
var c = 1;
// hanging event listeners, without removing them 
var element = document.getElementById("button").addEventListener("click", onClick);

setInterval(() => {
    // reference objects .... 
}, 300);



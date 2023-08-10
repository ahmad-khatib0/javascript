// js types are
// 3 true "string" undefined null Symbol {}       // so 7 types 
//functions and arrays are OBJECTS 
function functionsAreObjects() {
  return 5;
}
functionsAreObjects.newMethod = 200;
console.log(functionsAreObjects.newMethod); // 200 ,

// PRIMITIVE TYPES ARE:       Number Boolean String Undefined Null Symbol
// NON PRIMITIVE TYPES ARE:   Object Array  Function 

// MOSTLY EVERYTHING IN JAVASCRIPT IS AN OBJECT
true.toString() //=> 'true'.... why we can use dot notation on Boolean? EVERYTHING IN JAVASCRIPT IS AN OBJECT
Boolean(true).toString() // this is what is the previous  converted to behind the scene also 

Array.isArray([1, 3, 4]); // the correct way to check if its an array, not typeof

//////////////////////. Pass By Value vs Pass By Reference //////////////////////
// primitive types.They're passed by value
var a = 5;
var b = a;
b++;
console.log(a); //5
console.log(b); //6

let obj1 = { name: 'ali', password: '1234', }
let obj2 = obj1
obj2.password = 'secure'
console.log(obj1)  //{ "name": "ali", "password": "secure" };
console.log(obj2);  //{ "name": "ali", "password": "secure" };
//  not primitive types.They're passed by reference 

let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(44)
console.log(arr1); // [1, 2, 3 , 44]  
console.log(arr2);  // [1, 2, 3 , 44]  

let arr3 = [].concat(arr1) //solves modifying the same array  

let obj3 = { a: 'a', b: 'b', c: 'c' };
let obj4 = Object.assign({}, obj3) // solves modifying the same object  
let obj5 = { ...obj3 }  // solves modifying the same object 
obj3.c = 'd';
console.log(obj4); // not affected


let obj6 = { a: 'a', b: 'b', c: { depp: 'this is nested' } };
let obj7 = { ...obj6 }
obj6.c.depp = 'yes and i will change it for all object that copied it';
console.log(obj7); // affected , its just a shallow cloning 

let supperClone = JSON.parse(JSON.stringify(obj6))
console.log(supperClone); // a solution for this shallow cloning 



////////////////////////////// type Coercion //////////////////////////////////
//type coercion means the language converting a certain type to another type.
1 == '1'  // true , it converted '1'  to 1 number 
if (1) console.log(4); // 4
if (0) console.log(4); // undefined 
-0 === +0        //true !!!
Object.is(-0, +0) // false 

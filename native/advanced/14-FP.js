// there are tow types of functions 
// 1- no side effects    2- input --> output (static)

const array = [1, 2, 3]
function a(arr) {
  arr.pop()
}
// This function.  Has what we call side effects, and side effects are well
// , does the function modify anything outside of itself? yes it does, in this case the array that passed in
// side effect can cause many problems, everyone for example can use the a function,
// to make a function has no side effect: 
function removeElement(array) {
  const newArray = [].concat(array);
  newArray.pop()
  return newArray;
}
//although this function returns new Data, but it actually locale data, so newArray lives inside this function only

function a() {
  console.log('has side effect ,');
}
// We're using the browser to log something to the browser.So it's actually affecting the outside world
// It's logging something to the output of the browser.It's modifying something outside of itself.

function a(num1, num2) {
  return num1 * num2;
}
// And this is what we call referential transparency.  no matter what my input, if they're the same,
//  it's always going to give me the same output. also it has no side effect

// can EVERYTHING be pure ? NO 
// SO THE GOAL OF FUNCTIONAL PROGRAMMING IS NOT TO MAKE EVERYTHING PURE FUNCTIONS.
// THE GOAL IS TO MINIMIZE SIDE EFFECTS.



///////////////////////// independence.
function notGood(num) {
  console.log(num);
}
// another example is http requests, if we do http request to and endpoint , we expect to get 
// the same result no matter how many times we run it 
// idea of being able to call something 1000 times and always giving you the same results
// is extremely valuable when it comes to things like parallel and distributed computation.
// Because it makes our code predictable.
Math.abs(Math.abs(-50))// so even calling this function which is nested , will return the same output 


///////////////////////// Imperative vs Declarative
// mperative code is code that tells the machine what to do and how to do it.  Declarative code tells
//  it what to do and what should happen.  It doesn't tell the computer how to do things.

for (let i = 0; i < 1000; i++) {
  console.log(i);
}//this for is extremely Imperative, we say what i is, when to stop, what to do each time, 

[1, 2, 3].forEach(item => console.log(item))
// this is more Declarative, we don't tall about i, don't tall about when to stop ...........



/////////////////////// immutability 
const obj = { name: 'ahmad' }
function clone(object) {
  return { ...object }
}

function updateName(object) {
  const cloned = clone(object);
  cloned.name = 'noor';
  return cloned
}
const updated = updateName(obj)
console.log(obj, updated); // the original and the new object are there (immutability)



//////////////////// HOF AND CLOSURES //////////////
// HOF 
const hof = (fn) => fn(5);
hof(function a(num) { return num })

// closures 
const closure = function () {
  let count = 1;
  return function increment() {
    return count++
  }
}
const sequentialIncrementFunction = closure()
sequentialIncrementFunction()// 2
sequentialIncrementFunction()// 3
sequentialIncrementFunction()// 4
/// so this inner function remembers the state of the count inside it, even after finishing it 
//closures only make a function IMPURE if we modified the closed over variable 

const closure2 = function () {
  let count = 123;
  return function getCount() {
    return count
  }
}////// here we are still using closures, but we don't modifying the count variable 



//////////////////// CURRYING  //////////////
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(4) // one piece at a time, why its useful? 

const multiplyByFive = curriedMultiply(5) // no this got remembered for long time 
// e,g after five years later!
multiplyByFive(5)
multiplyByFive(2)
multiplyByFive(3)// so its also can be called many times 



///////////////////////  PARTIAL APPLICATION //////////////
const multiply2 = (a, b, c) => a * b * c;
const partiallyMultiplyBy5 = multiply.bind(null, 5);
partiallyMultiplyBy5(10, 11) // 550  , so 10 and 11 are the rest (b and c ) 
// so Partial application is on the second call I expect all the arguments currying says.
// I expect one argument at a time.



///////////////////////////// MEMOIZATION AND CACHING ///////////////////////////
function addTo80() {
  console.log('long time process that gets repeated each time we invoke this function ');
  return n + 80
}

function memoizedAddTo80() {
  let cache = {};
  return function (num) {
    if (num in cache) return cache[num];
    else {
      cache[num] = num + 80
      return cache[num]
    }
  }
}
const memoized = memoizedAddTo80()
console.log(memoized(3));// calculate one time only
console.log(memoized(3));
// as a note: thing of (3) as calling the inner function, so 3 is the (num) that gets passed 

// memorization is a specific form of caching that involves caching the return value.
// memorization is simply a way to remember a solution to a problem.So you don't have to calculate it again.



//////////////////////////// COMPOSING ////////////////////////
const compose = (f, g) => data => f(g(data))
const multiplyBy3 = num => num * 3
const makePositive = num => Math.abs(num)
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)
multiplyBy3AndAbsolute(-222)

// Composability is a system design principle that deals with the relationship between components.
// (multiplyBy3  and makePositive )  That can be selected and assembled in various combinations.
// so e,g we can to change the order of these components, so we get another result , 

// PIPE operates from left to right , while COMPOSE operates from right to left 

///////////////////// arity 
// arity.It simply means the number of arguments a function takes.
// That's it. If we look at compose function well, it has an arity of two.





/////////////////////////////// FP EXERCISES //////////////////////////
// Amazon shopping
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.



const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

const history1 = [];

const composeFn = (f, g) => (...args) => f(g(...args))
const pipe = (f, g) => (...args) => g(f(...args))

const purchaseItem = (...fns) => fns.reduce(composeFn);
const purchaseItem2 = (...fns) => fns.reduce(pipe);

// pipe  approach
purchaseItem2(
  addItemToCart,
  applyTaxToItems,
  buyItem,
  emptyUserCart,
)(user, { name: 'laptop', price: 60 })


// compose approach
// purchaseItem(
//   emptyUserCart,
//   buyItem,
//   applyTaxToItems,
//   addItemToCart
// )(user, {name: 'laptop', price: 50})

function addItemToCart(user, item) {
  history1.push(user)
  const updatedCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updatedCart });
}

function applyTaxToItems(user) {
  history1.push(user)
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => {
    return {
      name: item.name,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  history1.push(user)
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}
function emptyUserCart(user) {
  history1.push(user)
  return Object.assign({}, user, { cart: [] });
}

function refundItem() { }// this function may we can add it to the purchaseItem later on easily

///maybe these following are function that can be use to track user activity during purchasing item 
function getUserState() { }
function goBack() { }
function goForward() { }


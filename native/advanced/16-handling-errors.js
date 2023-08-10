const myError = new Error("oops, something went wrong")
// myError.name | myError.message | myError.stack
// stack is where the error occurred
function a() {
  const error = new Error("field to connect ")
  return error
}
a() //Error: field to connect 
// at a (<anonymous>:2:17) // look where the error occurred is on the top EXECUTION context 
// at <anonymous>:5:1

/// there are multiple error constructor in  JS
new SyntaxError | new ReferenceError;

// if there is no catch statements for an error,, in browser it uses: Runtime catch: onerror()
// while in nodejs is using: process.on('uncaughtException')

//////////////////////// handling errors ///////////////////
function fail() {
  try {
    // console.log("this will work");
    consol.log("won't work  work");
  } catch (error) {
    console.log(error); //consol is not defined
  }
}
fail()

function fail() {
  try {
    console.log("works");
    throw new Error("throwing error ");
  } catch (error) {
    console.log(error.message); //  throwing error 
  } finally {
    console.log('will be logged, no matter the case');
  }
  console.log("this won't be executed at all if there is an error ");
}
fail()

try {
  try {

  } catch (e) {
    throw new Error("throw this error to your parent")
  }
} catch (error) {
  console.log(error);//throw this error to your parent
}

// try catch works with synchronous codes only, 
try {
  setTimeout(() => console.log(variableNotExisted), 4000)
} catch (error) {
  console.log(error);
}// this will not FAIL! 


////////////// handling asynchronous errors /////////////////
Promise.resolve('asyncfail')
  .then(response => {
    console.log(response)
    throw new Error('#1 fail')
  })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.error('error', err.message)
  })
  .then(response => {
    console.log('hi am I still needed?', response)
    return 'done'
  })
  .catch(err => {
    console.error(err)
    return 'failed'
  })


  (async function () {
    try {
      await Promise.resolve('works')
      await Promise.reject('oopsie')
    } catch (err) {
      console.error(err)
    }
    console.log('This is still good!')
  })()
// oopsie
// This is still good
// note: Not using catch in async await, will give you a syntaxError 



//////////////// extending errors /////////////////////////////
class authenticationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
    this.message = message
  }
}
class PermissionError extends Error {
  constructor(message) {
    super(message)
    this.name = 'PermissionError'
    this.message = message
    this.favoriteSnack = 'grapes'
  }
}
class DatabaseError extends Error {
  constructor(message) {
    super(message)
    this.name = 'DatabaseError'
    this.message = message
  }
}
throw new PermissionError('A permission error')
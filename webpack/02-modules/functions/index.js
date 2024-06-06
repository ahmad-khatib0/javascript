// common js
// const { addAndMultiply, add } = require('./add')
// const subtract = require('./subtract')
import add, { addAndMultiply } from './add'
import subtract from './subtract'

export { add, subtract, addAndMultiply as addMultiply }

// common js
// module.exports = {
//   addMultiply: addAndMultiply,
//   add,
//   subtract,
// }

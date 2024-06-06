// import { add, multiply, square, subtract } from './math'
import * as math from './math.js'

// ╒═════════════════════════════════════════════════════════════════════════════════════╕
//    A great benfit of having modules, is that we only have access to the values
//    that we explicitly exported using the export keyword. Values that we didn't
//    explicitly export using the export keyword, are only available within that module.
// └─────────────────────────────────────────────────────────────────────────────────────┘

// default is the default exported function  (which is add in this case )
console.log(math.default(2, 3))
console.log(math.multiply(2))
console.log(math.subtract(2, 3))
console.log(math.square(2))

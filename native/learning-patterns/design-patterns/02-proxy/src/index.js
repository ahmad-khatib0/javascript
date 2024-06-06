// ▲
// █  Proxies are a powerful way to add control over the behavior of an object, proxy can have various
// █  use-cases: it can help with validation, formatting, noti cations, or debugging
// ▼

const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American',
}

// • get: Gets invoked when trying to access a property
// • set: Gets invoked when trying to modify a property
const personProxy = new Proxy(person, {
  get: (obj, prop) => {
    if (!obj[prop]) {
      console.log(`Hmm.. this property doesn't seem to exist`)
    } else {
      // console.log(`The value of ${prop} is ${obj[prop]}`)
      console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`)
    }
  },
  set: (obj, prop, value) => {
    // VALIDATION
    if (prop === 'age' && typeof value !== 'number') {
      console.log(`Sorry, you can only pass numeric values for age.`)
    } else if (prop === 'name' && value.length < 2) {
      console.log(`You need to provide a valid name.`)
    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`)

      // obj[prop] = value  // instead of modefing it directly,
      // we can access or modify properties on the target object through Reflect.
      Reflect.set(obj, prop, value)
    }
    return true
  },
})

personProxy.nonExistentProperty
personProxy.name // the value of name is John Doe
personProxy.age = 44 // changed age from 42 to 44

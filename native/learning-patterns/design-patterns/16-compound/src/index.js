import React from 'react'
import { render } from 'react-dom'

import './styles.css'

// Context API
// We have a list of squirrel images! Besides just
// showing squirrel images, we want to add a button that makes it possible for
// the user to edit or delete the image. We can implement a FlyOut component
// that shows a list when the user toggles the component.
// Within a FlyOut component, we essentially have three things:
//   • The FlyOut wrapper, which contains the toggle button and the list
//   • The Toggle button, which toggles the List
//   • The List , which contains the list of menu items

// Using the Compound component pattern with React's Context API is perfect for this example!

// Pros
// Compound components manage their own internal state, which they share
// among the several child components. When implementing a compound
// component, we don't have to worry about managing the state ourselves.
// When importing a compound component, we don't have to explicitly import the
// child components that are available on that component.
//
//
// Cons
// When using the React.children.map to provide the values, the
// component nesting is limited. Only direct children of the parent component will
// have access to the open and toggle props, meaning we can't wrap any of
// these components in another component.

function App() {
  return <div className="App"></div>
}

render(<App />, document.getElementById('root'))

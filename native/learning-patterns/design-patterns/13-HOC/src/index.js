import React from 'react'
import { render } from 'react-dom'

import DogImages from './DogImages'
import './styles.css'

// A Higher Order Component (HOC) is a component that receives another component.
// The HOC contains certain logic that we want to apply to the component that we pass as a
// parameter. After applying that logic, the HOC returns the element with the additional logic.
//
//
// Best use-cases for a HOC:
//    • The same, uncustomized behavior needs to be used by many components
//      throughout the application.
//
//    • The component can work standalone, without the added custom logic.
//
// Best use-cases for Hooks:
//
//    • The behavior has to be customized for each component that uses it.
//
//    • The behavior is not spread throughout the application, only one or a few
//      components use the behavior.
//
//    • The behavior adds many properties to the component
//
//

// Pros
// Using the Higher Order Component pattern allows us to keep logic that we
// want to re-use all in one place. This reduces the risk of accidentally spreading
// bugs throughout the application by duplicating code over and over, potentially
// introducing new bugs each time. By keeping the logic all in one place, we can
// keep our code DRY and easily enforce separation of concerns
//
//
// Cons
//
// -- The name of the prop that a HOC can pass to an element, can cause a naming collision.
//
// --  When using multiple composed HOCs that all pass props to the element that's
//     wrapped within them, it can be dif cult to gure out which HOC is responsible
//     for which prop. This can hinder debugging and scaling an application easily.

function App() {
  return (
    <div className="App">
      <h1>
        Browse Dog Images{' '}
        <span role="img" aria-label="emoji">
          🐕
        </span>
      </h1>
      <DogImages />
    </div>
  )
}

render(<App />, document.getElementById('root'))

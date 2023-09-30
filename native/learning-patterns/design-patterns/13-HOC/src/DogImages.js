import React from 'react'
import withLoader from './withLoader'
import withHover from './withHover'

// Composing
// We can also compose multiple Higher Order Components. Let's say that we
// also want to add functionality that shows a Hovering! text box when the user
// hovers over the DogImages list.
function DogImages(props) {
  return (
    <div {...props}>
      {props.hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  )
}

// Replace HOC with Hooks instead
//
// ╭───────────────────────────────────────────────────────────────────────────────────╮
// │  ╒══════════════════════════════════════════════════════════════════════════════╕ │
// │     Generally speaking, React Hooks don't replace the HOC pattern. As the React   │
// │     docs tell us, using Hooks can reduce the depth of the component tree. Using   │
// │     the HOC pattern, it's easy to end up with a deeply nested component tree.     │
// │  ╘══════════════════════════════════════════════════════════════════════════════╛ │
// ╰───────────────────────────────────────────────────────────────────────────────────╯
function DogImages(props) {
  const [hoverRef, hovering] = useHover()

  return (
    <div ref={hoverRef} {...props}>
      {hovering && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.message.map((dog, index) => (
          <img src={dog} alt="Dog" key={index} />
        ))}
      </div>
    </div>
  )
}

export default withHover(withLoader(DogImages, 'https://dog.ceo/api/breed/labrador/images/random/6'))

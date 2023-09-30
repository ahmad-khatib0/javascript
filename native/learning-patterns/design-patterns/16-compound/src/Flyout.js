import { createContext, useContext, useState } from 'react'

const FlyoutContext = createContext()

export function FlyOut(props) {
  const [open, toogle] = useState(false)

  return (
    <div>{React.Children.map(props.children, (child) => React.cloneElement(child, { open, toogle }))}</div>
  )
}

export function Toggle() {
  const { open, toggle } = useContext(FlyoutContext)

  return (
    <div onClick={() => toggle(!open)}>
      <Icon />
    </div>
  )
}

function List({ children }) {
  const { open } = useContext(FlyoutContext)
  return open && <ul>{children}</ul>
}

function Item({ children }) {
  return <li>{children}</li>
}

FlyOut.Toggle = Toggle
FlyOut.List = List
FlyOut.Item = Item

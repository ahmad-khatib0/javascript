import React from 'react'
import { render } from 'react-dom'

import './styles.css'

const Title = (props) => props.render()

// Another way of making components very reusable, is by using the render
// prop pattern. A render prop is a prop on a component, which value is a
// function that returns a JSX element. The component itself does not render
// anything besides the render prop. Instead, the component simply calls the
// render prop, instead of implementing its own rendering logic.

render(
  <div className="App">
    <Title render={() => <h1>✨ First render prop! ✨</h1>} />
    <Title render={() => <h2>🔥 Second render prop! 🔥</h2>} />
    <Title render={() => <h3>🚀 Third render prop! 🚀</h3>} />

    <h1>☃️ Temperature Converter 🌞</h1>
    <Input />
    <Kelvin />
    <Fahrenheit />
  </div>,
  document.getElementById('root'),
)

function Input() {
  const [value, setValue] = useState('')

  return (
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Temp in °C" />
  )
}

function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>
}

// HOOKs
//
export default function App() {
  return (
    <div className="App">
      <div className="col">
        <h3>Render Prop</h3>
        <InputRenderProp />
      </div>
      <div className="col">
        <h3>Hooks</h3>
        <InputHooks />
      </div>
    </div>
  )
}

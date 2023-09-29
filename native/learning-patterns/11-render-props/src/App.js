import React from 'react'
import './styles.css'

import InputRenderProp from './InputRenderProp'
import InputHooks from './InputHooks'

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

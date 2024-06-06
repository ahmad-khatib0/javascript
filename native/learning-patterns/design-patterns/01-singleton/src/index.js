import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import Counter from './counter'
import SuperCounter from './superCounter'
const counter = new SuperCounter()

counter.increment()
counter.increment()
counter.increment()

console.log('Counter in counter.js: ', Counter.getCount())

const rootElement = document.getElementById('root')
ReactDOM.render(<div className="App">Check the console!</div>, rootElement)

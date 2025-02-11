import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { App } from './components/App'
import { reducers } from './store/reducers'

const store = createStore(reducers, applyMiddleware(thunk))

// interface AppProps {
//   color?: string
// }
// interface AppState {
//   counter?: number
// }

// Functional Component

// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>
// }

// export class App extends React.Component<AppProps, AppState> {
//   // state = { counter: 0 }  // this is shorter, you don't need the constructor and AppState with it
//   // NOTE: you need to chose an option only, ethier the the constructor approach or this shorter one

//   constructor(props: AppProps) {
//     super(props)
//     this.state = { counter: 0 }
//   }

//   onIncrement = (): void => {
//     this.setState({ counter: this.state.counter! + 1 })
//   }
//   onDecrement = (): void => {
//     this.setState({ counter: this.state.counter! - 1 })
//   }

//   render() {
//     return (
//       <div>
//         {this.props.color}
//         <br />
//         <div>bar</div>
//         <button onClick={this.onIncrement}>Increment </button>
//         <button onClick={this.onDecrement}> Decrement </button>
//         {this.state.counter}
//       </div>
//     )
//   }
// }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)

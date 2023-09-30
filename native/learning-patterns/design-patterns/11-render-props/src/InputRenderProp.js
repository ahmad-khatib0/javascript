import React from 'react'
import './styles.css'

import { Mutation } from 'react-apollo'
import { ADD_MESSAGE } from './resolvers'

// The issue of naming collisions that we can run into by using the HOC pattern
// no longer applies by using the render props pattern, since we don't
// automatically merge props. We explicitly pass the props down to the child
// components, with the value provided by the parent component.
export default class Input extends React.Component {
  constructor() {
    super()
    this.state = { message: '' }
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={ADD_MESSAGE}
        variables={{ message: this.state.message }}
        onCompleted={() => console.log(`Added with render prop: ${this.state.message} `)}>
        {(addMessage) => (
          <div className="input-row">
            <input onChange={this.handleChange} type="text" placeholder="Type something..." />
            <button onClick={addMessage}>Add</button>
          </div>
        )}
      </Mutation>
    )
  }
}

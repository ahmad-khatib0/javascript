import React from 'react'
import './styles.css'

import { graphql } from 'react-apollo'
import { ADD_MESSAGE } from './resolvers'

class Input extends React.Component {
  constructor() {
    super()
    this.state = { message: '' }
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value })
  }

  handleClick = () => {
    this.props.mutate({ variables: { message: this.state.message } })
  }

  render() {
    return (
      <div className="input-row">
        <input onChange={this.handleChange} type="text" placeholder="Type something..." />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

export default graphql(ADD_MESSAGE)(Input)
